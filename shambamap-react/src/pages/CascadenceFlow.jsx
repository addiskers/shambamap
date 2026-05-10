import React, { useState, useRef, useEffect, useCallback } from 'react';

/* ─── Light-theme tokens ─── */
const T = {
  bg: '#f8f9fa', surface: '#ffffff', surface2: '#f1f3f5', faint: '#f8f9fa',
  border: '#e5e7eb', muted: '#6b7280', text: '#1a1a2e',
  food: '#2dd4a7', market: '#60a5fa', income: '#f5a623', system: '#c084fc',
  cSeed: '#34d399', cAi: '#60a5fa', cBio: '#a3e635', cIrrig: '#22d3ee',
  cFeed: '#fb923c', cDairy: '#c084fc', cFmd: '#f43f5e', cMeat: '#fbbf24', cAqua: '#2dd4a7',
};

/* ─── Bet data ─── */
const BETS = [
  { id: 'seed', label: 'Hybrid Seed Systems', sub: 'KALRO \u00b7 Seed Cos \u00b7 EGS\nAgro-dealer networks', color: T.cSeed },
  { id: 'ai', label: 'AI Advisory Platforms', sub: 'KALRO-TomorrowNow \u00b7 SMS\n~5M farmers reached', color: T.cAi },
  { id: 'bio', label: 'Biofertilizers', sub: 'Soil health \u00b7 Input cost\nBundled with seed', color: T.cBio },
  { id: 'irrig', label: 'Irrigation Kits', sub: 'Solar pumps \u00b7 600K farmers\n550K ha \u00b7 \u2264$200 target', color: T.cIrrig },
  { id: 'feed', label: 'Feed & Fodder Systems', sub: 'CRIF \u00b7 TMR \u00b7 BSF protein\n63\u201373% of dairy costs', color: T.cFeed },
  { id: 'dairy', label: 'Dairy Genetics', sub: 'AI services \u00b7 Sex-sorted semen\n30% \u2192 57% improved herd', color: T.cDairy },
  { id: 'fmd', label: 'FMD Vaccination', sub: '<6% \u2192 30% cattle coverage\n~10M doses/year', color: T.cFmd },
  { id: 'meat', label: 'Pastoral Red Meat Offtake', sub: 'Aggregation \u00b7 Cold-chain\n+250K MT/yr \u00b7 300K HH', color: T.cMeat },
  { id: 'aqua', label: 'Aquaculture', sub: 'Tilapia \u00b7 Catfish genetics\n$10 per $1 catalytic', color: T.cAqua },
];

/* ─── Outcome data ─── */
const OUTCOMES = [
  { id: 'out-yield', label: 'Crop Yield Uplift', icon: '\ud83c\udf3e', sq: '+0.6', sqUnit: 'MT/ha above baseline\nGap to close: 3.0 MT/ha', tgt: '+1.4' },
  { id: 'out-adoption', label: 'Technology Adoption', icon: '\ud83d\udcf1', sq: '32%', sqUnit: 'of smallholders using\nimproved inputs', tgt: '77%' },
  { id: 'out-feed', label: 'Feed Cost Reduction', icon: '\ud83d\udc04', sq: '\u22128%', sqUnit: 'vs baseline feed costs\nTarget: \u221230%', tgt: '\u221219%' },
  { id: 'out-livestock', label: 'Livestock Productivity', icon: '\ud83e\udd5b', sq: '+7%', sqUnit: 'milk yield improvement\n918 \u2192 target 1,048 kg/cow', tgt: '+17%' },
  { id: 'out-market', label: 'Market Integration', icon: '\ud83d\udce6', sq: '18%', sqUnit: 'pastoralists with structured\nofftake linkage', tgt: '43%' },
  { id: 'out-resilience', label: 'Climate Resilience', icon: '\ud83c\udf27\ufe0f', sq: '+2.0', sqUnit: 'growing seasons enabled\nvs rainfed single-season', tgt: '+5.0' },
];

/* ─── Goal data ─── */
const GOALS = [
  { id: 'goal-food', domain: 'Food Security', title: 'Maize Yield', sq: '2.1', tgt: '4.5', sub: 'MT/ha \u00b7 Target 4.5 \u00b7 Base 1.5', color: T.food, pct: 20 },
  { id: 'goal-income', domain: 'Income & Economic', title: 'Smallholder Income Uplift', sq: '+4%', tgt: '+18%', sub: 'of 18% target \u00b7 ~$281M dairy', color: T.income, pct: 22 },
  { id: 'goal-market', domain: 'Market Systems', title: 'Feed Cost Reduction', sq: '\u22126%', tgt: '\u221230%', sub: 'of \u221230% target \u00b7 1.0MMT supply', color: T.market, pct: 20 },
  { id: 'goal-system', domain: 'Systems Transformation', title: 'Technology Adoption', sq: '12%', tgt: '50%', sub: 'of 50% target \u00b7 2030', color: T.system, pct: 24 },
];

/* ─── Flow connections ─── */
const BET_TO_OUTCOME = [
  { from: 'seed', to: 'out-yield', pct: 55 }, { from: 'seed', to: 'out-adoption', pct: 30 }, { from: 'seed', to: 'out-feed', pct: 20 },
  { from: 'ai', to: 'out-adoption', pct: 45 }, { from: 'ai', to: 'out-yield', pct: 15 }, { from: 'ai', to: 'out-livestock', pct: 10 },
  { from: 'bio', to: 'out-yield', pct: 12 }, { from: 'bio', to: 'out-adoption', pct: 8 },
  { from: 'irrig', to: 'out-yield', pct: 18 }, { from: 'irrig', to: 'out-resilience', pct: 65 }, { from: 'irrig', to: 'out-adoption', pct: 12 },
  { from: 'feed', to: 'out-feed', pct: 55 }, { from: 'feed', to: 'out-livestock', pct: 45 },
  { from: 'dairy', to: 'out-livestock', pct: 38 }, { from: 'dairy', to: 'out-adoption', pct: 5 },
  { from: 'fmd', to: 'out-livestock', pct: 10 }, { from: 'fmd', to: 'out-market', pct: 40 },
  { from: 'meat', to: 'out-market', pct: 55 }, { from: 'meat', to: 'out-livestock', pct: 7 },
  { from: 'aqua', to: 'out-feed', pct: 12 }, { from: 'aqua', to: 'out-market', pct: 5 },
];

const OUTCOME_TO_GOAL = [
  { from: 'out-yield', to: 'goal-food', pct: 70 }, { from: 'out-yield', to: 'goal-income', pct: 30 }, { from: 'out-yield', to: 'goal-market', pct: 20 },
  { from: 'out-adoption', to: 'goal-system', pct: 60 }, { from: 'out-adoption', to: 'goal-income', pct: 25 }, { from: 'out-adoption', to: 'goal-food', pct: 15 },
  { from: 'out-feed', to: 'goal-market', pct: 65 }, { from: 'out-feed', to: 'goal-income', pct: 25 },
  { from: 'out-livestock', to: 'goal-income', pct: 40 }, { from: 'out-livestock', to: 'goal-market', pct: 15 },
  { from: 'out-market', to: 'goal-income', pct: 50 }, { from: 'out-market', to: 'goal-system', pct: 20 },
  { from: 'out-resilience', to: 'goal-food', pct: 40 }, { from: 'out-resilience', to: 'goal-income', pct: 25 }, { from: 'out-resilience', to: 'goal-system', pct: 20 },
];

/* ─── Detail panel data ─── */
const BET_DETAILS = {
  seed: {
    chain: [
      'Foundation funds KALRO + CGIAR breeding programs \u2192 improved MLN-resistant varieties released',
      '\u2192 Seed companies access Early Generation Seed (EGS) at scale',
      '\u2192 Agro-dealer networks distribute certified seed to last mile',
      '\u2192 Adoption rises (esp. with AI advisory): 30% \u2192 65% uptake target',
      '\u2192 Yield: 1.5 MT/ha \u2192 3\u20134.5 MT/ha in high-potential zones',
      '\u2192 Surplus crop residues feed into CRIF/TMR feed systems (cascades into livestock)',
    ],
    contribs: [{ name: 'Crop Yield', pct: 55 }, { name: 'Tech Adoption', pct: 30 }, { name: 'Feed Supply', pct: 20 }],
    risks: [
      'MLN outbreak risk: seed companies forced to destroy fields, relocate (happened 2012\u201315)',
      'Without AI advisory co-investment, adoption stays at ~30% \u2014 the cascade breaks at Step 4',
      'Foundation seed (EGS) bottleneck limits how many seed companies can scale certified volumes',
    ],
  },
  ai: {
    chain: [
      'Mobile/SMS platform delivers localized agronomic + weather + animal health advice',
      '\u2192 Farmers receive planting timing, input dosage, and pest alerts via USSD/SMS',
      '\u2192 Adoption of hybrid seed, fertiliser, and irrigation practices increases (proven 25% productivity uplift)',
      '\u2192 AI advisory acts as a MULTIPLIER: every other bet performs better when advisory is present',
      '\u2192 Income: +18% uplift for advised smallholders (strategy target, TomorrowNow evidence)',
      '\u2192 50% adoption target: 40% women smallholders \u2014 explicit gender outcome',
    ],
    contribs: [{ name: 'Tech Adoption', pct: 45 }, { name: 'Crop Yield (via adoption)', pct: 15 }, { name: 'Livestock Prod.', pct: 10 }],
    risks: [
      'Standalone value is low \u2014 AI advisory with no seed access = better decisions, zero inputs to act on',
      'Mobile penetration gaps in arid/pastoral counties limit reach to most vulnerable populations',
      'Advisory quality degrades without localised agronomic data \u2014 KALRO data infrastructure critical',
    ],
  },
  bio: {
    chain: [
      'Validated biofertiliser products introduced through seed company + agro-dealer channels',
      '\u2192 Bundled with hybrid seed purchase (reduces adoption friction)',
      '\u2192 Soil organic matter improves: sustained multi-season yield gain (vs one-off chemical fertiliser)',
      '\u2192 Fertiliser cost pressure reduced: estimated 15\u201325% input cost reduction',
      '\u2192 Yield uplift: TBD (validation ongoing \u2014 targets not yet confirmed in strategy)',
      '\u2192 Most effective as a COMPLEMENT to hybrid seed \u2014 limited standalone impact',
    ],
    contribs: [{ name: 'Crop Yield', pct: 12 }, { name: 'Tech Adoption', pct: 8 }],
    risks: [
      'Targets not yet quantified in strategy \u2014 lowest evidence base of all nine bets',
      'Regulatory clearance required per product type \u2014 may slow scale vs other bets',
      'Bundling dependency: standalone distribution without hybrid seed = very low uptake',
    ],
  },
  irrig: {
    chain: [
      'Solar pump costs reduced to \u2264$200 via subsidies + irrigation-as-a-service models',
      '\u2192 600K smallholders access affordable irrigation for the first time',
      '\u2192 550K ha irrigated = 9.5% of Kenya\'s irrigable land (currently <2% smallholder coverage)',
      '\u2192 Farmers move from single rainfed season to 2\u20133 seasons per year',
      '\u2192 +$700M contribution to ag GDP (productivity + crop diversification)',
      '\u2192 Reduces climate shock exposure: 2021\u201323 drought killed 2.6M livestock in pastoral areas',
    ],
    contribs: [{ name: 'Climate Resilience', pct: 65 }, { name: 'Crop Yield', pct: 18 }, { name: 'Tech Adoption', pct: 12 }],
    risks: [
      'Finance access (MFI, DFS) is the real bottleneck \u2014 pump costs fall but credit access remains hard',
      'Works best in high-potential zones; marginal arid areas have groundwater access constraints',
      'Solar pump supply chain fragility \u2014 spare parts, maintenance capacity in remote counties',
    ],
  },
  feed: {
    chain: [
      'Scale CRIF (Crop Residue Integration into Feed) using maize stover, sorghum residue',
      '\u2192 BSF (Black Soldier Fly) alternative protein reduces reliance on imported soy/fishmeal',
      '\u2192 TMR (Total Mixed Ration) compound feed sales +250K MT (+37% increase)',
      '\u2192 Feed costs fall: target \u221230% from baseline (feeds = 63\u201373% of all dairy costs)',
      '\u2192 Dairy cows: income-over-feed-cost improves 50%+ when combined with genetics',
      '\u2192 CRITICAL CASCADE: crop residue from hybrid seed bet directly feeds this system',
    ],
    contribs: [{ name: 'Feed Cost Reduction', pct: 55 }, { name: 'Livestock Productivity', pct: 45 }],
    risks: [
      'Directly dependent on crop productivity: low hybrid seed investment = low CRIF input supply',
      'BSF protein production requires private sector investment and feed industry partnerships',
      'Dairy genetics gains are ~40% less effective without simultaneous feed improvement',
    ],
  },
  dairy: {
    chain: [
      'Expand AI (Artificial Insemination) service network across counties (currently only 16% use AI)',
      '\u2192 Sex-sorted semen reduces heifer wait time, accelerates herd improvement',
      '\u2192 Improved dairy animals: 30% \u2192 57% of national herd',
      '\u2192 Milk yield: 918 \u2192 1,048 kg/cow/year (+14% per animal)',
      '\u2192 Net economic benefit: $281M/year at full deployment',
      '\u2192 DEPENDENCY: Genetic gains are nullified if feed quality does not improve simultaneously',
    ],
    contribs: [{ name: 'Livestock Productivity', pct: 38 }, { name: 'Tech Adoption', pct: 5 }],
    risks: [
      'CRITICAL: Genetics without feed = no milk yield gain. Must sequence feed investment first',
      'Multi-year lag: improved calves take 2\u20133 years before milk production impact is visible',
      'County AI service infrastructure is weak \u2014 61% of smallholders use bulls due to AI inaccessibility',
    ],
  },
  fmd: {
    chain: [
      'National cattle vaccination scaled: <6% \u2192 30% coverage by 2030 (~10M doses/year)',
      '\u2192 Recurring FMD outbreaks suppressed: prevents milk yield drops, weight loss, mortality',
      '\u2192 $66\u201390M in annual direct economic losses mitigated',
      '\u2192 CRITICAL CASCADE: Disease-free certification unlocks regional export market access',
      '\u2192 Pastoral offtake bet becomes viable \u2014 export-ready herds attract premium prices',
      '\u2192 Kenya government vaccination drive (Feb 2025) = leverage co-investment opportunity',
    ],
    contribs: [{ name: 'Market Integration', pct: 40 }, { name: 'Livestock Productivity', pct: 10 }],
    risks: [
      'FMD control is a PREREQUISITE for pastoral offtake market access \u2014 sequence matters',
      'SPS (sanitary) compliance requirements for export go beyond vaccination \u2014 full traceability needed',
      'Government rollout underway (Feb 2025) \u2014 risk of duplication vs leverage opportunity',
    ],
  },
  meat: {
    chain: [
      'Build aggregation systems linking pastoralists to domestic + export markets',
      '\u2192 Cold-chain infrastructure, quality standards, and export pathways developed',
      '\u2192 730K animals/year into export markets; 850K animals/year into domestic markets',
      '\u2192 +250K MT offtake annually by 2030',
      '\u2192 Per-household income: +$1,500\u20132,000/year \u2014 highest per-HH income gain of any single bet',
      '\u2192 DEPENDENCY: FMD control must precede \u2014 export access blocked without disease certification',
    ],
    contribs: [{ name: 'Market Integration', pct: 55 }, { name: 'Livestock Productivity', pct: 7 }],
    risks: [
      'FMD vaccination is a hard prerequisite \u2014 pastoral offtake without it cannot access export premiums',
      'Cold-chain infrastructure gap in ASAL counties: roads, refrigeration, power all needed',
      'AfCFTA alignment needed for regional trade \u2014 regulatory harmonisation is slow',
    ],
  },
  aqua: {
    chain: [
      'Improved tilapia and catfish genetics + hatchery systems deployed at scale',
      '\u2192 Better farm management practices reduce post-harvest losses (currently high)',
      '\u2192 Domestic fish production increases, reducing fish import dependence',
      '\u2192 Aggregation + embedded finance models stabilise offtake and mobilise private capital',
      '\u2192 $10 commercial capital unlocked per $1 catalytic foundation investment',
      '\u2192 BSF protein (from feed/fodder bet) reduces aquafeed costs \u2014 cross-bet dependency',
    ],
    contribs: [{ name: 'Feed Supply (alt protein)', pct: 12 }, { name: 'Market Integration', pct: 5 }],
    risks: [
      'Targets still being refined \u2014 XX MT and income figures not finalised in strategy',
      'Working capital access is the most binding constraint \u2014 not genetics',
      'Post-harvest losses dominate economics more than production \u2014 cold-chain investment needed',
    ],
  },
};

/* ─── Main component ─── */
export default function CascadenceFlow() {
  const [activeBet, setActiveBet] = useState('all');
  const [mode, setMode] = useState('status'); // 'status' | 'target'
  const [lines, setLines] = useState([]);
  const layoutRef = useRef(null);
  const nodeRefs = useRef({});

  const setNodeRef = useCallback((id, el) => { if (el) nodeRefs.current[id] = el; }, []);

  const touchedOutcomes = activeBet === 'all'
    ? new Set(OUTCOMES.map(o => o.id))
    : new Set(BET_TO_OUTCOME.filter(f => f.from === activeBet).map(f => f.to));

  const touchedGoals = activeBet === 'all'
    ? new Set(GOALS.map(g => g.id))
    : new Set(
        OUTCOME_TO_GOAL.filter(f => touchedOutcomes.has(f.from)).map(f => f.to)
      );

  // Draw SVG lines
  useEffect(() => {
    const calc = () => {
      const layout = layoutRef.current;
      if (!layout) return;
      const lRect = layout.getBoundingClientRect();
      const newLines = [];

      const getEdge = (id, side) => {
        const el = nodeRefs.current[id];
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: side === 'right' ? r.right - lRect.left : r.left - lRect.left,
          y: r.top + r.height / 2 - lRect.top,
        };
      };

      BET_TO_OUTCOME.forEach(f => {
        const start = getEdge(f.from, 'right');
        const end = getEdge(f.to, 'left');
        if (!start || !end) return;
        const bet = BETS.find(b => b.id === f.from);
        const isActive = activeBet === 'all' || activeBet === f.from;
        newLines.push({
          x1: start.x, y1: start.y, x2: end.x, y2: end.y,
          color: bet.color, opacity: isActive ? 0.62 : 0.05,
          pct: f.pct, showLabel: activeBet !== 'all' && activeBet === f.from,
          key: `bo-${f.from}-${f.to}`,
        });
      });

      OUTCOME_TO_GOAL.forEach(f => {
        const start = getEdge(f.from, 'right');
        const end = getEdge(f.to, 'left');
        if (!start || !end) return;
        const goal = GOALS.find(g => g.id === f.to);
        const isActive = activeBet === 'all' || touchedOutcomes.has(f.from);
        newLines.push({
          x1: start.x, y1: start.y, x2: end.x, y2: end.y,
          color: goal.color, opacity: isActive ? 0.5 : 0.05,
          pct: f.pct, showLabel: activeBet !== 'all' && touchedOutcomes.has(f.from),
          key: `og-${f.from}-${f.to}`,
        });
      });

      setLines(newLines);
    };

    const timer = setTimeout(calc, 100);
    window.addEventListener('resize', calc);
    return () => { clearTimeout(timer); window.removeEventListener('resize', calc); };
  }, [activeBet, mode]);

  const selectBet = (id) => {
    if (activeBet === id) { setActiveBet('all'); }
    else { setActiveBet(id); }
  };

  const detail = activeBet !== 'all' ? BET_DETAILS[activeBet] : null;
  const selectedBet = activeBet !== 'all' ? BETS.find(b => b.id === activeBet) : null;

  return (
    <div className="cf-root" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', minHeight: '100vh', background: T.bg, color: T.text, fontFamily: "'Outfit', 'DM Sans', sans-serif", fontSize: 14, overflow: 'hidden' }}>
      <style>{`
        @media(max-width:1100px){
          .cf-flow{grid-template-columns:1fr!important;height:auto!important;min-height:auto!important;}
          .cf-tier-labels{grid-template-columns:1fr!important;}
          .cf-tier-labels>div:nth-child(2),.cf-tier-labels>div:nth-child(4){display:none!important;}
          .cf-svg-overlay{display:none!important;}
          .cf-spacer{display:none!important;}
          .cf-theory{grid-template-columns:1fr!important;}
          .cf-detail-body{grid-template-columns:1fr!important;}
          .cf-canvas{overflow-y:auto!important;overflow-x:hidden!important;}
          .cf-header-legend{display:none!important;}
        }
        @media(max-width:700px){
          .cf-root header{padding:10px 16px!important;flex-direction:column!important;align-items:flex-start!important;}
          .cf-controls{padding:8px 12px!important;gap:6px!important;}
          .cf-controls .cf-mode-btns{margin-left:0!important;width:100%!important;justify-content:flex-end!important;}
          .cf-canvas{padding:8px!important;}
          .cf-theory>div{padding:8px 0!important;border-right:none!important;border-bottom:1px solid var(--border,#e5e7eb)!important;}
          .cf-theory>div:last-child{border-bottom:none!important;}
        }
      `}</style>
      {/* Header */}
      <header style={{ padding: '14px 28px 12px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', background: T.surface, flexWrap: 'wrap', gap: 8 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: 3 }}>
            Cascadence <em style={{ fontStyle: 'italic', color: T.muted }}>Flow</em> Engine
          </h1>
          <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace" }}>
            Gates Foundation {'\u00b7'} Kenya AgriTransform {'\u00b7'} Theory of Cascade {'\u00b7'} 2026{'\u2013'}2030
          </div>
        </div>
        <div className="cf-header-legend" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
          <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", background: T.surface2, color: T.food, border: `1px solid ${T.border}`, padding: '5px 12px', borderRadius: 6, letterSpacing: '0.08em' }}>BIG BETS {'\u2192'} MECHANISMS {'\u2192'} GOALS</span>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            {[
              { color: T.food, label: 'Strong cascade (>40%)' },
              { color: T.market, label: 'Moderate (20\u201340%)' },
              { color: T.income, label: 'Supporting (<20%)' },
            ].map(l => (
              <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: T.muted, fontFamily: "'DM Mono', monospace" }}>
                <div style={{ width: 22, height: 3, borderRadius: 2, background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Theory Banner */}
      <div className="cf-theory" style={{ background: T.surface2, color: T.text, padding: '10px 28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, borderBottom: `1px solid ${T.border}` }}>
        {[
          { label: 'Why Cascadence \u2260 Stress Tester', text: <>The stress tester asks <strong>{'\u201c'}what if investment changes?{'\u201d'}</strong> {'\u2014'} it moves sliders and reads output. Cascadence asks <strong>{'\u201c'}why does it change?{'\u201d'}</strong> {'\u2014'} it maps the physical mechanism.</> },
          { label: 'The Cascade Theory', text: <>Agricultural systems are <strong>not additive {'\u2014'} they are multiplicative</strong>. Hybrid seed without AI advisory = 40% adoption. With advisory = 80%. The delta is the <strong>cascade coefficient</strong> between bets.</> },
          { label: 'How to Read This', text: <><strong>Click any Big Bet</strong> to trace its cascade path. Flow width = % contribution to the intermediate outcome. Colour intensity = cascade strength. The diagram reveals <strong>which bets are amplifiers vs standalone generators</strong> {'\u2014'} a fundamentally different investment insight.</> },
        ].map((col, i) => (
          <div key={i} style={{ padding: i === 0 ? '0 20px 0 0' : i === 2 ? '0 0 0 20px' : '0 20px', borderRight: i < 2 ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", marginBottom: 3 }}>{col.label}</div>
            <div style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(26,26,46,0.7)' }}>{col.text}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="cf-controls" style={{ padding: '8px 28px', background: T.surface, borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
        <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", whiteSpace: 'nowrap' }}>Highlight Bet {'\u2192'}</div>
        <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', flex: 1 }}>
          <button onClick={() => setActiveBet('all')} style={{
            padding: '4px 10px', borderRadius: 6, border: `1px solid ${activeBet === 'all' ? T.food : T.border}`,
            background: activeBet === 'all' ? 'rgba(45,212,167,0.1)' : 'transparent',
            fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: 'pointer', color: activeBet === 'all' ? T.food : T.muted, letterSpacing: '0.04em',
          }}>All Flows</button>
          {BETS.map(b => (
            <button key={b.id} onClick={() => selectBet(b.id)} style={{
              padding: '4px 10px', borderRadius: 6, border: `1px solid ${activeBet === b.id ? T.food : T.border}`,
              background: activeBet === b.id ? 'rgba(45,212,167,0.1)' : 'transparent',
              fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: 'pointer', color: activeBet === b.id ? T.food : T.muted, letterSpacing: '0.04em',
            }}>{b.label.replace('Hybrid Seed Systems', 'Hybrid Seed').replace('AI Advisory Platforms', 'AI Advisory').replace('Feed & Fodder Systems', 'Feed & Fodder').replace('Dairy Genetics', 'Dairy Genetics').replace('FMD Vaccination', 'FMD Vacc.').replace('Pastoral Red Meat Offtake', 'Pastoral Offtake').replace('Irrigation Kits', 'Irrigation')}</button>
          ))}
        </div>
        <div className="cf-mode-btns" style={{ display: 'flex', gap: 6, marginLeft: 'auto' }}>
          {[{ key: 'status', label: 'Status Quo' }, { key: 'target', label: '2030 Target' }].map(m => (
            <button key={m.key} onClick={() => setMode(m.key)} style={{
              padding: '5px 14px', borderRadius: 6, border: `1px solid ${mode === m.key ? T.food : T.border}`,
              background: mode === m.key ? 'rgba(45,212,167,0.08)' : 'transparent',
              fontFamily: "'DM Mono', monospace", fontSize: 11, cursor: 'pointer',
              color: mode === m.key ? T.food : T.muted, fontWeight: mode === m.key ? 600 : 400,
            }}>{m.label}</button>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <div className="cf-canvas" style={{ padding: '10px 16px 12px', display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
        {/* Tier Labels */}
        <div className="cf-tier-labels" style={{ display: 'grid', gridTemplateColumns: '300px 1fr 300px 1fr 300px', gap: 0, marginBottom: 5, flexShrink: 0 }}>
          <div style={tierLabelStyle}>Tier 1 {'\u00b7'} Big Bets</div>
          <div />
          <div style={tierLabelStyle}>Tier 2 {'\u00b7'} Intermediate Outcomes</div>
          <div />
          <div style={tierLabelStyle}>Tier 3 {'\u00b7'} Strategic Goals</div>
        </div>

        {/* Flow Layout */}
        <div className="cf-flow" ref={layoutRef} style={{ display: 'grid', gridTemplateColumns: '300px 1fr 300px 1fr 300px', flex: 1, position: 'relative', alignItems: 'stretch', minHeight: 0 }}>
          {/* SVG overlay */}
          <svg className="cf-svg-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1, overflow: 'visible' }}>
            {lines.map(l => {
              const span = Math.abs(l.x2 - l.x1);
              const tension = Math.min(span * 0.55, 140);
              const sw = Math.max(1.5, (l.pct / 100) * 15);
              const mx = (l.x1 + l.x2) / 2;
              const my = (l.y1 + l.y2) / 2;
              return (
                <g key={l.key}>
                  <path
                    d={`M ${l.x1} ${l.y1} C ${l.x1 + tension} ${l.y1}, ${l.x2 - tension} ${l.y2}, ${l.x2} ${l.y2}`}
                    fill="none" stroke={l.color} strokeWidth={sw} opacity={l.opacity} strokeLinecap="round"
                  />
                  {l.showLabel && l.pct >= 5 && (
                    <>
                      <rect x={mx - 18} y={my - 10} width={36} height={18} rx={3} fill="rgba(255,255,255,0.92)" stroke={l.color} strokeWidth={0.8} />
                      <text x={mx} y={my + 3} textAnchor="middle" fontSize={11} fontWeight={600} fontFamily="DM Mono, monospace" fill={l.color}>{l.pct}%</text>
                    </>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Col 1: Big Bets */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, zIndex: 2, justifyContent: 'space-between' }}>
            {BETS.map(bet => {
              const isActive = activeBet === 'all' || activeBet === bet.id;
              const isSelected = activeBet === bet.id;
              return (
                <div key={bet.id} ref={el => setNodeRef(bet.id, el)} onClick={() => selectBet(bet.id)}
                  style={{
                    border: `1.5px solid ${bet.color}`, borderRadius: 8, padding: '7px 10px', cursor: 'pointer',
                    transition: 'all 0.22s', background: isSelected ? T.surface2 : T.surface, flex: 1,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0,
                    opacity: isActive ? 1 : 0.18, color: bet.color,
                    transform: isSelected ? 'translateX(3px)' : 'none',
                    boxShadow: isSelected ? `-4px 0 0 ${bet.color}` : 'none',
                  }}>
                  <div style={{ fontSize: 12, fontWeight: 600, lineHeight: 1.25, marginBottom: 2, color: T.text }}>{bet.label}</div>
                  <div style={{ fontSize: 10, color: T.muted, fontFamily: "'DM Mono', monospace", lineHeight: 1.35, whiteSpace: 'pre-line' }}>{bet.sub}</div>
                  <div style={{ height: 2, borderRadius: 2, marginTop: 5, background: bet.color, opacity: 0.7, width: isSelected ? '100%' : '60%', transition: 'width 0.4s ease' }} />
                </div>
              );
            })}
          </div>

          {/* SVG spacer col 1 */}
          <div className="cf-spacer" style={{ position: 'relative', zIndex: 1 }} />

          {/* Col 2: Outcomes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, zIndex: 2, justifyContent: 'space-between' }}>
            {OUTCOMES.map(oc => {
              const isActive = activeBet === 'all' || touchedOutcomes.has(oc.id);
              const val = mode === 'target' ? oc.tgt : oc.sq;
              return (
                <div key={oc.id} ref={el => setNodeRef(oc.id, el)}
                  style={{
                    border: `1px solid ${isActive ? T.food + '40' : T.border}`, borderRadius: 8,
                    padding: '7px 10px', background: isActive ? 'rgba(45,212,167,0.04)' : T.surface2,
                    transition: 'all 0.22s', flex: 1, display: 'flex', flexDirection: 'column',
                    justifyContent: 'center', alignItems: 'center', textAlign: 'center', minHeight: 0,
                    opacity: isActive ? 1 : 0.15,
                  }}>
                  <div style={{ fontSize: 14, marginBottom: 1 }}>{oc.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 1, lineHeight: 1.25, color: T.text }}>{oc.label}</div>
                  <div style={{ fontSize: 18, fontFamily: "'DM Serif Display', serif", fontWeight: 700, margin: '2px 0', color: mode === 'target' ? T.income : T.food, transition: 'all 0.4s' }}>{val}</div>
                  <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: T.muted, lineHeight: 1.35, whiteSpace: 'pre-line' }}>{oc.sqUnit}</div>
                </div>
              );
            })}
          </div>

          {/* SVG spacer col 2 */}
          <div className="cf-spacer" style={{ position: 'relative', zIndex: 1 }} />

          {/* Col 3: Goals */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6, zIndex: 2, justifyContent: 'space-around' }}>
            {GOALS.map(goal => {
              const isActive = activeBet === 'all' || touchedGoals.has(goal.id);
              const val = mode === 'target' ? goal.tgt : goal.sq;
              return (
                <div key={goal.id} ref={el => setNodeRef(goal.id, el)}
                  style={{
                    border: `1.5px solid ${goal.color}`, borderRadius: 8, padding: '8px 12px',
                    background: T.surface, transition: 'all 0.22s', flex: 1,
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: 0,
                    opacity: isActive ? 1 : 0.18, color: goal.color,
                    transform: isActive && activeBet !== 'all' ? 'translateX(-3px)' : 'none',
                    boxShadow: isActive && activeBet !== 'all' ? `4px 0 0 ${goal.color}` : 'none',
                  }}>
                  <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace", marginBottom: 2, opacity: 0.7 }}>{goal.domain}</div>
                  <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 2, lineHeight: 1.25, color: T.text }}>{goal.title}</div>
                  <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 1, transition: 'all 0.4s' }}>{val}</div>
                  <div style={{ fontSize: 10, fontFamily: "'DM Mono', monospace", color: T.muted }}>{goal.sub}</div>
                  <div style={{ height: 3, background: T.border, borderRadius: 2, marginTop: 5, overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 2, background: goal.color, opacity: 0.8, width: `${mode === 'target' ? Math.min(goal.pct * 2.4, 100) : goal.pct}%`, transition: 'width 0.5s cubic-bezier(0.4,0,0.2,1)' }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Detail Panel */}
      {detail && selectedBet && (
        <div style={{ borderTop: `1px solid ${T.border}`, background: T.surface, maxHeight: '38vh', overflowY: 'auto', borderRadius: '6px 6px 0 0' }}>
          <div style={{ background: T.surface2, color: T.text, padding: '8px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10, borderBottom: `1px solid ${T.border}` }}>
            <div style={{ fontSize: 16, fontWeight: 700 }}>{selectedBet.label} {'\u2014'} Cascade Detail</div>
            <button onClick={() => setActiveBet('all')} style={{ cursor: 'pointer', fontSize: 16, opacity: 0.5, background: 'none', border: 'none', color: T.text }}>{'\u2715'}</button>
          </div>
          <div className="cf-detail-body" style={{ padding: '14px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
            {/* Chain */}
            <div>
              <div style={sectionTitleStyle}>Cascade Chain {'\u00b7'} Mechanism</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {detail.chain.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 12, lineHeight: 1.45, color: T.text }}>
                    <span style={{ fontSize: 12, color: T.muted, marginTop: 1, flexShrink: 0 }}>{i === 0 ? '\u25cf' : '\u2192'}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Contributions */}
            <div>
              <div style={sectionTitleStyle}>Contribution to Intermediate Outcomes (%)</div>
              {detail.contribs.map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7 }}>
                  <span style={{ fontSize: 11, minWidth: 90, color: T.text }}>{c.name}</span>
                  <div style={{ flex: 1, height: 5, background: T.border, borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', borderRadius: 3, width: `${c.pct}%`, background: selectedBet.color }} />
                  </div>
                  <span style={{ fontSize: 11, fontFamily: "'DM Mono', monospace", color: T.muted, minWidth: 30, textAlign: 'right' }}>{c.pct}%</span>
                </div>
              ))}
            </div>
            {/* Risks */}
            <div>
              <div style={sectionTitleStyle}>Cascade Dependencies & Risks</div>
              {detail.risks.map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8, fontSize: 12, lineHeight: 1.5, color: T.text }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', marginTop: 4, flexShrink: 0, background: i === 0 ? T.cFmd : T.muted }} />
                  <span>{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Footnote */}
      <div style={{ padding: '8px 28px', fontSize: 9, color: T.muted, borderTop: `1px solid ${T.border}`, lineHeight: 1.6, background: T.surface }}>
        <strong>Coefficient Confidence Tiers {'\u2014'} Round 3 Validation Complete (May 2026)</strong><br/>
        {'\u25a0'} <strong>BACKED</strong> {'\u2014'} Matched to peer-reviewed or institutional source: 50/30/20 production weights (CIMMYT/Kiboko), 80/48 feed split (ILRI/KDB), #fCFTA +15pp (IATP 2024), Drought -KE54 (Biosecurity/CIAT 2022), IDFC {'<'}5 (ILRI/EAS Publisher 2022). Resilience weights 0.48/0.35/0.25 (FAO RIMA-II / World Bank), Subsidy +0.05 (Tegemeo Institute 2016).
        {' '}{'\u25a0'} <strong>PARTIAL</strong> {'\u2014'} Direction backed; coefficient is a calibrated derivation: PHL slope 0.02 (APHLIS interpolation, empirical delta 0.80{'\u00b1'}0.02).
        {' '}{'\u25a0'} <strong>DESIGN</strong> {'\u2014'} Market routing splits (food 85/15, dairy 90/10, meat 100% export) reflect KDB/ITC trade data; classified as model parameters pending KNBS export census update.
      </div>
    </div>
  );
}

const tierLabelStyle = { fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6b7280', fontFamily: "'DM Mono', monospace", textAlign: 'center' };
const sectionTitleStyle = { fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: "'DM Mono', monospace", color: '#6b7280', marginBottom: 10 };
