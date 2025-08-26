import type { SVGProps } from 'react';

export function KinLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#4D4F66" d="M0 0h120v120H0z" />
      <g>
        <path fill="#23429F" d="M10 20h45v35H10z" />
        <path fill="#23429F" d="M65 20h45v70H65z" />
        <path fill="#23429F" d="M10 65h45v25H10z" />
        <path
          d="M58.5 53.5l-3-3m-3-3l-3-3m-2-2l-3-3m-3-3l-3-3m-3-3l-3-3M10 20l50 50"
          stroke="#E63946"
          strokeWidth="3"
        />
      </g>
      <path fill="#E63946" d="M10 90h100v20H10z" />
      <text
        x="60"
        y="105"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontFamily="League Spartan, sans-serif"
        fontSize="14"
        fill="#23429F"
        fontWeight="bold"
      >
        KIN Protocol
      </text>
    </svg>
  );
}
