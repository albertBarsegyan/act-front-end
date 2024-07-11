import { ReactNode } from 'react';

interface InformationBlockProps {
  icon: ReactNode;
  text: string;
}

export function InformationBlock({ icon, text }: InformationBlockProps) {
  return (
    <div className="relative">
      <div className="left absolute left-1 top-1 z-0 h-20 w-full border-2 border-solid border-white bg-white"></div>
      <div className="relative flex h-20 items-center justify-center gap-5 border-2 border-solid border-white bg-[#252635] px-3.5">
        <div>{icon}</div>
        {Boolean(text) && <span className="text-base font-bold not-italic">{text}</span>}
      </div>
    </div>
  );
}
