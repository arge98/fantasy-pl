export default function StadiumBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="floodlightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8c976" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#e8c976" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="pitchGlow" cx="50%" cy="100%" r="70%">
            <stop offset="0%" stopColor="#182252" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#182252" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="140" cy="90" r="280" fill="url(#floodlightGlow)" />
        <circle cx="1460" cy="90" r="280" fill="url(#floodlightGlow)" />
        <ellipse cx="800" cy="900" rx="900" ry="260" fill="url(#pitchGlow)" />

        <g stroke="#cba14f" strokeOpacity="0.35" strokeWidth="3">
          <line x1="140" y1="90" x2="140" y2="640" />
          <line x1="1460" y1="90" x2="1460" y2="640" />
        </g>
        <g fill="#cba14f" fillOpacity="0.55">
          <rect x="80" y="45" width="120" height="14" rx="3" />
          <rect x="80" y="65" width="120" height="14" rx="3" />
          <rect x="1400" y="45" width="120" height="14" rx="3" />
          <rect x="1400" y="65" width="120" height="14" rx="3" />
        </g>

        <g fill="none" stroke="#101b3f" strokeOpacity="0.85">
          <path d="M -100 940 Q 800 560 1700 940" strokeWidth="150" />
        </g>
        <g fill="none" stroke="#0a0f24" strokeOpacity="0.9">
          <path d="M -100 1000 Q 800 660 1700 1000" strokeWidth="180" />
        </g>

        <g stroke="#cba14f" strokeOpacity="0.14" strokeWidth="2" fill="none">
          <circle cx="800" cy="960" r="230" />
          <line x1="800" y1="730" x2="800" y2="1000" />
        </g>
      </svg>
    </div>
  );
}
