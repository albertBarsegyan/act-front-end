import { Card } from '@/components/common/card/card';

const BestPoints = [
  {
    id: 0,
    title: 'SIMULATION',
    description:
      'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing',
  },
  {
    id: 1,
    title: 'TESTING 2',
    description:
      'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing',
  },
  {
    id: 2,
    title: 'TESTING 3',
    description:
      'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing',
  },
  {
    id: 3,
    title: 'TESTING 4',
    description:
      'Vitae sapien pellentesque habitant morbi\n' +
      'nunc. Viverra aliquet  porttitor rhoncus \n' +
      'libero justo laoreet sit amet vitae.',
    imageSrc: '/img/background/card-example.png',
    imageAlt: 'testing',
  },
];

export function ReasonSection() {
  return (
    <div className="mt-6">
      <div id="services" className="flex flex-col justify-between gap-x-2 md:flex-row">
        <h3 className="flex-shrink-0 text-2xl font-bold">Why work with Yacko</h3>
        <p className="mt-4 max-w-3xl md:mt-0">
          Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin
          gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget
          sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 justify-items-center gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {BestPoints.map(({ id, ...data }) => (
          <Card key={id} data={data} />
        ))}
      </div>
    </div>
  );
}
