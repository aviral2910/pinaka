export default function Logo({ className = "w-64 h-auto" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 800 250" 
      className={className}
      fill="none"
    >
      <defs>
        {/* Gradients to match the metallic/3D look from the image */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2D7B93" />
          <stop offset="100%" stopColor="#1E527D" />
        </linearGradient>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B39250" />
          <stop offset="50%" stopColor="#E3CFA1" />
          <stop offset="100%" stopColor="#A8813C" />
        </linearGradient>
        <linearGradient id="lightGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
      </defs>

      {/* --- LEFT LOGO MARK (The stylized 'P') --- */}
      <g transform="translate(10, 40) scale(1.2)">
        {/* Main diagonal arrow line */}
        <path 
          d="M 20 120 L 80 40 L 95 40 L 105 20 L 70 30 L 85 40 L 30 115 Z" 
          fill="url(#blueGradient)" 
        />
        {/* The 'P' loop shape */}
        <path 
          d="M 60 70 C 90 40, 120 70, 95 105 C 80 125, 50 110, 60 90 L 50 100 C 40 130, 80 140, 110 110 C 130 80, 100 40, 70 60 Z" 
          fill="url(#blueGradient)" 
        />
        <path 
          d="M 10 90 L 30 70 L 45 70 L 55 50 L 20 60 L 35 70 L 20 85 Z" 
          fill="url(#blueGradient)" 
        />
        {/* Stand part */}
        <rect x="50" y="110" width="15" height="30" fill="url(#blueGradient)" />
      </g>

      {/* --- RIGHT TEXT & BOW --- */}
      <g transform="translate(230, 0)">
        
        {/* The Horizontal Arrow */}
        <path 
          d="M 30 105 L 340 105 L 340 100 L 360 107.5 L 340 115 L 340 110 L 30 110 Z" 
          fill="url(#goldGradient)" 
        />
        {/* Tail feathers */}
        <path d="M 0 100 L 30 100 L 20 107.5 L 30 115 L 0 115 L 10 107.5 Z" fill="url(#goldGradient)" />
        
        {/* The Bow */}
        <path 
          d="M 170 107.5 C 190 70, 200 40, 170 30 C 185 45, 180 80, 165 107.5 C 180 135, 185 170, 170 185 C 200 175, 190 145, 170 107.5 Z" 
          fill="url(#goldGradient)" 
        />
        {/* Bow string (vertical line) */}
        <line x1="170" y1="35" x2="170" y2="180" stroke="url(#goldGradient)" strokeWidth="3" />
        <circle cx="170" cy="30" r="4" fill="url(#goldGradient)" />
        <circle cx="170" cy="185" r="4" fill="url(#goldGradient)" />

        {/* Text: PINAKA ADVISORY LLP */}
        <text 
          x="0" 
          y="150" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="900" 
          fontSize="48" 
          letterSpacing="-1"
        >
          <tspan fill="url(#lightGradient)">PINAKA </tspan>
          <tspan fill="url(#blueGradient)">ADVISORY LLP</tspan>
        </text>

        {/* Subtext: YOUR STRATEGIC CONSULTING PARTNER */}
        <text 
          x="2" 
          y="180" 
          fontFamily="system-ui, -apple-system, sans-serif" 
          fontWeight="700" 
          fontSize="20" 
          fill="#94a3b8"
          letterSpacing="0.5"
        >
          YOUR STRATEGIC CONSULTING PARTNER
        </text>
      </g>
    </svg>
  );
}
