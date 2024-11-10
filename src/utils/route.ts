export const routePath = {
  getHome: () => '/',
  getStudentPortal: () => '/student-portal',
  getAdmission: () => '/admission',
  getAcademic: () => '/academic',
  getAboutUs: () => '/about',
  getContactUs: () => '/contact',
  getStore: () => '/store',
  getCheckout: () => '/store/checkout',
};

export const getIsActive = ({ pathname, path, locale }: { pathname: string; path: string; locale: string }) => {
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, '');

  if (pathnameWithoutLocale === '' && path === '/') {
    return true;
  }

  return pathnameWithoutLocale === path;
};
