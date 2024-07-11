import { PropsWithChildren } from 'react';

export function SectionLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full px-5 md:flex md:justify-center md:px-20 md:pb-6">
      <div className="w-full md:max-w-[1320px]">{children}</div>
    </div>
  );
}
