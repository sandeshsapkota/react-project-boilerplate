import { ReactNode } from 'react';

import Protected from '@/hoc/protected';
import Header from '@/components/header';

const AdminLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <Protected>
      <title>{title ? `${title} | app name` : 'app name'}</title>
      <Header />
      <main>{children}</main>
    </Protected>
  );
};

export default AdminLayout;
