import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { PersonInfo } from '@/components/page-parts/about/person-info';

import styles from './styles.module.css';

const { id, image } = {
  id: 'college-director',
  image: '/static/img/about-us/members/board-member.jpeg',
};

export function DirectorSection() {
  const translation = useTranslations('about');

  const directorInfo = {
    id,
    image,
    name: translation(`${id}.name`),
    position: translation(`${id}.position`),
    description: translation(`${id}.description`),
  };

  return (
    <div className={styles.directorSectionWrapper}>
      <HeaderText className={styles.sectionHeader} color="black">
        {translation('director-header')}
      </HeaderText>

      <PersonInfo className={styles.collegeDirector} data={directorInfo} />
    </div>
  );
}
