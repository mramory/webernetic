export function ArrowIcon({className}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="44"
      fill="none"
      viewBox="0 0 44 44"
      className={className}
    >
      <rect width="44" height="44" fill="#fff" rx="22"></rect>
      <rect width="36" height="36" x="4" y="4" fill="#fff" rx="18"></rect>
      <path
        stroke="#1F4284"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 17h10v10M17 27l10-10"
      ></path>
    </svg>
  );
}
