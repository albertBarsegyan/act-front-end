import { PageLoader } from '@/components/page-loader';
import { StudentPortalLayout } from '@/modules/student-portal/components/layout';

export default function StudentPortalPage() {
  return (
    <PageLoader>
      <StudentPortalLayout />
    </PageLoader>
  );
}
