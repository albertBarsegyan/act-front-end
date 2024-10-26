interface IconProps {
  style?: React.CSSProperties;
  className?: string;
}

export function RightIcon({ style, className }: Readonly<IconProps>) {
  return (
    <svg
      style={style}
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00016 4.07992L15.5202 10.5999C16.2902 11.3699 16.2902 12.6299 15.5202 13.3999L9.00016 19.9199"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeftIcon() {
  return <RightIcon style={{ rotate: '-180deg' }} />;
}
