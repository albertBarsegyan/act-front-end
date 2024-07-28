import React from 'react';

import { ImageLoader } from '@/components/image-loader';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

const PartnersList: { imageName: string; id: number }[] = [
  { imageName: 'aef.png', id: 0 },
  { imageName: 'bta.png', id: 1 },
  { imageName: 'embassyEmirates.png', id: 2 },
  { imageName: 'evrasia.png', id: 3 },
  { imageName: 'far.png', id: 4 },
  { imageName: 'giz.png', id: 5 },
  { imageName: 'hsbc.png', id: 6 },
  { imageName: 'pluralsight.png', id: 7 },
  { imageName: 'soc.png', id: 8 },
  { imageName: 'zayed.png', id: 9 },
];

const PartnersLoopData = [...PartnersList, ...PartnersList.map((data) => ({ ...data, id: data.id + 100 }))];

export function Partners() {
  return (
    <div className={styles.sectionWrapper}>
      <SectionLayout>
        <div className={styles.wrapper}>
          <div className={styles.partnersWrapper} data-partners={PartnersList.length}>
            {PartnersLoopData.map(({ imageName, id }) => {
              return (
                <div className={styles.partnerItem} key={id}>
                  <ImageLoader height={160} width={288} src={`/static/img/partners/${imageName}`} alt={String(id)} />
                </div>
              );
            })}
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
