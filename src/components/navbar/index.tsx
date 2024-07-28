'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LinkButton } from '@/components/common/button/link';
import { PrimaryButton } from '@/components/common/button/primary';
import { ActLogo } from '@/components/icons/act-logo';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { Menu } from '@/components/menu';
import { getIsActive, routePath } from '@/utils/route';

import styles from './styles.module.css';

const NavbarNavigations = [
  { nameId: 'home', path: routePath.getHome() },
  { nameId: 'admission', path: routePath.getAdmission() },
  { nameId: 'studentPortal', path: routePath.getStudentPortal() },
  { nameId: 'academic', path: routePath.getAcademic() },
  { nameId: 'aboutUs', path: routePath.getAboutUs() },
  { nameId: 'contactUs', path: routePath.getContactUs() },
  { nameId: 'store', path: routePath.getStore() },
];

export function Navbar() {
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();
  const t = useTranslations('common');

  return (
    <div className={styles.bgWrapper}>
      <SectionLayout>
        <div className={styles.wrapper}>
          <Link href={routePath.getHome()}>
            <ActLogo />
          </Link>

          <Menu>
            {({ toggleMenu }) => {
              return (
                <div className={styles.menuWrapper}>
                  <div className={styles.linksWrapper}>
                    {NavbarNavigations.map((navigation) => (
                      <Link className={styles.linkItem} key={navigation.nameId} href={navigation.path}>
                        <LinkButton
                          onClick={toggleMenu}
                          data-text={t(`routes.${navigation.nameId}`)}
                          isActive={getIsActive({ pathname, locale, path: navigation.path })}
                        >
                          {t(`routes.${navigation.nameId}`)}
                        </LinkButton>
                      </Link>
                    ))}
                  </div>

                  <div className={styles.buttonsWrapper}>
                    <PrimaryButton>{t('apply-button-text')}</PrimaryButton>
                  </div>
                </div>
              );
            }}
          </Menu>
        </div>
      </SectionLayout>
    </div>
  );
}
