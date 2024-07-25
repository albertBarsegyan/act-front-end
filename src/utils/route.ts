export const routePath = {
  getHome: () => '/',
  getStudentPortal: () => '/student-portal',
  getAdmission: () => '/admission',
  getAcademic: () => '/academic',
  getAboutUs: () => '/about-us',
  getContactUs: () => '/contact-us',
  getStore: () => '/store',
};

export const getIsActive = ({ pathname, path, locale }: { pathname: string; path: string; locale: string }) => {
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  if (pathnameWithoutLocale === '' && path === '/') {
    return true;
  }

  return pathnameWithoutLocale === path;
};
