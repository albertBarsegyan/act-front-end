export function FolderIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={76} height={76} fill="none">
      <rect width={76} height={76} fill="#F8B3B8" rx={16} />
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="m51.333 35.334-8-8h-16A2.675 2.675 0 0 0 24.667 30v16.014c0 1.466 1.2 2.653 2.666 2.653l21.334-.014A2.663 2.663 0 0 0 51.333 46V35.334Zm-9.333-6 7.333 7.333H42v-7.334Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M22 22h32v32H22z" />
        </clipPath>
      </defs>
    </svg>
  );
}
