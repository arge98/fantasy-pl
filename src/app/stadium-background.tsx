import Image from "next/image";

export default function StadiumBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <svg
        viewBox="0 0 1600 1000"
        preserveAspectRatio="xMidYMax slice"
        className="h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a0f24" />
            <stop offset="70%" stopColor="#0d1330" />
            <stop offset="100%" stopColor="#12193f" />
          </linearGradient>
          <radialGradient id="floodlightGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e8c976" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#e8c976" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="pitch" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16321f" />
            <stop offset="100%" stopColor="#0e2216" />
          </linearGradient>
          <clipPath id="pitchClip">
            <polygon points="560,650 1040,650 1620,1000 -20,1000" />
          </clipPath>
          <clipPath id="bowlClip">
            <path d="M -100 760 Q 800 420 1700 760 L 1700 1000 L -100 1000 Z" />
          </clipPath>
        </defs>

        <rect x="0" y="0" width="1600" height="1000" fill="url(#sky)" />

        {/* floodlight glows */}
        <circle cx="120" cy="70" r="300" fill="url(#floodlightGlow)" />
        <circle cx="1480" cy="70" r="300" fill="url(#floodlightGlow)" />

        {/* crowd texture inside the bowl */}
        <g clipPath="url(#bowlClip)" fill="#e8c976" fillOpacity="0.06">
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 40 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={col * 42 + (row % 2 === 0 ? 0 : 21)}
                cy={440 + row * 26}
                r="6"
              />
            )),
          )}
        </g>

        {/* stadium bowl silhouette (two tiers) */}
        <path
          d="M -100 800 Q 800 460 1700 800 L 1700 900 Q 800 600 -100 900 Z"
          fill="#101b3f"
          fillOpacity="0.92"
        />
        <path
          d="M -100 900 Q 800 620 1700 900 L 1700 1000 L -100 1000 Z"
          fill="#0a0f24"
        />
        {/* roof line */}
        <path
          d="M -100 780 Q 800 440 1700 780"
          fill="none"
          stroke="#cba14f"
          strokeOpacity="0.3"
          strokeWidth="4"
        />

        {/* floodlight towers */}
        <g stroke="#cba14f" strokeOpacity="0.4" strokeWidth="3">
          <line x1="120" y1="70" x2="120" y2="560" />
          <line x1="1480" y1="70" x2="1480" y2="560" />
        </g>
        <g fill="#cba14f" fillOpacity="0.6">
          <rect x="55" y="25" width="130" height="12" rx="3" />
          <rect x="55" y="43" width="130" height="12" rx="3" />
          <rect x="55" y="61" width="130" height="12" rx="3" />
          <rect x="1415" y="25" width="130" height="12" rx="3" />
          <rect x="1415" y="43" width="130" height="12" rx="3" />
          <rect x="1415" y="61" width="130" height="12" rx="3" />
        </g>

        {/* pitch */}
        <polygon
          points="560,650 1040,650 1620,1000 -20,1000"
          fill="url(#pitch)"
        />
        <g clipPath="url(#pitchClip)" fill="#0a2013" fillOpacity="0.5">
          <rect x="0" y="600" width="90" height="450" />
          <rect x="180" y="600" width="90" height="450" />
          <rect x="360" y="600" width="90" height="450" />
          <rect x="540" y="600" width="90" height="450" />
          <rect x="720" y="600" width="90" height="450" />
          <rect x="900" y="600" width="90" height="450" />
          <rect x="1080" y="600" width="90" height="450" />
          <rect x="1260" y="600" width="90" height="450" />
          <rect x="1440" y="600" width="90" height="450" />
        </g>

        {/* pitch markings */}
        <g stroke="#f5ecd8" strokeOpacity="0.22" strokeWidth="2.5" fill="none">
          <line x1="70" y1="900" x2="1530" y2="900" />
          <circle cx="800" cy="900" r="150" />
          <circle cx="800" cy="900" r="4" fill="#f5ecd8" fillOpacity="0.3" />
          <path d="M 620 1000 Q 800 850 980 1000" />
        </g>
      </svg>

      {/* league crest watermark, centered on the pitch */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center">
        <Image
          src="/league-logo.jpg"
          alt=""
          width={224}
          height={224}
          className="mb-6 h-40 w-40 rounded-full opacity-[0.09] mix-blend-screen sm:h-56 sm:w-56"
        />
      </div>
    </div>
  );
}
