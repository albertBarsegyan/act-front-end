import classNames from 'classnames';

import { ImageLoader } from '@/components/image-loader';

import styles from './styles.module.css';

interface PersonInfoProps {
  data: {
    id: string;
    name: string;
    description: string;
    position: string;
    image: string;
  };
  className?: string;
}

export function PersonInfo({ className, data: { name, description, position, image } }: Readonly<PersonInfoProps>) {
  return (
    <div className={classNames(styles.wrapper, className)}>
      <div className={styles.imageWrapper}>
        <ImageLoader className={styles.image} src={image} alt={name} />
      </div>
      <div className={styles.textWrapper}>
        <h3 className={styles.header}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
