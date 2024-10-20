import React, { ReactNode } from 'react';

import { AdobeIcon } from '@/components/icons/partners/adobe-icon';
import { DigitainIcon } from '@/components/icons/partners/digitain-icon';
import { PicsartIcon } from '@/components/icons/partners/picsart-icon';
import { TeamViewer } from '@/components/icons/partners/team-viewer-icon';
import { UcraftIcon } from '@/components/icons/partners/ucraft-icon';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

const PartnersList: { icon: ReactNode; id: number }[] = [
  { icon: <UcraftIcon />, id: 0 },
  { icon: <AdobeIcon />, id: 1 },
  { icon: <DigitainIcon />, id: 2 },
  { icon: <PicsartIcon />, id: 3 },
  { icon: <TeamViewer />, id: 4 },
];

const PartnersLoopData = [...PartnersList, ...PartnersList.map((data) => ({ ...data, id: data.id + 100 }))];

export function Partners() {
  return (
    <div className={styles.sectionWrapper}>
      <SectionLayout>
        <div className={styles.wrapper}>
          <div className={styles.partnersWrapper}>
            {PartnersLoopData.map(({ icon, id }) => {
              return (
                <div className={styles.partnerItem} key={id}>
                  {icon}
                </div>
              );
            })}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
