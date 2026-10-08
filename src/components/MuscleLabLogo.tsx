import React from 'react';

interface MuscleLabLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'markOnly';
  showText?: boolean;
}

export const MuscleLabLogo: React.FC<MuscleLabLogoProps> = ({
  className = 'h-10 w-auto',
  variant = 'horizontal',
  showText = true,
}) => {
  // Mark-only variant (Upright ML with blue border & floating dot)
  if (variant === 'markOnly' || !showText) {
    return (
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} shrink-0 select-none`}
        aria-label="머슬랩 ML 심볼"
      >
        <g id="ml-mark">
          {/* M - Upright Athletic Block with Electric Blue Border */}
          <path
            d="M 12 88 L 12 14 L 30 14 L 50 52 L 70 14 L 88 14 L 88 88 L 70 88 L 70 42 L 50 80 L 30 42 L 30 88 Z"
            fill="#0F172A"
            stroke="#1D63FF"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* L - Upright Stem & Base with Electric Blue Border */}
          <path
            d="M 98 14 L 116 14 L 116 70 L 148 70 L 148 88 L 98 88 Z"
            fill="#0F172A"
            stroke="#1D63FF"
            strokeWidth="4"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Floating Blue Dot (Matching Hero Section Signage) */}
          <circle
            cx="136"
            cy="32"
            r="10"
            fill="#1D63FF"
            stroke="#3B82F6"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    );
  }

  // Horizontal Variant (Mark + Wordmark side by side)
  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className} select-none`}>
        {/* Monogram Mark */}
        <svg
          viewBox="0 0 160 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto shrink-0"
          aria-label="머슬랩 ML 심볼"
        >
          <g id="ml-mark">
            <path
              d="M 12 88 L 12 14 L 30 14 L 50 52 L 70 14 L 88 14 L 88 88 L 70 88 L 70 42 L 50 80 L 30 42 L 30 88 Z"
              fill="#0F172A"
              stroke="#1D63FF"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M 98 14 L 116 14 L 116 70 L 148 70 L 148 88 L 98 88 Z"
              fill="#0F172A"
              stroke="#1D63FF"
              strokeWidth="4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <circle
              cx="136"
              cy="32"
              r="10"
              fill="#1D63FF"
              stroke="#3B82F6"
              strokeWidth="1.5"
            />
          </g>
        </svg>

        {/* Wordmark */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center text-xl sm:text-2xl font-black tracking-wider leading-none">
            <span className="text-slate-900">MUSCLE</span>
            <span className="text-[#1D63FF] ml-1.5">LAB</span>
          </div>
          <span className="text-[9px] font-bold tracking-widest text-slate-400 uppercase mt-0.5">
            PREMIUM FITNESS CLUB
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Variant (Exact replica of the Hero Section Signage Logo)
  return (
    <div className={`inline-flex flex-col items-center justify-center ${className} select-none group`}>
      <svg
        viewBox="0 0 280 156"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full shrink-0"
        aria-label="머슬랩 (MUSCLE LAB) 공식 로고"
      >
        {/* ML Monogram Symbol matching Hero Section Wall Sign */}
        <g id="ml-mark">
          {/* M - Upright Athletic Block with Electric Blue Border */}
          <path
            d="M 68 88 L 68 16 L 86 16 L 106 54 L 126 16 L 144 16 L 144 88 L 126 88 L 126 42 L 106 80 L 86 42 L 86 88 Z"
            fill="#0F172A"
            stroke="#1D63FF"
            strokeWidth="4.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* L - Upright Stem & Base with Electric Blue Border */}
          <path
            d="M 154 16 L 172 16 L 172 70 L 206 70 L 206 88 L 154 88 Z"
            fill="#0F172A"
            stroke="#1D63FF"
            strokeWidth="4.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Floating Blue Dot (Hero Section Signature Feature) */}
          <circle
            cx="192"
            cy="34"
            r="10.5"
            fill="#1D63FF"
            stroke="#3B82F6"
            strokeWidth="1.5"
          />
        </g>

        {/* Wordmark: MUSCLE LAB */}
        <g id="muscle-lab-typography">
          {/* MUSCLE - Deep Slate */}
          <text
            x="66"
            y="126"
            fill="#0F172A"
            fontFamily="'Pretendard', -apple-system, BlinkMacSystemFont, 'Montserrat', system-ui, sans-serif"
            fontSize="26"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            MUSCLE
          </text>

          {/* LAB - Electric Royal Blue */}
          <text
            x="186"
            y="126"
            fill="#1D63FF"
            fontFamily="'Pretendard', -apple-system, BlinkMacSystemFont, 'Montserrat', system-ui, sans-serif"
            fontSize="26"
            fontWeight="900"
            letterSpacing="0.08em"
          >
            LAB
          </text>

          {/* Subtitle */}
          <text
            x="140"
            y="146"
            textAnchor="middle"
            fill="#64748B"
            fontFamily="'Pretendard', -apple-system, BlinkMacSystemFont, 'Montserrat', system-ui, sans-serif"
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="0.24em"
          >
            PREMIUM FITNESS CLUB
          </text>
        </g>
      </svg>
    </div>
  );
};
