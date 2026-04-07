type DiagramProps = {
  className?: string;
};

const frameClass =
  "relative overflow-hidden rounded-[2rem] border border-[color:var(--line)] bg-[color:var(--surface)]";

export function HeroDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 640 560"
        role="img"
        aria-label="Abstract architectural system diagram"
        className="h-full w-full"
      >
        <rect x="32" y="32" width="576" height="496" rx="26" fill="none" stroke="var(--line)" />
        <rect x="104" y="92" width="232" height="316" fill="rgba(125,136,131,0.12)" stroke="var(--line)" />
        <rect x="304" y="140" width="184" height="228" fill="rgba(255,255,255,0.54)" stroke="var(--line)" />
        <rect x="238" y="198" width="122" height="122" fill="rgba(125,136,131,0.12)" stroke="var(--accent)" />
        <rect x="262" y="222" width="74" height="74" fill="rgba(255,255,255,0.76)" stroke="var(--accent)" />

        {[152, 200, 248, 296].map((y) => (
          <line key={`lh-${y}`} x1="104" x2="336" y1={y} y2={y} stroke="var(--line)" />
        ))}
        {[152, 200, 248, 296, 344].map((y) => (
          <line key={`rh-${y}`} x1="304" x2="488" y1={y} y2={y} stroke="var(--line)" />
        ))}
        {[152, 200, 248, 296].map((x) => (
          <line key={`lv-${x}`} x1={x} x2={x} y1="92" y2="408" stroke="var(--line)" />
        ))}
        {[352, 400, 448].map((x) => (
          <line key={`rv-${x}`} x1={x} x2={x} y1="140" y2="368" stroke="var(--line)" />
        ))}

        <path
          d="M128 128 H240 V240"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
        <path
          d="M488 168 H402 V258"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
        <path
          d="M160 376 H280 V300"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
        <path
          d="M520 336 H344 V280"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />

        {[
          { cx: 128, cy: 128 },
          { cx: 160, cy: 376 },
          { cx: 520, cy: 336 },
          { cx: 488, cy: 168 },
        ].map((node) => (
          <circle
            key={`${node.cx}-${node.cy}`}
            cx={node.cx}
            cy={node.cy}
            r="4"
            fill="var(--accent)"
            className="diagram-pulse"
          />
        ))}

        <text x="118" y="442" className="fill-[color:var(--muted)] text-[12px] uppercase tracking-[4px]">
          Physical systems
        </text>
        <text x="238" y="344" className="fill-[color:var(--muted)] text-[12px] uppercase tracking-[4px]">
          Intelligence core
        </text>
        <text x="346" y="402" className="fill-[color:var(--muted)] text-[12px] uppercase tracking-[4px]">
          Cost risk value
        </text>
      </svg>
    </div>
  );
}

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
        {[
          { label: "Equipment", y: 72 },
          { label: "Controls", y: 128 },
          { label: "Meters", y: 184 },
          { label: "Workflows", y: 240 },
        ].map((item) => (
          <g key={item.label}>
            <rect x="56" y={item.y} width="132" height="36" rx="18" fill="rgba(255,255,255,0.55)" stroke="var(--line)" />
            <text x="82" y={item.y + 23} className="fill-[color:var(--text)] text-[12px] uppercase tracking-[3px]">
              {item.label}
            </text>
          </g>
        ))}
        {[
          { label: "Cost", y: 72 },
          { label: "Risk", y: 128 },
          { label: "Value", y: 184 },
        ].map((item) => (
          <g key={item.label}>
            <rect x="372" y={item.y} width="132" height="36" rx="18" fill="rgba(255,255,255,0.55)" stroke="var(--line)" />
            <text x="408" y={item.y + 23} className="fill-[color:var(--text)] text-[12px] uppercase tracking-[3px]">
              {item.label}
            </text>
          </g>
        ))}
        <rect
          x="214"
          y="86"
          width="132"
          height="156"
          rx="20"
          fill="rgba(125,136,131,0.08)"
          stroke="var(--accent)"
          strokeDasharray="6 8"
        />
        <text x="242" y="150" className="fill-[color:var(--text)] text-[12px] uppercase tracking-[3px]">
          No common
        </text>
        <text x="238" y="172" className="fill-[color:var(--text)] text-[12px] uppercase tracking-[3px]">
          intelligence
        </text>
        <text x="256" y="194" className="fill-[color:var(--text)] text-[12px] uppercase tracking-[3px]">
          layer
        </text>

        {[90, 146, 202, 258].map((y) => (
          <path
            key={`left-${y}`}
            d={`M188 ${y} C210 ${y}, 220 ${y - 18}, 232 ${y - 8}`}
            fill="none"
            stroke="var(--line-strong)"
            className="diagram-trace"
          />
        ))}
        {[90, 146, 202].map((y) => (
          <path
            key={`right-${y}`}
            d={`M346 ${y} C360 ${y}, 364 ${y}, 372 ${y}`}
            fill="none"
            stroke="var(--line-strong)"
          />
        ))}
      </svg>
    </div>
  );
}

export function TimelineDiagram({ className = "" }: DiagramProps) {
  const labels = [
    "Legacy systems",
    "Fragmented data",
    "Custom deployment",
    "New intelligence layer",
    "Broader access",
  ];

  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 560 260"
        role="img"
        aria-label="Timeline showing the shift toward broader access to building intelligence"
        className="h-full w-full"
      >
        <rect x="24" y="24" width="512" height="212" rx="22" fill="none" stroke="var(--line)" />
        <line x1="68" x2="492" y1="128" y2="128" stroke="var(--line-strong)" />
        {labels.map((label, index) => {
          const x = 76 + index * 104;

          return (
            <g key={label}>
              <circle
                cx={x}
                cy="128"
                r={index === labels.length - 1 ? 10 : 7}
                fill={index >= 3 ? "var(--accent)" : "rgba(17,17,17,0.24)"}
                className={index >= 3 ? "diagram-pulse" : ""}
              />
              <text
                x={x - 40}
                y={index % 2 === 0 ? 98 : 170}
                className="fill-[color:var(--text)] text-[12px] uppercase tracking-[3px]"
              >
                {label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function LayerDiagram({ className = "" }: DiagramProps) {
  const layers = [
    { y: 70, title: "Observe", body: "Signals become legible." },
    { y: 164, title: "Interpret", body: "Systems relate to space." },
    { y: 258, title: "Translate", body: "Operations connect to economics." },
  ];

  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 560 420"
        role="img"
        aria-label="Three-layer diagram showing observe, interpret, and translate"
        className="h-full w-full"
      >
        <rect x="24" y="24" width="512" height="372" rx="22" fill="none" stroke="var(--line)" />
        <line x1="146" x2="146" y1="56" y2="350" stroke="var(--line-strong)" />
        {[110, 204, 298].map((y) => (
          <line key={y} x1="146" x2="202" y1={y} y2={y} stroke="var(--line-strong)" />
        ))}
        {layers.map((layer) => (
          <g key={layer.title}>
            <circle cx="146" cy={layer.y + 40} r="5" fill="var(--accent)" className="diagram-pulse" />
            <rect
              x="202"
              y={layer.y}
              width="284"
              height="80"
              rx="20"
              fill="rgba(255,255,255,0.62)"
              stroke="var(--line)"
            />
            <text x="228" y={layer.y + 32} className="fill-[color:var(--text)] text-[14px] uppercase tracking-[3px]">
              {layer.title}
            </text>
            <text x="228" y={layer.y + 56} className="fill-[color:var(--muted)] text-[13px]">
              {layer.body}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function FieldDiagram({ className = "" }: DiagramProps) {
  return (
    <div className={`${frameClass} ${className}`.trim()}>
      <svg
        viewBox="0 0 520 320"
        role="img"
        aria-label="Abstract field diagram"
        className="h-full w-full"
      >
        <rect x="20" y="20" width="480" height="280" rx="20" fill="none" stroke="var(--line)" />
        {[80, 140, 200, 260, 320, 380, 440].map((x) => (
          <line key={`v-${x}`} x1={x} x2={x} y1="40" y2="280" stroke="var(--line)" />
        ))}
        {[80, 130, 180, 230].map((y) => (
          <line key={`h-${y}`} x1="40" x2="480" y1={y} y2={y} stroke="var(--line)" />
        ))}
        <rect x="186" y="92" width="148" height="136" fill="rgba(125,136,131,0.12)" stroke="var(--accent)" />
        <path
          d="M92 96 H190 V160 H260"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
        <path
          d="M424 118 H334 V184 H260"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
        <path
          d="M108 232 H216 V196"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
        <path
          d="M412 236 H304 V196"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
          className="diagram-trace"
        />
      </svg>
    </div>
  );
}
