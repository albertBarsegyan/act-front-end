import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { PersonInfo } from '@/components/page-parts/about/person-info';

import styles from './styles.module.css';

const honoraryBoardMembers = [
  {
    id: 'honorary-member-1',
    image: '/static/img/about-us/members/honoraryboard2.jpg',
  },
  {
    id: 'honorary-member-2',
    image: '/static/img/about-us/members/honoraryboard1.jpg',
  },
];

export function HonoraryBoard() {
  const translation = useTranslations('about');

  const members = honoraryBoardMembers.map(({ id, image }) => {
    return {
      id,
      image,
      name: translation(`${id}.name`),
      description: translation(`${id}.description`),
      role: translation('honorary-header'),
    };
  });

  return (
    <div>
      <div className={styles.membersWrapper}>
        {members.map((member) => {
          return <PersonInfo data={member} key={member.id} />;
        })}
      </div>
    </div>
  );
}
