import { ReactNode } from 'react';

interface InfoWithDescProps {
  data: {
    header: string;
    icon: ReactNode;
    description: string;
  };
}

export function InfoWithDesc({ data: { icon, header, description } }: InfoWithDescProps) {
  return (
    <div className="flex items-center justify-center gap-x-8">
      <div>{icon}</div>
      <div className="flex flex-col gap-y-1">
        <span className="text-3xl font-bold not-italic text-blue-dark-1">{header}</span>
        <p className="line-clamp-2 text-lg font-normal not-italic text-blue-dark-2">{description}</p>
      </div>
    </div>
  );
}
