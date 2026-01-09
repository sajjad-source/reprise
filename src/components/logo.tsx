import Link from "next/link";

interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = "/", className = "" }: LogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${className}`}
    >
      {/* Logo icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-foreground"
      >
        {/* Play/repeat symbol - represents content repurposing */}
        <path
          d="M5 12V7C5 5.89543 5.89543 5 7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M9 9L12 12L9 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 19L5 22L8 19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 22V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      {/* Logo text */}
      <span className="text-lg font-semibold tracking-tight">Reprise</span>
    </Link>
  );
}
