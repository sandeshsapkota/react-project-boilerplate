import { Link } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { Dropdown } from '@/components';
import Logo from '@/components/logo';

const Header = () => {
  const { logout, user } = useAuth();

  const renderDropdownContent = () => {
    return (
      <div className="min-w-[200px] ">
        <button onClick={logout}>Log out</button>
      </div>
    );
  };

  return (
    <header className="p-4 bg-black  flex justify-between">
      <Logo />
      <div className="flex gap-2">
        <Link to="/" className="text-blue-500">
          Home
        </Link>
        <Link to="/dashboard" className="text-blue-500">
          Dashboard
        </Link>
      </div>
      <Dropdown
        trigger={
          <div className="bg-gray-100 rounded-full w-9 h-9 overflow-hidden flex items-center justify-center text-sm font-semibold tracking-widest">
            <div className="hidden"> {user?.username} </div>
            SA
          </div>
        }
        content={renderDropdownContent()}
      />
    </header>
  );
};

export default Header;
