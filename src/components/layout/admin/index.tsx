import { ReactNode } from 'react';

import Protected from '@/hoc/protected';
import Header from '@/components/header';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Protected>
      <Header />
      <main>{children}</main>
    </Protected>
  );
};

export default AdminLayout;
