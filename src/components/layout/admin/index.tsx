import { ReactNode } from 'react';
import useAuth from '@/utils/hooks/useAuth';
import Protected from '@/hoc/protected';

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { logout } = useAuth();

  return (
    <Protected>
      <header className="p-4 bg-blue-100 flex">
        <button
          onClick={logout}
          className="ml-auto bg-blue-500 text-white rounded-md px-5  py-1.5 flex items-center gap-6"
        >
          Log out
        </button>
      </header>
      <main>{children}</main>
    </Protected>
  );
};

export default AdminLayout;
