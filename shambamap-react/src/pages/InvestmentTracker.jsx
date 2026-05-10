import React from 'react';

/* ─── Light-theme tokens ─── */
const T = {
  bg: '#f8f9fa', surface: '#ffffff', surface2: '#f1f3f5', faint: '#f8f9fa',
  border: '#e5e7eb', text: '#1a1a2e', muted: '#6b7280',
  food: '#2dd4a7', market: '#60a5fa', income: '#f5a623', system: '#c084fc',
  green: '#10b981', blue: '#3b82f6', purple: '#8b5cf6', red: '#ef4444', yellow: '#f59e0b', orange: '#f97316',
};

/* ─── KPI data (from reference datasets.js) ─── */
const KPI = [
  { icon: '\ud83d\udcb5', label: 'Total Capital Deployed', value: '$210.5M', trend: '\u2191 +$45M this Quarter', trendColor: T.food },
  { icon: '\ud83c\udfaf', label: 'Catalytic Funding (Grants)', value: '$40.2M', trend: 'Core "Big Bets" Support', trendColor: T.muted },
  { icon: '\ud83c\udfe6', label: 'Commercial Capital Unlocked', value: '$170.3M', trend: 'Target: $10 per $1 Catalytic', trendColor: T.food },
  { icon: '\ud83d\udcc8', label: 'Current Leverage Ratio', value: '1 : 4.24', trend: '\u2191 +0.8 YoY', trendColor: T.food },
];

/* ─── Pipeline deals ─── */
const DEALS = [
  { entity: 'SunCulture Pump Financing', sector: 'Solar Irrigation', size: '$15.0M', stage: 'Deployed', risk: 'Low' },
  { entity: 'Lake Victoria Aqua-Hatcheries', sector: 'Aquaculture', size: '$4.2M', stage: 'Due Diligence', risk: 'Medium' },
  { entity: 'Pastoral Meat Export Facility', sector: 'Livestock Offtake', size: '$22.5M', stage: 'Deployed', risk: 'High' },
  { entity: 'AgriStack DPI Expansion', sector: 'AI Advisory', size: '$8.0M', stage: 'Structuring', risk: 'Low' },
  { entity: 'Rift Valley Dairy Genetics', sector: 'Dairy / Livestock', size: '$12.1M', stage: 'Deployed', risk: 'Low' },
  { entity: 'National Hybrid Seed Scale-up', sector: 'Crop Inputs', size: '$18.6M', stage: 'Deployed', risk: 'Medium' },
];

/* ─── Donut chart data ─── */
const ALLOCATION = [
  { name: 'Solar Irrigation', pct: 35, color: T.green },
  { name: 'Dairy & Livestock', pct: 22, color: T.purple },
  { name: 'Hybrid Seeds', pct: 18, color: T.yellow },
  { name: 'Aquaculture', pct: 10, color: '#14b8a6' },
  { name: 'AI Advisory (DPI)', pct: 8, color: T.blue },
  { name: 'Meat / Offtake', pct: 7, color: T.orange },
];

/* ─── Badge helpers ─── */
function StageBadge({ stage }) {
  const map = {
    'Deployed': { bg: 'rgba(16,185,129,0.12)', color: T.green },
    'Due Diligence': { bg: 'rgba(245,158,11,0.12)', color: T.yellow },
    'Structuring': { bg: 'rgba(99,102,241,0.12)', color: '#6366f1' },
  };
  const cfg = map[stage] || map['Deployed'];
  return <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: cfg.bg, color: cfg.color, whiteSpace: 'nowrap' }}>{stage}</span>;
}

/* ─── Donut chart (pure SVG) ─── */
function DonutChart({ data, total }) {
  const size = 220;
  const cx = size / 2, cy = size / 2;
  const outerR = 95, innerR = 60;
  let cumAngle = -90; // start at top

  const slices = data.map(d => {
    const angle = (d.pct / 100) * 360;
    const startAngle = cumAngle;
    cumAngle += angle;
    const endAngle = cumAngle;
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    const largeArc = angle > 180 ? 1 : 0;

    const x1o = cx + outerR * Math.cos(startRad);
    const y1o = cy + outerR * Math.sin(startRad);
    const x2o = cx + outerR * Math.cos(endRad);
    const y2o = cy + outerR * Math.sin(endRad);
    const x1i = cx + innerR * Math.cos(endRad);
    const y1i = cy + innerR * Math.sin(endRad);
    const x2i = cx + innerR * Math.cos(startRad);
    const y2i = cy + innerR * Math.sin(startRad);

    const path = [
      `M ${x1o} ${y1o}`,
      `A ${outerR} ${outerR} 0 ${largeArc} 1 ${x2o} ${y2o}`,
      `L ${x1i} ${y1i}`,
      `A ${innerR} ${innerR} 0 ${largeArc} 0 ${x2i} ${y2i}`,
      'Z',
    ].join(' ');

    return { ...d, path };
  });

  return (
    <div className="it-donut" style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {slices.map((s, i) => (
          <path key={i} d={s.path} fill={s.color} stroke={T.surface} strokeWidth={2} />
        ))}
        <text x={cx} y={cy - 8} textAnchor="middle" fontSize={20} fontWeight={700} fill={T.text}>${total}</text>
        <text x={cx} y={cy + 12} textAnchor="middle" fontSize={11} fill={T.muted}>Total Deployed</text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {data.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: T.text }}>
            <div style={{ width: 12, height: 12, borderRadius: 2, background: d.color, flexShrink: 0 }} />
            <span>{d.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function InvestmentTracker() {
  return (
    <div className="it-root" style={{ width: '100%', height: '100%', minHeight: '100vh', background: T.bg, color: T.text, fontFamily: "'Outfit', 'DM Sans', sans-serif", overflowY: 'auto' }}>
      <style>{`
        @media(max-width:900px){
          .it-kpi{grid-template-columns:repeat(2,1fr)!important;}
          .it-main{grid-template-columns:1fr!important;}
          .it-table-wrap{overflow-x:auto!important;}
          .it-donut{flex-direction:column!important;}
        }
        @media(max-width:600px){
          .it-kpi{grid-template-columns:1fr!important;}
          .it-root header{padding:12px 16px!important;}
          .it-root>div:nth-child(2){padding:16px!important;}
        }
      `}</style>
      {/* Header */}
      <header style={{ padding: '16px 28px 12px', borderBottom: `1px solid ${T.border}`, background: T.surface, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Markets & Capital Engine Tracker</div>
          <div style={{ fontSize: 12, color: T.muted }}>Catalytic vs. Commercial Capital {'\u00b7'} Leverage Ratio {'\u00b7'} Pipeline Status</div>
        </div>
        <button style={{ padding: '8px 18px', borderRadius: 8, border: 'none', background: T.food, color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>+ Add Deal / Grant</button>
      </header>

      <div style={{ padding: '24px 28px' }}>
        {/* KPI Cards */}
        <div className="it-kpi" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 28 }}>
          {KPI.map((k, i) => (
            <div key={i} style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 20, marginBottom: 8 }}>{k.icon}</div>
              <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.muted, fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>{k.label}</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: T.text, marginBottom: 6 }}>{k.value}</div>
              <div style={{ fontSize: 12, color: k.trendColor, fontWeight: 500 }}>{k.trend}</div>
            </div>
          ))}
        </div>

        {/* Pipeline + Donut */}
        <div className="it-main" style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 20, marginBottom: 28 }}>
          {/* Pipeline Table */}
          <div className="it-table-wrap" style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Active Investment Pipeline</h2>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>Internal Program Tracker {'\u00b7'} Q1 2026</div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr>
                  {['Deal / Entity', 'Sector', 'Deal Size', 'Stage', 'Risk Profile'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '12px 16px', background: T.surface2, color: T.muted, fontWeight: 500, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Mono', monospace", borderBottom: `1px solid ${T.border}` }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DEALS.map((d, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.faint}` }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600 }}>{d.entity}</td>
                    <td style={{ padding: '12px 16px', color: T.muted }}>{d.sector}</td>
                    <td style={{ padding: '12px 16px', fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{d.size}</td>
                    <td style={{ padding: '12px 16px' }}><StageBadge stage={d.stage} /></td>
                    <td style={{ padding: '12px 16px', color: T.muted }}>{d.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Donut Chart */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, padding: 20 }}>
            <h2 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 700 }}>Allocation by Big Bet</h2>
            <div style={{ fontSize: 12, color: T.muted, marginBottom: 20 }}>% of Total Capital Deployed</div>
            <DonutChart data={ALLOCATION} total="211M" />
          </div>
        </div>

        {/* Footnote */}
        <div style={{ fontSize: 9, color: T.muted, lineHeight: 1.6 }}>
          {'\u25cf'} Data: Program Reports Q1-2026 {'\u00b7'} Capital: Internal Pipeline Tracker
        </div>
      </div>
    </div>
  );
}
