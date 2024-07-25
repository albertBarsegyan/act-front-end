'use client';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { LinkButton } from '@/components/common/button/link';
import { ActLogo } from '@/components/icons/act-logo';
import { TargetIcon } from '@/components/icons/contact-icon';
import { MailIcon } from '@/components/icons/mail-icon';
import { PhoneIcon } from '@/components/icons/phone-icon';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { SocialMedia } from '@/components/social-media';
import { ContactInformation } from '@/constants/information.constants';
import { getIsActive, routePath } from '@/utils/route';

import styles from './styles.module.css';

export function ContactDetails() {
  return (
    <div>
      <div className={styles.contactInfoItem}>
        <div className={styles.iconShape}>
          <PhoneIcon />
        </div>
        <span>{ContactInformation.phone}</span>
      </div>
      <div className={styles.contactInfoItem}>
        <div className={styles.iconShape}>
          <MailIcon />
        </div>
        <span>{ContactInformation.email}</span>
      </div>
      <div className={styles.contactInfoItem}>
        <div className={styles.iconShape}>
          <TargetIcon />
        </div>
        <span>{ContactInformation.place1}</span>
      </div>
      <div className={styles.contactInfoItem}>
        <div className={styles.iconShape}>
          <TargetIcon />
        </div>
        <span>{ContactInformation.place2}</span>
      </div>
    </div>
  );
}

export function Footer() {
  const t = useTranslations('common');
  const pathname = usePathname();
  const { locale } = useParams<{ locale: string }>();

  return (
    <div className={styles.bgWrapper}>
      <SectionLayout>
        <div className={styles.footerWrapper}>
          <div>
            <Link href={routePath.getHome()}>
              <ActLogo />
            </Link>

            <SocialMedia />

            <div>
              <p className={styles.copyRight}>{t('copyright-text', { year: new Date().getFullYear() })}</p>
            </div>
          </div>

          <div className={styles.linkContainer}>
            <div className={styles.linkWrapper}>
              <Link href={routePath.getHome()}>
                <LinkButton
                  isActive={getIsActive({
                    pathname,
                    locale,
                    path: routePath.getHome(),
                  })}
                >
                  {t('routes.home')}
                </LinkButton>
              </Link>

              <Link href={routePath.getStudentPortal()}>
                <LinkButton
                  isActive={getIsActive({
                    pathname,
                    locale,
                    path: routePath.getStudentPortal(),
                  })}
                >
                  {t('routes.studentPortal')}
                </LinkButton>
              </Link>

              <Link href={routePath.getAdmission()}>
                <LinkButton
                  isActive={getIsActive({
                    pathname,
                    locale,
                    path: routePath.getAdmission(),
                  })}
                >
                  {t('routes.admission')}
                </LinkButton>
              </Link>
            </div>

            <div className={styles.linkWrapper}>
              <Link href={routePath.getAboutUs()}>
                <LinkButton
                  isActive={getIsActive({
                    pathname,
                    locale,
                    path: routePath.getAboutUs(),
                  })}
                >
                  {t('routes.aboutUs')}
                </LinkButton>
              </Link>

              <Link href={routePath.getContactUs()}>
                <LinkButton
                  isActive={getIsActive({
                    pathname,
                    locale,
                    path: routePath.getContactUs(),
                  })}
                >
                  {t('routes.contactUs')}
                </LinkButton>
              </Link>

              <Link href={routePath.getStore()}>
                <LinkButton
                  isActive={getIsActive({
                    pathname,
                    locale,
                    path: routePath.getStore(),
                  })}
                >
                  {t('routes.store')}
                </LinkButton>
              </Link>
            </div>
          </div>

          <div>
            <p className={styles.contactTitle}>{t('routes.contactUs')}</p>
            <ContactDetails />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
