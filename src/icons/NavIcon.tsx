type INavIcon = {
  className?: string;
  color?: string;
};

export default function NavIcon({ color, className }: INavIcon) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color}
        className={className}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
