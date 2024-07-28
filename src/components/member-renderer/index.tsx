import { ImageLoader } from '@/components/image-loader';
import { Member } from '@/components/member-renderer/type';

import styles from './styles.module.css';

interface MemberRendererProps {
  data: Member;
}

export function MemberRenderer({ data }: Readonly<MemberRendererProps>) {
  const { name, position, img, description } = data;

  return (
    <div className={styles.memberWrapper}>
      <div>
        <ImageLoader className={styles.memberImage} src={img} alt={name} />
      </div>

      <div className={styles.contentWrapper}>
        <span className={styles.name}>{name}</span>
        <span className={styles.position}>{position}</span>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

interface MemberListRendererProps {
  list: Member[];
}

export const MemberListRenderer = ({ list }: Readonly<MemberListRendererProps>) => {
  return (
    <div className={styles.memberListWrapper}>
      {list.map((data) => (
        <MemberRenderer key={data.id} data={data} />
      ))}
    </div>
  );
};
