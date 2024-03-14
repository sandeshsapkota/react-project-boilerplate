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
    <header className="p-4 bg-blue-100 flex justify-between">
      <Logo />
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
