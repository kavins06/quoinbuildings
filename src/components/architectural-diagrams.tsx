type DiagramProps = {
  className?: string;
};

const frameClass =
  "relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)]";

/* ─────────────────────────────────────────────
   HeroDiagram — Building cross-section with
   intelligence layer bridging to financial outputs
   ───────────────────────────────────────────── */
export function HeroDiagram({ className = "" }: DiagramProps) {
  /* 5 floors, each 64px tall: HVAC, Controls, Meters, Equipment, Workflow
     Roof base y=120, ground y=440, slabs at 184, 248, 312, 376 */
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 640 560"
        role="img"
        aria-label="Building cross-section showing physical systems connected through an intelligence layer to financial outcomes"
        className="h-full w-full"
      >
        {/* Outer frame */}
        <rect x="24" y="24" width="592" height="512" rx="22" fill="none" stroke="var(--line)" />

        {/* ── Building structure (left) ── */}
        {/* Roof */}
        <path d="M56 120 L175 60 L294 120" fill="none" stroke="var(--steel)" strokeWidth="2" />
        <line x1="56" x2="56" y1="120" y2="440" stroke="var(--steel)" strokeWidth="2" />
        <line x1="294" x2="294" y1="120" y2="440" stroke="var(--steel)" strokeWidth="2" />
        <line x1="56" x2="294" y1="440" y2="440" stroke="var(--steel)" strokeWidth="2" />

        {/* Floor slabs */}
        {[184, 248, 312, 376].map((y) => (
          <line key={`slab-${y}`} x1="56" x2="294" y1={y} y2={y} stroke="var(--steel)" strokeWidth="1.5" />
        ))}

        {/* Floor labels — top-left of each zone */}
        <text x="70" y="145" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]" fontFamily="var(--font-mono)">HVAC</text>
        <text x="70" y="209" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]" fontFamily="var(--font-mono)">Controls</text>
        <text x="70" y="273" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]" fontFamily="var(--font-mono)">Meters</text>
        <text x="70" y="337" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]" fontFamily="var(--font-mono)">Equipment</text>
        <text x="70" y="401" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]" fontFamily="var(--font-mono)">Workflow</text>

        {/* HVAC ductwork (floor 1: y 120–184) */}
        <path d="M100 155 H240 V168 H150 V162" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M200 155 V172" fill="none" stroke="var(--line-strong)" strokeWidth="1" />

        {/* Controls wiring (floor 2: y 184–248) */}
        <path d="M100 220 H260" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M140 220 V236" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M200 220 V234" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M250 220 V232" fill="none" stroke="var(--line-strong)" strokeWidth="1" />

        {/* Meters (floor 3: y 248–312) */}
        {[110, 175, 240].map((x) => (
          <rect key={`meter-${x}`} x={x} y={284} width="26" height="16" rx="3" fill="rgba(100,116,139,0.12)" stroke="var(--steel)" strokeWidth="0.75" />
        ))}

        {/* Equipment (floor 4: y 312–376) */}
        <rect x="100" y="348" width="38" height="18" rx="3" fill="rgba(100,116,139,0.08)" stroke="var(--steel)" strokeWidth="0.75" />
        <rect x="160" y="348" width="48" height="18" rx="3" fill="rgba(100,116,139,0.08)" stroke="var(--steel)" strokeWidth="0.75" />
        <rect x="230" y="348" width="38" height="18" rx="3" fill="rgba(100,116,139,0.08)" stroke="var(--steel)" strokeWidth="0.75" />

        {/* Workflow (floor 5: y 376–440) */}
        <path d="M100 410 H160" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <path d="M160 410 L172 404 L184 410 L172 416 Z" fill="rgba(100,116,139,0.12)" stroke="var(--steel)" strokeWidth="0.75" />
        <path d="M184 410 H240" fill="none" stroke="var(--line-strong)" strokeWidth="1" />
        <circle cx="100" cy="410" r="4" fill="rgba(100,116,139,0.15)" stroke="var(--steel)" strokeWidth="0.75" />
        <rect x="240" y="404" width="24" height="12" rx="2" fill="rgba(100,116,139,0.12)" stroke="var(--steel)" strokeWidth="0.75" />

        {/* Sensor dots on building */}
        {[
          { cx: 255, cy: 162 },
          { cx: 140, cy: 228 },
          { cx: 200, cy: 228 },
          { cx: 250, cy: 228 },
          { cx: 175, cy: 292 },
          { cx: 140, cy: 356 },
          { cx: 252, cy: 356 },
          { cx: 172, cy: 422 },
        ].map((n) => (
          <circle key={`s-${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r="3.5" fill="var(--accent)" className="diagram-pulse" />
        ))}

        {/* ── Intelligence column (center) ── */}
        <rect x="340" y="85" width="60" height="365" rx="8" fill="rgba(45,90,74,0.08)" stroke="var(--accent)" strokeWidth="1.5" />

        {/* QUOIN label — centered above column */}
        <text x="370" y="74" textAnchor="middle" className="fill-[color:var(--accent)] text-[10px] uppercase tracking-[3px]" fontFamily="var(--font-mono)">QUOIN</text>

        {/* Data flow traces from building to intelligence column */}
        {[162, 228, 292, 356, 418].map((y) => (
          <path key={`trace-${y}`} d={`M294 ${y} H340`} fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        ))}

        {/* Internal column nodes */}
        {[162, 228, 292, 356, 418].map((y) => (
          <circle key={`col-${y}`} cx="370" cy={y} r="4" fill="var(--accent)" className="diagram-pulse" />
        ))}

        {/* Vertical spine inside column */}
        <line x1="370" x2="370" y1="100" y2="440" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" />

        {/* ── Financial outputs (right) ── */}
        {[
          { y: 130, label: "Cost" },
          { y: 258, label: "Risk" },
          { y: 386, label: "Value" },
        ].map((item) => (
          <g key={item.label}>
            <rect x="450" y={item.y} width="144" height="52" rx="12" fill="rgba(180,90,60,0.06)" stroke="var(--accent-warm)" strokeWidth="1" />
            <text x="522" y={item.y + 31} textAnchor="middle" className="fill-[color:var(--text)] text-[13px] uppercase tracking-[3px]" fontFamily="var(--font-mono)">
              {item.label}
            </text>
            <path
              d={`M400 ${item.y + 26} H450`}
              fill="none"
              stroke="var(--accent-warm)"
              strokeWidth="1.5"
              className="diagram-trace"
            />
          </g>
        ))}

        {/* Flow arrow hints */}
        <circle cx="425" cy="156" r="3" fill="var(--accent-warm)" className="diagram-pulse" />
        <circle cx="425" cy="284" r="3" fill="var(--accent-warm)" className="diagram-pulse" />
        <circle cx="425" cy="412" r="3" fill="var(--accent-warm)" className="diagram-pulse" />

        {/* Bottom labels — evenly spaced */}
        <text x="175" y="486" textAnchor="middle" className="fill-[color:var(--muted)] text-[10px] uppercase tracking-[3px]" fontFamily="var(--font-mono)">Physical systems</text>
        <text x="370" y="486" textAnchor="middle" className="fill-[color:var(--accent)] text-[10px] uppercase tracking-[3px]" fontFamily="var(--font-mono)">Intelligence</text>
        <text x="522" y="486" textAnchor="middle" className="fill-[color:var(--accent-warm)] text-[10px] uppercase tracking-[3px]" fontFamily="var(--font-mono)">Outcomes</text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   GapDiagram — Building systems on left,
   structural void in center, financial forms on right
   ───────────────────────────────────────────── */
export function GapDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 560 360"
        role="img"
        aria-label="Diagram showing the gap between building signals and financial outcomes"
        className="h-full w-full"
      >
        <rect x="24" y="24" width="512" height="312" rx="22" fill="none" stroke="var(--line)" />

        {/* ── Building section (left) ── */}
        <rect x="48" y="56" width="160" height="248" rx="4" fill="none" stroke="var(--steel)" strokeWidth="1.5" />
        {/* Floor slabs */}
        {[118, 180, 242].map((y) => (
          <line key={`gs-${y}`} x1="48" x2="208" y1={y} y2={y} stroke="var(--steel)" strokeWidth="1" />
        ))}

        {/* System labels */}
        {[
          { label: "HVAC", y: 94 },
          { label: "Controls", y: 156 },
          { label: "Meters", y: 218 },
          { label: "Equipment", y: 280 },
        ].map((item) => (
          <text key={item.label} x="60" y={item.y} className="fill-[color:var(--text)] text-[10px] uppercase tracking-[2px]">
            {item.label}
          </text>
        ))}

        {/* Sensor dots */}
        {[88, 150, 212, 274].map((y) => (
          <circle key={`sd-${y}`} cx="186" cy={y} r="4" fill="var(--accent)" className="diagram-pulse" />
        ))}

        {/* ── The gap (center) ── */}
        <rect
          x="232"
          y="72"
          width="96"
          height="216"
          rx="6"
          fill="rgba(100,116,139,0.04)"
          stroke="var(--steel)"
          strokeDasharray="6 8"
          strokeWidth="1"
        />
        {/* Broken connections */}
        {[100, 162, 224, 274].map((y, i) => (
          <g key={`gap-${y}`}>
            <path
              d={`M208 ${y} H232`}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.5"
              className="diagram-trace"
            />
            {i < 3 && (
              <path
                d={`M328 ${y} H352`}
                fill="none"
                stroke="var(--line-strong)"
                strokeWidth="1"
                strokeDasharray="3 5"
              />
            )}
          </g>
        ))}

        <text x="248" y="178" className="fill-[color:var(--steel)] text-[9px] uppercase tracking-[2px]">No shared</text>
        <text x="248" y="194" className="fill-[color:var(--steel)] text-[9px] uppercase tracking-[2px]">intelligence</text>

        {/* ── Financial outcomes (right) ── */}
        {[
          { label: "Cost", y: 80 },
          { label: "Risk", y: 150 },
          { label: "Value", y: 220 },
        ].map((item) => (
          <g key={item.label}>
            <rect x="360" y={item.y} width="148" height="48" rx="8" fill="rgba(180,90,60,0.05)" stroke="var(--accent-warm)" strokeWidth="1" />
            <text x="380" y={item.y + 30} className="fill-[color:var(--text)] text-[11px] uppercase tracking-[2px]">
              {item.label}
            </text>
          </g>
        ))}

        <text x="168" y="328" className="fill-[color:var(--steel)] text-[9px] uppercase tracking-[2px]">Building signals</text>
        <text x="380" y="296" className="fill-[color:var(--accent-warm)] text-[9px] uppercase tracking-[2px]">Financial outcomes</text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   TimelineDiagram — Building silhouettes evolving
   from opaque/legacy to transparent/intelligent
   ───────────────────────────────────────────── */
export function TimelineDiagram({ className = "" }: DiagramProps) {
  const stages = [
    { label: "Legacy", opacity: 1 },
    { label: "Fragmented", opacity: 0.7 },
    { label: "Custom", opacity: 0.5 },
    { label: "New layer", opacity: 0.3 },
    { label: "Broad access", opacity: 0.15 },
  ];

  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 560 280"
        role="img"
        aria-label="Timeline showing the evolution from legacy building systems to broadly accessible intelligence"
        className="h-full w-full"
      >
        <rect x="24" y="24" width="512" height="232" rx="22" fill="none" stroke="var(--line)" />

        {/* Ground line */}
        <line x1="56" x2="504" y1="200" y2="200" stroke="var(--steel)" strokeWidth="1.5" />

        {stages.map((stage, i) => {
          const x = 72 + i * 96;
          const isNew = i >= 3;

          return (
            <g key={stage.label}>
              {/* Building silhouette */}
              <path
                d={`M${x} 200 V${130 - i * 6} L${x + 28} ${118 - i * 6} L${x + 56} ${130 - i * 6} V200`}
                fill={isNew ? "rgba(45,90,74,0.08)" : `rgba(100,116,139,${stage.opacity * 0.15})`}
                stroke={isNew ? "var(--accent)" : "var(--steel)"}
                strokeWidth={isNew ? 1.5 : 1}
              />

              {/* Internal system lines (more visible on newer buildings) */}
              {i >= 2 && (
                <>
                  <line x1={x + 8} x2={x + 48} y1="160" y2="160" stroke={isNew ? "var(--accent)" : "var(--steel)"} strokeWidth="0.75" strokeDasharray="3 4" />
                  <line x1={x + 8} x2={x + 48} y1="180" y2="180" stroke={isNew ? "var(--accent)" : "var(--steel)"} strokeWidth="0.75" strokeDasharray="3 4" />
                </>
              )}

              {/* Sensor dots on newer buildings */}
              {i >= 3 && (
                <>
                  <circle cx={x + 20} cy={155} r="2.5" fill="var(--accent)" className="diagram-pulse" />
                  <circle cx={x + 40} cy={175} r="2.5" fill="var(--accent)" className="diagram-pulse" />
                </>
              )}

              {/* Timeline dot */}
              <circle
                cx={x + 28}
                cy="200"
                r={isNew ? 6 : 4}
                fill={isNew ? "var(--accent)" : "var(--steel)"}
                className={isNew ? "diagram-pulse" : ""}
              />

              {/* Label */}
              <text
                x={x + 28}
                y={i % 2 === 0 ? 228 : 242}
                textAnchor="middle"
                className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[1.5px]"
              >
                {stage.label}
              </text>
            </g>
          );
        })}

        {/* Direction arrow */}
        <path d="M490 200 L504 200 L498 194" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   LayerDiagram — Building sectional stack:
   foundation (Observe), floor (Interpret), roof (Translate)
   ───────────────────────────────────────────── */
export function LayerDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 560 420"
        role="img"
        aria-label="Three-layer building section diagram: observe, interpret, translate"
        className="h-full w-full"
      >
        <rect x="24" y="24" width="512" height="372" rx="22" fill="none" stroke="var(--line)" />

        {/* ── Translate (roof level) ── */}
        <path d="M100 80 L280 48 L460 80" fill="none" stroke="var(--steel)" strokeWidth="2" />
        <line x1="100" x2="460" y1="80" y2="80" stroke="var(--steel)" strokeWidth="2" />
        <rect x="140" y="92" width="280" height="64" rx="8" fill="rgba(180,90,60,0.05)" stroke="var(--accent-warm)" strokeWidth="1" />
        <text x="168" y="120" className="fill-[color:var(--text)] text-[13px] uppercase tracking-[3px]">Translate</text>
        <text x="168" y="140" className="fill-[color:var(--muted)] text-[11px]">Operations connect to economics.</text>

        {/* Upward arrows to financial symbols */}
        {[200, 280, 360].map((x) => (
          <path key={`arr-${x}`} d={`M${x} 92 V72`} fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />
        ))}
        <text x="182" y="66" className="fill-[color:var(--accent-warm)] text-[8px] uppercase tracking-[2px]">Cost</text>
        <text x="266" y="66" className="fill-[color:var(--accent-warm)] text-[8px] uppercase tracking-[2px]">Risk</text>
        <text x="344" y="66" className="fill-[color:var(--accent-warm)] text-[8px] uppercase tracking-[2px]">Value</text>

        {/* Floor slab 1 */}
        <line x1="100" x2="460" y1="176" y2="176" stroke="var(--steel)" strokeWidth="2" />

        {/* ── Interpret (floor level) ── */}
        <rect x="100" y="176" width="360" height="100" rx="0" fill="rgba(45,90,74,0.04)" stroke="none" />
        <rect x="140" y="192" width="280" height="64" rx="8" fill="rgba(45,90,74,0.06)" stroke="var(--accent)" strokeWidth="1" />
        <text x="168" y="220" className="fill-[color:var(--text)] text-[13px] uppercase tracking-[3px]">Interpret</text>
        <text x="168" y="240" className="fill-[color:var(--muted)] text-[11px]">Systems relate to space.</text>

        {/* Connecting duct/pipe traces */}
        <path d="M140 230 H120 V210 H140" fill="none" stroke="var(--accent)" strokeWidth="1" className="diagram-trace" />
        <path d="M420 210 H440 V240 H420" fill="none" stroke="var(--accent)" strokeWidth="1" className="diagram-trace" />

        {/* Floor slab 2 */}
        <line x1="100" x2="460" y1="276" y2="276" stroke="var(--steel)" strokeWidth="2" />

        {/* ── Observe (foundation level) ── */}
        <rect x="100" y="276" width="360" height="100" rx="0" fill="rgba(100,116,139,0.04)" stroke="none" />
        <line x1="100" x2="100" y1="80" y2="376" stroke="var(--steel)" strokeWidth="2" />
        <line x1="460" x2="460" y1="80" y2="376" stroke="var(--steel)" strokeWidth="2" />
        <line x1="100" x2="460" y1="376" y2="376" stroke="var(--steel)" strokeWidth="2" />

        <rect x="140" y="292" width="280" height="64" rx="8" fill="rgba(100,116,139,0.06)" stroke="var(--steel)" strokeWidth="1" />
        <text x="168" y="320" className="fill-[color:var(--text)] text-[13px] uppercase tracking-[3px]">Observe</text>
        <text x="168" y="340" className="fill-[color:var(--muted)] text-[11px]">Signals become legible.</text>

        {/* Sensor dots at foundation */}
        {[180, 240, 300, 360].map((x) => (
          <circle key={`obs-${x}`} cx={x} cy={368} r="3.5" fill="var(--accent)" className="diagram-pulse" />
        ))}

        {/* Vertical risers connecting layers */}
        <path d="M200 368 V156" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" className="diagram-trace" />
        <path d="M360 368 V156" fill="none" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 6" className="diagram-trace" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   FieldDiagram — Architectural floor plan with
   sensor overlay and data flow to central hub
   ───────────────────────────────────────────── */
export function FieldDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 520 320"
        role="img"
        aria-label="Architectural floor plan with sensor data flowing to a central hub"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="480" height="280" rx="20" fill="none" stroke="var(--line)" />

        {/* ── Floor plan walls ── */}
        {/* Outer walls */}
        <rect x="56" y="48" width="408" height="224" rx="2" fill="none" stroke="var(--steel)" strokeWidth="2.5" />

        {/* Interior walls */}
        <line x1="220" x2="220" y1="48" y2="180" stroke="var(--steel)" strokeWidth="2" />
        <line x1="340" x2="340" y1="48" y2="272" stroke="var(--steel)" strokeWidth="2" />
        <line x1="56" x2="220" y1="180" y2="180" stroke="var(--steel)" strokeWidth="2" />
        <line x1="220" x2="340" y1="160" y2="160" stroke="var(--steel)" strokeWidth="2" />

        {/* Door openings (gaps in walls) */}
        <line x1="220" x2="220" y1="180" y2="210" stroke="var(--surface)" strokeWidth="3" />
        <line x1="220" x2="220" y1="100" y2="128" stroke="var(--surface)" strokeWidth="3" />
        <line x1="340" x2="340" y1="100" y2="130" stroke="var(--surface)" strokeWidth="3" />

        {/* Room labels */}
        <text x="112" y="120" textAnchor="middle" className="fill-[color:var(--line-strong)] text-[9px] uppercase tracking-[2px]">Zone A</text>
        <text x="112" y="232" textAnchor="middle" className="fill-[color:var(--line-strong)] text-[9px] uppercase tracking-[2px]">Zone B</text>
        <text x="280" y="108" textAnchor="middle" className="fill-[color:var(--line-strong)] text-[9px] uppercase tracking-[2px]">Zone C</text>
        <text x="280" y="220" textAnchor="middle" className="fill-[color:var(--line-strong)] text-[9px] uppercase tracking-[2px]">Zone D</text>
        <text x="410" y="160" textAnchor="middle" className="fill-[color:var(--line-strong)] text-[9px] uppercase tracking-[2px]">Zone E</text>

        {/* ── Central intelligence hub ── */}
        <rect x="240" y="180" width="80" height="60" rx="10" fill="rgba(45,90,74,0.08)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="256" y="214" className="fill-[color:var(--accent)] text-[8px] uppercase tracking-[2px]">Hub</text>

        {/* ── Sensor dots ── */}
        {[
          { cx: 100, cy: 96 },
          { cx: 160, cy: 148 },
          { cx: 90, cy: 224 },
          { cx: 180, cy: 240 },
          { cx: 270, cy: 84 },
          { cx: 300, cy: 136 },
          { cx: 280, cy: 248 },
          { cx: 400, cy: 100 },
          { cx: 420, cy: 200 },
          { cx: 380, cy: 248 },
        ].map((n) => (
          <circle key={`fp-${n.cx}-${n.cy}`} cx={n.cx} cy={n.cy} r="3.5" fill="var(--accent)" className="diagram-pulse" />
        ))}

        {/* ── Data flow traces to hub ── */}
        <path d="M100 96 L160 148 L240 200" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M90 224 H180 V240 L240 230" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M270 84 V136 L280 180" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M420 200 H380 L320 210" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M400 100 L380 136 L340 180" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Vision page diagrams — 4 unique diagrams
   ───────────────────────────────────────────── */

/* DynamicBuildingDiagram — buildings are not static */
export function DynamicBuildingDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 480 320"
        role="img"
        aria-label="Building with dynamic internal systems showing movement and change"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="440" height="280" rx="20" fill="none" stroke="var(--line)" />

        {/* Building structure */}
        <path d="M120 260 V80 L240 48 L360 80 V260" fill="none" stroke="var(--steel)" strokeWidth="2" />
        <line x1="120" x2="360" y1="260" y2="260" stroke="var(--steel)" strokeWidth="2" />
        {[120, 160, 200].map((y) => (
          <line key={`df-${y}`} x1="120" x2="360" y1={y} y2={y} stroke="var(--steel)" strokeWidth="1" />
        ))}

        {/* Animated internal flows — heat, air, energy */}
        <path d="M140 100 C180 90 220 110 260 95 C300 80 340 100 350 95" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M140 145 H200 V170 H280 V145 H340" fill="none" stroke="var(--accent)" strokeWidth="1" className="diagram-trace" />
        <path d="M160 180 V220 H320 V185" fill="none" stroke="var(--steel)" strokeWidth="1" className="diagram-trace" />

        {/* Occupancy indicators */}
        {[160, 220, 280, 320].map((x) => (
          <circle key={`occ-${x}`} cx={x} cy={230} r="4" fill="var(--accent)" opacity="0.6" className="diagram-pulse" />
        ))}

        {/* Energy pulse arrows */}
        <path d="M140 240 L160 230 L180 240" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M300 240 L320 230 L340 240" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />

        {/* Labels */}
        <text x="44" y="100" className="fill-[color:var(--accent-warm)] text-[8px] uppercase tracking-[2px]">Heat</text>
        <text x="44" y="150" className="fill-[color:var(--accent)] text-[8px] uppercase tracking-[2px]">Air</text>
        <text x="44" y="200" className="fill-[color:var(--steel)] text-[8px] uppercase tracking-[2px]">Power</text>
        <text x="44" y="234" className="fill-[color:var(--accent)] text-[8px] uppercase tracking-[2px]">Use</text>

        <text x="162" y="288" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]">Dynamic, not static</text>
      </svg>
    </div>
  );
}

/* DataFragmentDiagram — data exists but disconnected */
export function DataFragmentDiagram({ className = "" }: DiagramProps) {
  const sources = [
    { x: 60, y: 80, label: "Meters" },
    { x: 200, y: 56, label: "Controls" },
    { x: 350, y: 72, label: "Schedules" },
    { x: 80, y: 200, label: "Inspections" },
    { x: 240, y: 220, label: "Sensors" },
    { x: 380, y: 210, label: "Spatial" },
  ];

  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 480 320"
        role="img"
        aria-label="Disconnected data sources floating without a common intelligence layer"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="440" height="280" rx="20" fill="none" stroke="var(--line)" />

        {/* Data source islands */}
        {sources.map((src) => (
          <g key={src.label}>
            <rect x={src.x} y={src.y} width="80" height="40" rx="8" fill="rgba(100,116,139,0.06)" stroke="var(--steel)" strokeWidth="1" />
            <text x={src.x + 12} y={src.y + 25} className="fill-[color:var(--text)] text-[9px] uppercase tracking-[2px]">
              {src.label}
            </text>
          </g>
        ))}

        {/* Broken connections between sources */}
        <path d="M140 96 H168" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M168 100 L186 80" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M280 76 H320" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M160 210 H208" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M320 236 H348" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M140 120 V176" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />
        <path d="M380 120 V176" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="3 5" />

        {/* "No coherence" center label */}
        <rect x="168" y="132" width="144" height="48" rx="10" fill="rgba(100,116,139,0.04)" stroke="var(--steel)" strokeDasharray="6 8" strokeWidth="1" />
        <text x="188" y="160" className="fill-[color:var(--steel)] text-[9px] uppercase tracking-[2px]">No coherence</text>

        <text x="148" y="296" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]">Data exists. Intelligence does not.</text>
      </svg>
    </div>
  );
}

/* LegacyStackDiagram — expensive vertical proprietary stack */
export function LegacyStackDiagram({ className = "" }: DiagramProps) {
  const layers = [
    "Custom integration",
    "Proprietary platform",
    "Bespoke deployment",
    "Narrow use case",
    "Single building",
  ];

  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 480 320"
        role="img"
        aria-label="Tall proprietary technology stack with escalating cost"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="440" height="280" rx="20" fill="none" stroke="var(--line)" />

        {/* Proprietary stack */}
        {layers.map((label, i) => {
          const y = 48 + i * 48;
          const opacity = 0.04 + i * 0.03;
          return (
            <g key={label}>
              <rect x="80" y={y} width="220" height="40" rx="6" fill={`rgba(100,116,139,${opacity})`} stroke="var(--steel)" strokeWidth="1" />
              <text x="96" y={y + 25} className="fill-[color:var(--text)] text-[9px] uppercase tracking-[2px]">
                {label}
              </text>
            </g>
          );
        })}

        {/* Cost escalation arrow on right */}
        <line x1="340" x2="340" y1="272" y2="56" stroke="var(--accent-warm)" strokeWidth="1.5" />
        <path d="M340 56 L334 68 M340 56 L346 68" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" />
        <text x="356" y="100" className="fill-[color:var(--accent-warm)] text-[9px] uppercase tracking-[2px]">Cost</text>
        <text x="356" y="172" className="fill-[color:var(--accent-warm)] text-[9px] uppercase tracking-[2px]">Scale</text>
        <text x="356" y="244" className="fill-[color:var(--accent-warm)] text-[9px] uppercase tracking-[2px]">Reach</text>

        {/* Restriction indicators */}
        {[100, 148, 196, 244].map((y) => (
          <line key={`res-${y}`} x1="340" x2="350" y1={y} y2={y} stroke="var(--accent-warm)" strokeWidth="1" />
        ))}

        <text x="120" y="300" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]">Too custom. Too expensive. Too narrow.</text>
      </svg>
    </div>
  );
}

/* EmergingStackDiagram — horizontal foundational layer */
export function EmergingStackDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 480 320"
        role="img"
        aria-label="Flat horizontal intelligence layer connecting multiple buildings and outcomes"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="440" height="280" rx="20" fill="none" stroke="var(--line)" />

        {/* Multiple building silhouettes on top */}
        {[72, 172, 272, 372].map((x, i) => {
          const h = 60 + i * 8;
          return (
            <g key={`bldg-${x}`}>
              <path
                d={`M${x} ${180 - h} V180 H${x + 56} V${180 - h}`}
                fill="rgba(100,116,139,0.06)"
                stroke="var(--steel)"
                strokeWidth="1"
              />
              {/* Sensor dot */}
              <circle cx={x + 28} cy={180 - h / 2} r="3" fill="var(--accent)" className="diagram-pulse" />
              {/* Connection down to layer */}
              <path d={`M${x + 28} 180 V200`} fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
            </g>
          );
        })}

        {/* ── The intelligence layer (horizontal) ── */}
        <rect x="52" y="196" width="376" height="36" rx="8" fill="rgba(45,90,74,0.08)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="168" y="220" className="fill-[color:var(--accent)] text-[10px] uppercase tracking-[3px]">Intelligence layer</text>

        {/* Horizontal trace through the layer */}
        <path d="M60 214 H420" fill="none" stroke="var(--accent)" strokeWidth="1" className="diagram-trace" />

        {/* Outputs below */}
        {[
          { x: 100, label: "Efficiency" },
          { x: 220, label: "Risk" },
          { x: 330, label: "Value" },
        ].map((out) => (
          <g key={out.label}>
            <path d={`M${out.x + 30} 232 V252`} fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />
            <rect x={out.x} y={252} width="72" height="28" rx="6" fill="rgba(180,90,60,0.06)" stroke="var(--accent-warm)" strokeWidth="1" />
            <text x={out.x + 8} y={271} className="fill-[color:var(--text)] text-[8px] uppercase tracking-[2px]">
              {out.label}
            </text>
          </g>
        ))}

        <text x="140" y="52" className="fill-[color:var(--muted)] text-[9px] uppercase tracking-[2px]">A different stack is emerging.</text>
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   ValueFlowDiagram — physical signals flowing
   through QUOIN into financial metrics
   ───────────────────────────────────────────── */
export function ValueFlowDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 640 360"
        role="img"
        aria-label="Building signals flowing through QUOIN intelligence layer into financial outcomes"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="600" height="320" rx="22" fill="none" stroke="var(--line)" />

        {/* ── Building (left) ── */}
        <path d="M60 280 V100 L140 68 L220 100 V280" fill="rgba(100,116,139,0.06)" stroke="var(--steel)" strokeWidth="1.5" />
        <line x1="60" x2="220" y1="280" y2="280" stroke="var(--steel)" strokeWidth="1.5" />
        {[140, 180, 220].map((y) => (
          <line key={`vf-${y}`} x1="60" x2="220" y1={y} y2={y} stroke="var(--steel)" strokeWidth="0.75" />
        ))}

        {/* Signal indicators emerging from building */}
        {[
          { y: 120, label: "Temp" },
          { y: 160, label: "Energy" },
          { y: 200, label: "Use" },
          { y: 250, label: "State" },
        ].map((sig) => (
          <g key={sig.label}>
            <circle cx="210" cy={sig.y} r="3.5" fill="var(--accent)" className="diagram-pulse" />
            <text x="68" y={sig.y + 4} className="fill-[color:var(--muted)] text-[8px] uppercase tracking-[1.5px]">{sig.label}</text>
          </g>
        ))}

        {/* ── Flow traces to QUOIN column ── */}
        <path d="M220 120 C260 120 280 140 300 140" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M220 160 C260 160 280 170 300 170" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M220 200 C260 200 280 210 300 210" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M220 250 C260 250 280 240 300 240" fill="none" stroke="var(--accent)" strokeWidth="1.5" className="diagram-trace" />

        {/* ── QUOIN cornerstone column (center) ── */}
        <rect x="296" y="100" width="48" height="180" rx="4" fill="rgba(45,90,74,0.10)" stroke="var(--accent)" strokeWidth="2" />
        {/* Corner notch (quoin motif) */}
        <path d="M296 100 H308 V112" fill="none" stroke="var(--accent)" strokeWidth="2" />
        <text x="302" y="88" className="fill-[color:var(--accent)] text-[9px] font-semibold uppercase tracking-[2px]">Q</text>

        {/* Internal processing nodes */}
        {[140, 175, 210, 245].map((y) => (
          <circle key={`qn-${y}`} cx="320" cy={y} r="3" fill="var(--accent)" className="diagram-pulse" />
        ))}

        {/* ── Flow traces to financial outputs ── */}
        <path d="M344 150 C380 150 400 120 420 120" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M344 190 C380 190 400 190 420 190" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />
        <path d="M344 230 C380 230 400 260 420 260" fill="none" stroke="var(--accent-warm)" strokeWidth="1.5" className="diagram-trace" />

        {/* ── Financial outputs (right) ── */}
        {[
          { y: 100, label: "Cost reduction", icon: "M448 112 L456 104 L464 112" },
          { y: 170, label: "Risk visibility", icon: "M448 184 L456 176 L464 184 Z" },
          { y: 240, label: "Asset value", icon: "M448 250 H464 V264 H448 Z" },
        ].map((out) => (
          <g key={out.label}>
            <rect x="420" y={out.y} width="176" height="48" rx="10" fill="rgba(180,90,60,0.06)" stroke="var(--accent-warm)" strokeWidth="1" />
            <path d={out.icon} fill="var(--accent-warm)" opacity="0.7" />
            <text x="474" y={out.y + 29} className="fill-[color:var(--text)] text-[10px] uppercase tracking-[2px]">
              {out.label}
            </text>
            <circle cx="430" cy={out.y + 24} r="3" fill="var(--accent-warm)" className="diagram-pulse" />
          </g>
        ))}

        {/* Bottom labels */}
        <text x="92" y="310" className="fill-[color:var(--steel)] text-[9px] uppercase tracking-[2px]">Building</text>
        <text x="290" y="310" className="fill-[color:var(--accent)] text-[9px] uppercase tracking-[2px]">QUOIN</text>
        <text x="470" y="310" className="fill-[color:var(--accent-warm)] text-[9px] uppercase tracking-[2px]">Financial outcomes</text>
      </svg>
    </div>
  );
}
