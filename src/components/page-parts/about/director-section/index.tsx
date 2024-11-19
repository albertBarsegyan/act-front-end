import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { PersonInfo } from '@/components/page-parts/about/person-info';

import styles from './styles.module.css';

const { id, image } = {
  id: 'college-director',
  image: '/static/img/about-us/members/director.jpg',
};

export function DirectorSection() {
  const translation = useTranslations('about');

  const directorInfo = {
    id,
    image,
    name: translation(`${id}.name`),
    position: translation(`${id}.position`),
    description: translation(`${id}.description`),
    role: translation('director-header'),
  };

  return (
    <div className={styles.directorSectionWrapper}>

      <PersonInfo className={styles.collegeDirector} data={directorInfo} />
    </div>
  );
}
