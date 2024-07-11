import Image from 'next/image';

interface CardProps {
  imageWidth?: number;
  data: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
  };
}

export function Card({ data, imageWidth }: CardProps) {
  return (
    <div className="bg-secondary flex flex-col justify-center rounded-3xl p-5 py-10">
      <div className="relative mx-auto h-48 w-full max-w-48">
        <Image
          className="left-0 top-0 h-full w-full rounded-full object-cover"
          fill
          width={imageWidth}
          src={data.imageSrc}
          alt={data.imageAlt}
        />
      </div>

      <div className="mt-4 flex flex-col items-center justify-center">
        <p className="w-fit text-center">{data.title}</p>

        <p className="mt-5 text-xs">{data.description}</p>
      </div>
    </div>
  );
}
