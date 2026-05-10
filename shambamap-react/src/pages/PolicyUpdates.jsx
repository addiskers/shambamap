import React from 'react';

/* ─── Light-theme tokens ─── */
const T = {
  bg: '#f8f9fa', surface: '#ffffff', surface2: '#f1f3f5', faint: '#f8f9fa',
  border: '#e5e7eb', text: '#1a1a2e', muted: '#6b7280',
  green: '#10b981', blue: '#3b82f6', yellow: '#f59e0b', red: '#ef4444',
  food: '#2dd4a7', system: '#c084fc',
};

/* ─── Policy data ─── */
const POLICIES = [
  { policy: 'Biotech Commercialization Ban Lift (TELA Maize)', impact: 'Hybrid Seeds / Productivity', status: 'Court Injunction Active', economic: 'Blocked: $160.3M/year', economicColor: T.red },
  { policy: 'FMD Vaccine Subsidy Framework', impact: 'Animal Health', status: 'Passed \u2014 Implementation', economic: 'Saved: $66\u201390M/year', economicColor: T.green },
  { policy: 'AfCFTA Cereals Export Harmonization', impact: 'Regional Trade (EAC)', status: 'Drafting / Harmonization', economic: 'TBD \u2014 ITC Trade Map monitored', economicColor: T.text },
  { policy: 'AgriStack Data Privacy Act', impact: 'Digital Public Infrastructure', status: 'Enacted', economic: 'Enables AI Advisory Scale', economicColor: T.green },
  { policy: 'National Irrigation Policy (NWCPC)', impact: 'Climate Resilience', status: 'Under Review', economic: '300k Ha Solar Pump Rollout', economicColor: T.text },
  { policy: 'Dairy Sector Regulatory Framework (KDB)', impact: 'Dairy / Livestock', status: 'Active', economic: 'Farmgate price floor: KES 49.9/L', economicColor: T.green },
];

/* ─── Status badge helper ─── */
function StatusBadge({ status }) {
  const map = {
    'Court Injunction Active': { bg: 'rgba(239,68,68,0.12)', color: T.red },
    'Passed \u2014 Implementation': { bg: 'rgba(16,185,129,0.12)', color: T.green },
    'Drafting / Harmonization': { bg: 'rgba(245,158,11,0.12)', color: T.yellow },
    'Enacted': { bg: 'rgba(16,185,129,0.12)', color: T.green },
    'Under Review': { bg: 'rgba(59,130,246,0.12)', color: T.blue },
    'Active': { bg: 'rgba(16,185,129,0.12)', color: T.green },
  };
  const cfg = map[status] || { bg: 'rgba(139,92,246,0.12)', color: T.system };
  return (
    <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: 999, fontSize: 12, fontWeight: 600, background: cfg.bg, color: cfg.color, whiteSpace: 'nowrap' }}>{status}</span>
  );
}

/* ─── Main component ─── */
export default function PolicyUpdates() {
  return (
    <div className="pu-root" style={{ width: '100%', height: '100%', minHeight: '100vh', background: T.bg, color: T.text, fontFamily: "'Outfit', 'DM Sans', sans-serif", overflowY: 'auto' }}>
      <style>{`
        @media(max-width:900px){
          .pu-table-wrap{overflow-x:auto!important;}
          .pu-grid{grid-template-columns:1fr!important;}
        }
        @media(max-width:600px){
          .pu-root header{padding:12px 16px!important;}
          .pu-root>div:nth-child(2){padding:16px!important;}
        }
      `}</style>
      {/* Header */}
      <header style={{ padding: '16px 28px 12px', borderBottom: `1px solid ${T.border}`, background: T.surface, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>Regulatory & Policy Environment</div>
          <div style={{ fontSize: 12, color: T.muted }}>Sources: KenTrade {'\u00b7'} COMESA {'\u00b7'} MoALD {'\u00b7'} WOAH WAHIS {'\u00b7'} CA Kenya</div>
        </div>
        <span style={{ fontSize: 12, color: T.food, fontWeight: 500 }}>{'\u25cf'} Last sync: May 2026</span>
      </header>

      <div style={{ padding: '24px 28px' }}>
        {/* Critical Legislative Pathways */}
        <div className="pu-table-wrap" style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden', marginBottom: 28 }}>
          <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Critical Legislative Pathways</h2>
            <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>Real-time legislative tracking {'\u00b7'} Estimated economic impact per KNBS/USDA GAIN</div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr>
                {['Policy / Legal Action', 'Impact Area', 'Status', 'Estimated Economic Impact'].map(h => (
                  <th key={h} style={{ textAlign: 'left', padding: '12px 16px', background: T.surface2, color: T.muted, fontWeight: 500, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'DM Mono', monospace", borderBottom: `1px solid ${T.border}` }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {POLICIES.map((p, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${T.faint}` }}>
                  <td style={{ padding: '12px 16px', fontWeight: 600 }}>{p.policy}</td>
                  <td style={{ padding: '12px 16px', color: T.muted }}>{p.impact}</td>
                  <td style={{ padding: '12px 16px' }}><StatusBadge status={p.status} /></td>
                  <td style={{ padding: '12px 16px', color: p.economicColor, fontWeight: 500 }}>{p.economic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Contingency + Regional Integration Score */}
        <div className="pu-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20, marginBottom: 28 }}>
          {/* Contingency Plan */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Contingency Plan: TELA Maize</h2>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>Active mitigation strategy {'\u2014'} Board briefing Q1 2026</div>
            </div>
            <div style={{ padding: 20, fontSize: 13, lineHeight: 1.7, color: T.text }}>
              <p style={{ margin: '0 0 16px' }}>
                <strong>Current Scenario:</strong> Court injunction remains in place; TELA Bt maize commercialization paused pending appeal.
              </p>
              <p style={{ margin: '0 0 16px' }}>
                <strong>Mitigation Deployed:</strong> Reallocating investment emphasis toward non-GM yield levers: hybrid seed distribution, solar irrigation expansion, and AI advisory uptake. KALRO open-pollinated varieties scaling as buffer.
              </p>
              <p style={{ margin: 0 }}>
                <strong>Monitoring:</strong> Legal team tracking High Court docket; MoA dialogue channel open. Optionality preserved for rapid commercialization upon injunction lift.
              </p>
            </div>
          </div>

          {/* Regional Integration Score */}
          <div style={{ background: T.surface, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${T.border}` }}>
              <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700 }}>Regional Integration Score</h2>
              <div style={{ fontSize: 12, color: T.muted, marginTop: 2 }}>Based on CAADP alignment {'\u00b7'} ITC Trade Map {'\u00b7'} COMESA eCOO volume</div>
            </div>
            <div style={{ padding: 20, textAlign: 'center' }}>
              <div style={{ fontSize: 64, fontWeight: 700, color: T.food, lineHeight: 1, marginBottom: 8 }}>B+</div>
              <div style={{ fontSize: 12, color: T.muted, marginBottom: 20 }}>CAADP Alignment Index</div>
              <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.8, textAlign: 'center' }}>
                EAC Agri-Trade: <strong style={{ color: T.text }}>$184.2M</strong><br/>
                AfCFTA eCOO Certificates: <strong style={{ color: T.text }}>Active</strong><br/>
                COMESA Harmonized Tariff: <strong style={{ color: T.text }}>Grains {'\u2014'} Phase 2</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ fontSize: 9, color: T.muted, lineHeight: 1.6 }}>
          {'\u25cf'} Policy: KenTrade {'\u00b7'} COMESA {'\u00b7'} Trade: ITC Trade Map {'\u00b7'} WOAH WAHIS
        </div>
      </div>
    </div>
  );
}
