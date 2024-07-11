import { IconsType } from '@/types/icons-type';

export function MenuIcon({ color = 'currentColor', size = 24, className }: IconsType) {
  return (
    <svg viewBox="0 0 12 10" className={className} height={size} width={size}>
      <path stroke={color} strokeLinecap="round" d="M10,2 L2,2" className="bar-1"></path>
      <path stroke={color} strokeLinecap="round" d="M2,5 L10,5" className="bar-2"></path>
      <path stroke={color} strokeLinecap="round" d="M10,8 L2,8" className="bar-3"></path>
    </svg>
  );
}
