import React, { useState, useMemo, useCallback } from 'react';

/* ─── Light-theme tokens ─── */
const T = {
  bg: '#f8f9fa', surface: '#ffffff', surface2: '#f1f3f5', faint: '#f8f9fa',
  border: '#e5e7eb', text: '#1a1a2e', muted: '#6b7280',
  food: '#2dd4a7', market: '#5b9cf6', income: '#f5a623', system: '#c084fc',
  accent3: '#e05c5c',
};

/* ─── Lever definitions (match reference exactly) ─── */
const LEVERS = [
  { id: 'hybrid', label: 'Hybrid Seed Systems', group: 'Crop Productivity', max: 30, def: 18, desc: 'High-yield varieties + farmer training networks', evidence: 'Source: UC Davis RCT 2017' },
  { id: 'ai', label: 'AI Advisory Platforms', group: 'Crop Productivity', max: 20, def: 10, desc: 'Digital weather, soil & market intelligence services', evidence: 'Source: TomorrowNow-KALRO 2024' },
  { id: 'biofert', label: 'Biofertilizers', group: 'Crop Productivity', max: 10, def: 5, desc: 'Rhizobium and mycorrhizal inoculants', evidence: 'Source: IITA Nairobi 2018' },
  { id: 'irrig', label: 'Irrigation Kits', group: 'Crop Productivity', max: 25, def: 15, desc: 'Solar drip systems + micro-catchment infrastructure', evidence: 'Source: Duke SunCulture RCT 2023\u201325' },
  { id: 'feed', label: 'Feed & Fodder Systems', group: 'Livestock Systems', max: 20, def: 12, desc: 'Conservation agriculture + silage technology', evidence: 'Source: Homa Bay study 2023' },
  { id: 'dairy', label: 'Dairy Genetics', group: 'Livestock Systems', max: 15, def: 8, desc: 'AI breeding services & disease-resistant stock', evidence: 'Source: JAGST 2022' },
  { id: 'fmd', label: 'FMD Vaccination', group: 'Livestock Systems', max: 10, def: 6, desc: 'Regional animal health surveillance + coverage', evidence: 'Source: AgResults/World Bank 2021' },
  { id: 'meat', label: 'Pastoral Red Meat Offtake', group: 'Livestock Systems', max: 15, def: 8, desc: 'Export certification + market linkage platforms', evidence: 'Source: Springer 2019' },
  { id: 'aqua', label: 'Aquaculture', group: 'Livestock Systems', max: 10, def: 4, desc: 'Fingerling production + pond systems in water basins', evidence: 'Source: Kenya Fisheries 2024' },
];

const EXEC_DEFAULTS = { hybrid: 40, ai: 30, biofert: 25, irrig: 35, feed: 25, dairy: 20, fmd: 15, meat: 20, aqua: 20 };

const MOD_LEVERS = [
  { id: 'drought', label: 'Drought Probability (Pd)', max: 100, def: 35, desc: 'Probability of severe SPI event (\u2264 \u22120.78). Destroys rainfed yield; acts as 2x-3x value multiplier for irrigated plots.', evidence: 'Source: NDMA 2026 ASAL Forecasts', unit: '%' },
  { id: 'credit', label: 'Credit Constraint (C)', max: 100, def: 54, desc: 'Percentage of farmers technically ready but financially excluded. Directly gates adoption of Solar Irrigation and Dairy Genetics.', evidence: 'Source: FSD Kenya Affordability Barrier', unit: '%' },
  { id: 'gender', label: 'Female Targeting (Eg)', max: 40, def: 20, desc: 'Target is 40%. Dropping below target triggers the Busia productivity penalty (\u221243% to \u221272%) on overall system efficiency.', evidence: 'Source: Busia 2024 / FAO Profiles', unit: '%' },
  { id: 'trace', label: 'Traceability Cost', max: 50, def: 40, desc: 'Per-animal RFID compliance cost. High cost combined with high Credit Constraint (C) blocks pastoral export offtake completely.', evidence: 'Source: ANITRAC / LITS Proxies', unit: '$' },
];

const EXEC_LABELS = {
  hybrid: 'Hybrid Seed Deployment', ai: 'AI Advisory Rollout', biofert: 'Biofertilizer Adoption',
  irrig: 'Irrigation Deployment', feed: 'Feed System Scale-up', dairy: 'Dairy Genetics Rollout',
  fmd: 'FMD Vaccination Coverage', meat: 'Pastoral Market Linkage', aqua: 'Aquaculture System Scale',
};

/* ─── Lever → Goal mapping table data ─── */
const MAPPING_ROWS = [
  { lever: 'Hybrid Seed', goals: ['food','market','income','system'], dots: 3, weight: 'h\u00d72.2 (food)\nh\u00d74.5 (income)', evidence: 'RCT: +41% yield/acre (UC Davis 2017). 4yr panel: income + assets raised (ScienceDirect 2013). Modulated heavily by Drought (Pd).' },
  { lever: 'AI Advisory', goals: ['income','system','food'], dots: 3, weight: 'ai\u00d77.0 (income)\nai\u00d718 (system)', evidence: 'TomorrowNow+KALRO: +15% income (2024). Digital Green RCT: +24% income, +17% yield. Systemic value gated by Female Targeting (Eg).' },
  { lever: 'Irrigation', goals: ['food','income','system'], dots: 2, weight: 'ir\u00d70.45 (food)\nir\u00d73.0 (income)', evidence: 'SunCulture RCT (Duke 2023\u201325): plots irrigated doubled (23%\u219250%). Acts as a 2x-3x buffer during high Drought (Pd), but constrained by Credit (C).' },
  { lever: 'Feed & Fodder', goals: ['market','income','system'], dots: 3, weight: 'fe\u00d718 (market)\nfe\u00d72.0 (income)', evidence: 'Homa Bay study (Tandfonline 2023): feed = 60\u201380% of dairy costs. CRIF dependent on hybrid seed residue volumes.' },
  { lever: 'Dairy Genetics', goals: ['income','system'], dots: 1, weight: 'da\u00d71.5 (income)\nda\u00d75 (system)', evidence: 'JAGST 2022: only 16.4% use AI services. ILRI: genetics 40% less effective without feed. Highly capital intensive; gated heavily by Credit Constraint (C).' },
  { lever: 'Pastoral Offtake', goals: ['income','market'], dots: 2, weight: 'me\u00d73.0 (income)\nme\u00d73 (market)', evidence: 'Springer 2019: pastoralism $1.13B Kenya. Highest per-HH income gain ($1,500\u20132,000/yr). Collapses if Traceability Costs ($) and Credit Constraints (%) block export.' },
];

/* ─── Slider component ─── */
function Slider({ label, value, min, max, step, onChange, desc, evidence, unit, color }) {
  const pct = ((value - min) / (max - min)) * 100;
  const accentColor = color || T.food;
  const formatVal = (v) => {
    if (unit === '$') return `$${v}`;
    if (unit === '%') return `${v}%`;
    return `$${v}M`;
  };
  return (
    <div style={{ background: color === T.system ? 'rgba(192,132,252,0.05)' : T.faint, border: `1px solid ${color === T.system ? 'rgba(192,132,252,0.3)' : T.border}`, borderRadius: 10, padding: '14px 16px', marginBottom: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 }}>
        <span style={{ color: T.text, fontSize: 13, fontWeight: 500, flex: 1, lineHeight: 1.3 }}>{label}</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, fontWeight: 500, color: accentColor, minWidth: 42, textAlign: 'right' }}>{formatVal(value)}</span>
      </div>
      {desc && <div style={{ color: T.muted, fontSize: 11, marginBottom: 10, lineHeight: 1.45 }}>{desc}</div>}
      {evidence && <div style={{ color: `${accentColor}80`, fontSize: 9, marginBottom: 8, fontFamily: "'DM Mono', monospace", letterSpacing: '0.05em' }}>{evidence}</div>}
      <div style={{ position: 'relative', height: 4, background: T.border, borderRadius: 4, margin: '8px 0 4px' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: `${pct}%`, background: accentColor, borderRadius: 4, transition: 'width 0.05s' }} />
      </div>
      <input
        type="range" min={min} max={max} step={step || 1} value={value}
        onChange={e => onChange(Number(e.target.value))}
        style={{ width: '100%', marginTop: -6, position: 'relative', zIndex: 1, WebkitAppearance: 'none', appearance: 'none', background: 'transparent', cursor: 'pointer', height: 20 }}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, color: T.muted, fontFamily: "'DM Mono', monospace", marginTop: 2 }}>
        <span>{formatVal(min)}</span>
        <span>{unit === '%' && label.includes('Female') ? 'Target: 40%+' : formatVal(max)}</span>
      </div>
    </div>
  );
}

/* ─── Goal chip ─── */
function GoalChip({ type }) {
  const colors = { food: T.food, market: T.market, income: T.income, system: T.system };
  const labels = { food: 'Food', market: 'Market', income: 'Income', system: 'System' };
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: 10, padding: '3px 8px', borderRadius: 4, fontFamily: "'DM Mono', monospace", fontWeight: 600, color: '#0d1117', background: colors[type], margin: '2px 2px 2px 0' }}>
      {labels[type]}
    </span>
  );
}

/* ─── Impact dots ─── */
function ImpactDots({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1,2,3].map(i => (
        <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: i <= count ? T.food : T.border }} />
      ))}
    </div>
  );
}

/* ─── Delta badge ─── */
function DeltaBadge({ value, unit }) {
  const n = parseFloat(value);
  const cls = n > 2 ? 'up' : n < 0 ? 'down' : 'neutral';
  const bg = cls === 'up' ? 'rgba(45,212,167,0.12)' : cls === 'down' ? 'rgba(224,92,92,0.12)' : 'rgba(107,124,147,0.12)';
  const color = cls === 'up' ? T.food : cls === 'down' ? T.accent3 : T.muted;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3, fontSize: 11, fontFamily: "'DM Mono', monospace", padding: '2px 7px', borderRadius: 20, marginBottom: 8, background: bg, color }}>
      {n >= 0 ? '\u2191 +' : '\u2193 '}{value}{unit}
    </span>
  );
}

/* ─── Goal card ─── */
function GoalCard({ domain, title, value, baseline, target, unit, type, formatValue }) {
  const colors = { food: T.food, market: T.market, income: T.income, system: T.system };
  const accentColor = colors[type];
  const pct = type === 'food'
    ? Math.round((value - baseline) / (target - baseline) * 100)
    : Math.round(value / target * 100);
  const gap = type === 'food'
    ? `${(target - value).toFixed(1)} MT/ha`
    : `${(target - value).toFixed(0)}%`;
  const deltaVal = type === 'food'
    ? (value - baseline).toFixed(2)
    : value.toFixed(1);
  const deltaUnit = type === 'food' ? 'MT/ha' : '%';
  const displayVal = formatValue ? formatValue(value) : value.toFixed(1);

  return (
    <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 18, position: 'relative', overflow: 'hidden', flex: 1, minWidth: 160 }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: accentColor, borderRadius: '12px 12px 0 0' }} />
      <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace", marginBottom: 6, color: accentColor }}>{domain}</div>
      <div style={{ fontSize: 12, fontWeight: 500, color: T.muted, marginBottom: 12, lineHeight: 1.35 }}>{title}</div>
      <DeltaBadge value={deltaVal} unit={deltaUnit} />
      <div style={{ fontSize: 26, lineHeight: 1, marginBottom: 4, fontWeight: 700, color: T.text }}>{displayVal}</div>
      <div style={{ fontSize: 10, color: T.muted, fontFamily: "'DM Mono', monospace", marginBottom: 12 }}>
        {type === 'food' ? `Baseline ${baseline} \u2192 Target ${target} MT/ha` : `Target: ${target}${unit}`}
      </div>
      <div style={{ height: 6, background: T.border, borderRadius: 4, overflow: 'hidden', marginBottom: 6 }}>
        <div style={{ height: '100%', width: `${Math.max(0, Math.min(pct, 100))}%`, background: accentColor, borderRadius: 4, transition: 'width 0.5s cubic-bezier(.4,0,.2,1)' }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: T.muted, fontFamily: "'DM Mono', monospace" }}>
        <span>{Math.max(0, pct)}% of target</span>
        <span>Gap: {gap}</span>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function StressTester() {
  const [mode, setMode] = useState('investment');

  const [inv, setInv] = useState(() => {
    const o = {}; LEVERS.forEach(l => { o[l.id] = l.def; }); return o;
  });
  const [exec, setExec] = useState({ ...EXEC_DEFAULTS });
  const [mods, setMods] = useState(() => {
    const o = {}; MOD_LEVERS.forEach(m => { o[m.id] = m.def; }); return o;
  });

  const setInvVal = (id, v) => setInv(prev => ({ ...prev, [id]: v }));
  const setExecVal = (id, v) => setExec(prev => ({ ...prev, [id]: v }));
  const setModVal = (id, v) => setMods(prev => ({ ...prev, [id]: v }));

  const resetAll = useCallback(() => {
    const invD = {}; LEVERS.forEach(l => { invD[l.id] = l.def; });
    setInv(invD);
    setExec({ ...EXEC_DEFAULTS });
    const modD = {}; MOD_LEVERS.forEach(m => { modD[m.id] = m.def; });
    setMods(modD);
  }, []);

  /* ─── Computation (matches reference formulas exactly) ─── */
  const results = useMemo(() => {
    const maxInv = {}; LEVERS.forEach(l => { maxInv[l.id] = l.max; });
    const getNorm = (key) => (inv[key] / maxInv[key]) * (exec[key] / 100);

    const h = getNorm('hybrid'), ai = getNorm('ai'), bi = getNorm('biofert');
    const ir = getNorm('irrig'), fe = getNorm('feed'), da = getNorm('dairy');
    const fm = getNorm('fmd'), me = getNorm('meat'), aq = getNorm('aqua');

    const pd = mods.drought / 100;
    const c = mods.credit / 100;
    const genderTarget = mods.gender;
    const traceCost = mods.trace;

    // Credit constraint + temporal lag
    const effectiveIrrig = ir * (1 - c);
    const effectiveDairy = (da * (1 - c)) * 0.75;
    const effectiveFmd = fm * 0.85;

    // Drought: rainfed vs irrigated
    const rainfedYield = (h * 2.2 + ai * h * 0.35 + bi * h * 0.25) * (1 - pd);
    const irrigatedYield = (effectiveIrrig * 0.45) * (1 + (pd * 1.5));
    const maizeYield = Math.min(1.5 + rainfedYield + irrigatedYield, 4.5);

    // Traceability market gate
    let effectiveMeat = me;
    let exportCollapsed = false;
    if (traceCost > 20 && c > 0.30) {
      effectiveMeat = me * 0.1;
      exportCollapsed = true;
    }

    // Gender equity penalty
    let egMult = 1.0;
    if (genderTarget < 40) {
      const gap = (40 - genderTarget) / 40;
      egMult = 1.0 - (gap * 0.50);
    }

    // Goals (reference formulas)
    const feedReduction = Math.min((fe * 18 + h * 7 + effectiveMeat * 3 + effectiveDairy * 1 + aq * 2) * egMult, 30);
    const incomeUplift = Math.min((ai * 7.0 + h * 4.5 + effectiveIrrig * 3.0 + effectiveMeat * 3.0 + fe * 2.0 + effectiveDairy * 1.5 + aq * 1.2 + effectiveFmd * 0.5 + bi * 0.5) * egMult, 18);
    const adoption = Math.min((ai * 18 + h * 12 + effectiveIrrig * 8 + effectiveDairy * 5 + effectiveMeat * 5 + aq * 3 + fe * 4 + effectiveFmd * 4) * egMult, 50);

    // Waterfall items
    const waterfall = [
      { label: 'AI Advisory', value: +(ai * 7.0 * egMult).toFixed(1), color: T.food },
      { label: 'Hybrid Seed', value: +(h * 4.5 * egMult).toFixed(1), color: T.market },
      { label: 'Irrigation', value: +(effectiveIrrig * 3.0 * egMult).toFixed(1), color: T.income },
      { label: 'Pastoral', value: +(effectiveMeat * 3.0 * egMult).toFixed(1), color: T.system },
      { label: 'Feed Sys.', value: +(fe * 2.0 * egMult).toFixed(1), color: T.accent3 },
      { label: 'Dairy Gen.', value: +(effectiveDairy * 1.5 * egMult).toFixed(1), color: '#22d3ee' },
      { label: 'Aquaculture', value: +(aq * 1.2 * egMult).toFixed(1), color: '#10b981' },
    ];

    // Scenario assessment
    const foodPct = Math.round((maizeYield - 1.5) / 3.0 * 100);
    const mktPct = Math.round(feedReduction / 30 * 100);
    const incPct = Math.round(incomeUplift / 18 * 100);
    const sysPct = Math.round(adoption / 50 * 100);
    const avgGoal = (foodPct + mktPct + incPct + sysPct) / 4;
    const scenario = avgGoal < 30 ? 'Sub-Critical Scenario' : avgGoal < 60 ? 'Moderate Impact Scenario' : 'High Impact Scenario';

    // Alerts
    let alert = null;
    if (exportCollapsed) {
      alert = { title: '\u26a0\ufe0f Market Failure: Traceability Gate', msg: `Pastoral export has collapsed. The $${traceCost} ANITRAC compliance cost cannot be met by producers due to a ${mods.credit}% credit constraint.` };
    } else if (egMult < 0.95) {
      alert = { title: '\u26a0\ufe0f Systemic Drag: Gender Productivity Gap', msg: `Failing to reach the 40% female targeting goal is triggering a -${Math.round((1-egMult)*100)}% structural productivity penalty across the system.` };
    } else if (mods.drought > 30 && mods.credit > 50) {
      alert = { title: '\u26a0\ufe0f Compounding Risk: Drought + Credit Exclusion', msg: `Severe drought (${mods.drought}%) is wiping out rainfed gains, and farmers lack the credit access to invest in protective solar irrigation.` };
    }

    // Priorities
    const candidates = [
      { title: 'Unlock Credit for Irrigation', reason: 'High credit constraints are currently choking irrigation ROI.', score: (ir - effectiveIrrig) * 5 },
      { title: 'Subsidize Traceability', reason: 'High ANITRAC costs are blocking pastoral offtake.', score: (me - effectiveMeat) * 6 },
      { title: 'Target Female Farmers', reason: 'Gender gap is penalizing total system output.', score: genderTarget < 40 ? 4 : 0 },
      { title: 'Hybrid Seed Distribution', reason: 'Base yield driver, currently under-executed.', score: (1 - h) * 3 },
    ].sort((a, b) => b.score - a.score).filter(p => p.score > 0.5).slice(0, 2);

    return {
      maizeYield, feedReduction, incomeUplift, adoption,
      waterfall, scenario, alert, egMult,
      effectiveIrrig, effectiveDairy, effectiveMeat,
      priorities: candidates,
    };
  }, [inv, exec, mods]);

  const totalInvest = Object.values(inv).reduce((s, v) => s + v, 0);

  const modes = [
    { key: 'investment', label: 'Investment ($M)' },
    { key: 'execution', label: 'Execution (%)' },
    { key: 'modifiers', label: 'System Modifiers' },
  ];

  // Group levers
  const groups = {};
  LEVERS.forEach(l => { if (!groups[l.group]) groups[l.group] = []; groups[l.group].push(l); });

  const wfMax = Math.max(...results.waterfall.map(w => w.value), 0.1);

  return (
    <div className="st-root" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '100vh', background: T.bg, color: T.text, fontFamily: "'Outfit', 'DM Sans', -apple-system, sans-serif", fontSize: 14, lineHeight: 1.5 }}>
      <style>{`
        @media(max-width:900px){
          .st-body{grid-template-columns:1fr!important;}
          .st-goals-grid{grid-template-columns:repeat(2,1fr)!important;}
          .st-wf-grid{grid-template-columns:1fr!important;}
          .st-header-right{display:none!important;}
        }
        @media(max-width:600px){
          .st-goals-grid{grid-template-columns:1fr!important;}
          .st-root header{padding:10px 16px!important;}
          .st-root .st-body+div,.st-root>div:last-child{padding:16px!important;}
        }
      `}</style>
      {/* Header */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 28px', borderBottom: `1px solid ${T.border}`, background: T.surface, position: 'relative', zIndex: 100, flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, background: T.food, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>{'\ud83c\udf3f'}</div>
          <div>
            <div style={{ fontSize: 17, fontWeight: 600 }}>Strategy Stress-Tester</div>
            <div style={{ fontSize: 11, color: T.muted, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Kenya Food Systems</div>
          </div>
        </div>
        <div className="st-header-right" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ fontSize: 11, color: T.muted }}>
            <strong style={{ color: T.income }}>{'\u2696\ufe0f'} Policy Alert: TELA Maize</strong><br/>
            Blocked by High Court injunction. Yield impact: <strong style={{ color: T.accent3 }}>{'\u22121.2 MT/ha'}</strong>
          </div>
          <div style={{ fontSize: 10, color: T.muted, borderLeft: `1px solid ${T.border}`, paddingLeft: 16 }}>
            Data: KNBS NAPR 2025<br/>Sources: FAOSTAT {'\u00b7'} AMIS {'\u00b7'} OSM {'\u00b7'} WOAH
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="st-body" style={{ display: 'grid', gridTemplateColumns: '360px 1fr', flex: 1, overflow: 'hidden' }}>
        {/* Left Panel */}
        <div style={{ borderRight: `1px solid ${T.border}`, overflowY: 'auto', background: T.surface, padding: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", padding: '4px 0 8px' }}>{'\u2699\ufe0f'} Simulation Controls</div>

          {/* Tab group */}
          <div style={{ display: 'flex', background: T.bg, border: `1px solid ${T.border}`, borderRadius: 8, padding: 3, gap: 2 }}>
            {modes.map(m => (
              <button key={m.key} onClick={() => setMode(m.key)} style={{
                padding: '6px 16px', borderRadius: 6, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 500,
                fontFamily: "'Outfit', sans-serif",
                background: mode === m.key ? T.surface2 : 'transparent',
                color: mode === m.key ? (m.key === 'modifiers' ? T.system : T.text) : T.muted,
                boxShadow: mode === m.key ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                transition: 'all 0.18s ease',
              }}>
                {m.label}
              </button>
            ))}
          </div>

          {/* Reset */}
          <button onClick={resetAll} style={{
            padding: '7px 16px', borderRadius: 7, border: `1px solid ${T.border}`, background: 'transparent',
            color: T.muted, fontFamily: "'Outfit', sans-serif", fontSize: 12, cursor: 'pointer', letterSpacing: '0.04em',
          }}>
            Reset Simulation
          </button>

          {/* Investment sliders */}
          {mode === 'investment' && Object.entries(groups).map(([group, levers]) => (
            <React.Fragment key={group}>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", padding: '12px 0 6px', borderTop: `1px solid ${T.border}`, marginTop: 8 }}>{group}</div>
              {levers.map(l => (
                <Slider key={l.id} label={l.label} value={inv[l.id]} min={0} max={l.max} onChange={v => setInvVal(l.id, v)} desc={l.desc} evidence={l.evidence} color={T.food} />
              ))}
            </React.Fragment>
          ))}

          {/* Execution sliders */}
          {mode === 'execution' && (
            <>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", padding: '12px 0 6px', borderTop: `1px solid ${T.border}`, marginTop: 8 }}>Implementation Readiness</div>
              {LEVERS.map(l => (
                <Slider key={l.id} label={EXEC_LABELS[l.id]} value={exec[l.id]} min={0} max={100} onChange={v => setExecVal(l.id, v)} unit="%" color={T.food} />
              ))}
            </>
          )}

          {/* Modifier sliders */}
          {mode === 'modifiers' && (
            <>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", padding: '12px 0 6px', borderTop: `1px solid ${T.border}`, marginTop: 8 }}>Exogenous & Systemic Gates</div>
              {MOD_LEVERS.map(m => (
                <Slider key={m.id} label={m.label} value={mods[m.id]} min={0} max={m.max} onChange={v => setModVal(m.id, v)} desc={m.desc} evidence={m.evidence} unit={m.unit} color={T.system} />
              ))}
            </>
          )}
        </div>

        {/* Right Panel */}
        <div style={{ overflowY: 'auto', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 28 }}>
          {/* Scenario Banner */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 20 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", whiteSpace: 'nowrap' }}>Dynamic Scenario Assessment</div>
              <div style={{ fontSize: 20, color: T.food, fontWeight: 700, marginTop: 4 }}>{results.scenario}</div>
            </div>
            <div style={{ fontSize: 24 }}>{'\u26a0\ufe0f'}</div>
          </div>

          {/* Alert */}
          {results.alert && (
            <div style={{ background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.3)', borderRadius: 10, padding: '14px 16px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 16, flexShrink: 0, marginTop: 1 }}>{'\u26a0\ufe0f'}</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 600, color: T.income, marginBottom: 4 }}>{results.alert.title}</div>
                <div style={{ fontSize: 12, color: T.muted, lineHeight: 1.5 }}>{results.alert.msg}</div>
              </div>
            </div>
          )}

          {/* Strategic Goals */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Strategic Goal Progress</h2>
              <span style={{ background: 'rgba(45,212,167,0.12)', color: T.food, fontSize: 10, padding: '2px 8px', borderRadius: 4, fontFamily: "'DM Mono', monospace" }}>Live</span>
            </div>
            <p style={{ fontSize: 12, color: T.muted, marginBottom: 16, marginTop: 0 }}>Output modulated by dynamic exogenous variables: Drought, Credit Limits, and Traceability costs.</p>

            <div className="st-goals-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
              <GoalCard type="food" domain="Food Security" title="Maize Yield (MT/ha)" value={results.maizeYield} baseline={1.5} target={4.5} unit=" MT/ha" formatValue={v => v.toFixed(1)} />
              <GoalCard type="market" domain="Market Systems" title="Feed Cost Reduction" value={results.feedReduction} baseline={0} target={30} unit="%" formatValue={v => v.toFixed(0) + '%'} />
              <GoalCard type="income" domain="Income & Economic" title="Smallholder Income Uplift" value={results.incomeUplift} baseline={0} target={18} unit="%" formatValue={v => v.toFixed(1) + '%'} />
              <GoalCard type="system" domain="Systems Transformation" title="Technology Adoption" value={results.adoption} baseline={0} target={50} unit="%" formatValue={v => v.toFixed(0) + '%'} />
            </div>
          </div>

          {/* Waterfall + Priorities (2-col grid) */}
          <div className="st-wf-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* Waterfall Chart */}
            <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 4 }}>Income Uplift Contribution Breakdown</div>
              <div style={{ fontSize: 11, color: T.muted, marginBottom: 20 }}>Per-lever contribution to the 18% target, modified by Credit Constraints and Gender Equity.</div>
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120 }}>
                {results.waterfall.map((w, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <div style={{ fontSize: 10, color: T.food, fontFamily: "'DM Mono', monospace" }}>
                      {w.value > 0 ? `+${w.value}%` : '0%'}
                    </div>
                    <div style={{
                      width: '100%', borderRadius: '4px 4px 0 0', minHeight: 4,
                      height: Math.max(w.value / wfMax * 80, 4),
                      background: w.color, opacity: w.value > 0 ? 1 : 0.3,
                      transition: 'height 0.5s cubic-bezier(.4,0,.2,1)',
                    }} />
                    <div style={{ fontSize: 9, color: T.muted, textAlign: 'center', lineHeight: 1.3 }}>{w.label}</div>
                  </div>
                ))}
              </div>
              {results.egMult < 1 && (
                <div style={{ marginTop: 12, fontSize: 11, color: T.income }}>
                  Gender equity multiplier active: {(results.egMult * 100).toFixed(0)}% effective capacity
                </div>
              )}
            </div>

            {/* Priorities */}
            <div>
              <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>Systematic Priorities</h2>
              <p style={{ fontSize: 12, color: T.muted, marginBottom: 16, marginTop: 0 }}>Ranked by ROI headroom and current gate clearance.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {results.priorities.length === 0 ? (
                  <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>System Optimized</div>
                    <div style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>Current variables show no critical bottlenecks.</div>
                  </div>
                ) : results.priorities.map((p, i) => (
                  <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 16, position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 12, right: 12, fontSize: 32, color: T.border, lineHeight: 1, fontWeight: 700 }}>{i + 1}</div>
                    <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", marginBottom: 6 }}>Action Priority</div>
                    <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6, paddingRight: 30 }}>{p.title}</div>
                    <div style={{ fontSize: 11, color: T.muted, lineHeight: 1.5 }}>{p.reason}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Lever → Goal Mapping Table */}
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>Lever {'\u2192'} Goal Mapping</h2>
            <p style={{ fontSize: 12, color: T.muted, marginBottom: 16, marginTop: 0 }}>
              Evidence-grounded impact strength. Formula weights are dynamically modulated by Systemic Gates.{' '}
              <span style={{ background: 'rgba(45,212,167,0.12)', color: T.food, fontSize: 10, padding: '2px 8px', borderRadius: 4, fontFamily: "'DM Mono', monospace" }}>Evidence-grounded</span>
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: T.surface, borderRadius: 12, overflow: 'hidden', border: `1px solid ${T.border}` }}>
                <thead>
                  <tr>
                    {['Lever', 'Primary Goals', 'Impact', 'Formula Weight', 'Evidence Base & Key Factors'].map(h => (
                      <th key={h} style={{ background: T.surface2, padding: '10px 14px', textAlign: 'left', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", fontWeight: 400, borderBottom: `1px solid ${T.border}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {MAPPING_ROWS.map((row, i) => (
                    <tr key={i}>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontWeight: 600, fontSize: 12, verticalAlign: 'top' }}>{row.lever}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, verticalAlign: 'top' }}>
                        {row.goals.map(g => <GoalChip key={g} type={g} />)}
                      </td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, verticalAlign: 'top' }}>
                        <ImpactDots count={row.dots} />
                      </td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12, verticalAlign: 'top', whiteSpace: 'pre-line' }}>{row.weight}</td>
                      <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12.5, verticalAlign: 'top', color: T.muted, lineHeight: 1.5 }}>{row.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Core Equation Variables */}
          <div>
            <h2 style={{ margin: '0 0 4px', fontSize: 18, fontWeight: 700 }}>Core Equation Variables (Live Simulation States)</h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: T.surface, borderRadius: 12, overflow: 'hidden', border: `1px solid ${T.border}`, marginTop: 12 }}>
                <thead>
                  <tr>
                    {['Variable', 'Current State', 'Systemic Impact on Formula'].map(h => (
                      <th key={h} style={{ background: T.surface2, padding: '10px 14px', textAlign: 'left', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", fontWeight: 400, borderBottom: `1px solid ${T.border}` }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontWeight: 600, fontSize: 12 }}>Credit Constraint (C)</td>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12 }}>{mods.credit}%</td>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12.5, color: T.muted }}>Acts as an inverse multiplier on Irrigation and Dairy Genetics adoption.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontWeight: 600, fontSize: 12 }}>Drought Prob. (Pd)</td>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12 }}>{mods.drought}%</td>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12.5, color: T.muted }}>Degrades rainfed hybrid yield; amplifies relative value of irrigated plots.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontWeight: 600, fontSize: 12 }}>Equity Mult. (Eg)</td>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12 }}>{mods.gender}%</td>
                    <td style={{ padding: '11px 14px', borderBottom: `1px solid ${T.faint}`, fontSize: 12.5, color: T.muted }}>Applies up to a 50% systemic drag on total income and adoption if {'<'}40%.</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '11px 14px', fontWeight: 600, fontSize: 12 }}>Traceability (Minfra)</td>
                    <td style={{ padding: '11px 14px', fontSize: 12 }}>${mods.trace} / unit</td>
                    <td style={{ padding: '11px 14px', fontSize: 12.5, color: T.muted }}>If cost {'>'} $20 and Credit Constraint {'>'} 30%, pastoral export markets collapse.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Evidence Sources */}
          <div style={{ fontSize: 9, color: T.muted, marginTop: 16, paddingTop: 10, borderTop: `1px solid ${T.border}`, lineHeight: 1.6 }}>
            <strong>Evidence Sources:</strong> UC Davis/MRR Lab RCT 2017; ScienceDirect Kenya panel 2013; TomorrowNow-KALRO partnership data 2024; Digital Green / Agency Fund RCT 2025; World Bank Kenya KAOP 2023; Tandfonline/Homa Bay dairy costs study 2023; JAGST Smallholder Dairy Farm Economics 2022; ILRI Marsabit pastoralist panel; Springer Pastoralism Journal 2019; Climate Impact Partners Kenya solar pump; Duke University/Shell Foundation SunCulture RCT 2023{'\u2013'}25; AgResults/World Bank FMD Vaccine Project 2021; BMC Veterinary Research 2025; Frontiers Sustainable Food Systems 2022; Kenya Fisheries Services 2024; NIH/PMC multi-nutrient fertilizer Kenya 2023; IITA Nairobi rhizobium 2018; FEWS NET Kenya food security outlook 2023{'\u2013'}24; KNBS National Agriculture Production Report 2024{'\u2013'}25; NDMA 2026 ASAL Forecasts; FSD Kenya Affordability Barrier; Busia 2024 / FAO Profiles; ANITRAC / LITS Proxies.
            <br/><br/>
            <strong>Coefficient Confidence Tiers (3-Round Validation, May 2026):</strong><br/>
            {'\u25a0'} BACKED {'\u2014'} Specific coefficient matched to peer-reviewed or institutional source (ILRI, FAO RIMA-II, World Bank, Tegemeo Institute, CIMMYT, KDB, APHLIS).<br/>
            {'\u25a0'} PARTIAL {'\u2014'} Direction & mechanism backed; specific coefficient is a calibrated derivation ({'\u00b1'}15{'\u2013'}20% uncertainty band).<br/>
            {'\u25a0'} DESIGN {'\u2014'} Model design parameter: ceiling/floor value with no direct empirical counterpart. Formula weights marked ~ are PARTIAL; all others are BACKED. This DSS is a scenario planning tool {'\u2014'} outputs show relative lever importance, not precision forecasts.
          </div>
        </div>
      </div>
    </div>
  );
}
