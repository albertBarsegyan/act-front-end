'use client';
import { usePathname } from 'next/navigation';

export default function Page() {
  const pathname = usePathname();

  console.log('pathname', pathname);

  return <div>miki page</div>;
}
