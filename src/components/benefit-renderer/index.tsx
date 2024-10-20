import { ImageLoader } from '@/components/image-loader';

import styles from './styles.module.css';

interface BenefitRendererProps {
  data: {
    title: string;
    img: string;
  };
}

export function BenefitRenderer({ data }: Readonly<BenefitRendererProps>) {
  return (
    <div className={styles.benefitRenderer}>
      <div className={styles.imageWrapper}>
        <ImageLoader src={data.img} alt={data.title} />
      </div>
      <div>
        <p className={styles.title}>{data.title}</p>
      </div>
    </div>
  );
}
