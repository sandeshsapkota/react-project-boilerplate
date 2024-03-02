import useAuth from '@/hooks/useAuth';
import { Dropdown } from '@/components';
import Logo from '@/components/logo';

const Header = () => {
  const { logout, user } = useAuth();
  console.log(user);

  const renderDropdownContent = () => {
    return (
      <div className="min-w-[200px] p-4">
        <button onClick={logout}>Log out</button>
      </div>
    );
  };

  return (
    <header className="p-4 bg-blue-100 flex justify-between">
      <Logo />
      <Dropdown
        trigger={<div>{user?.username}</div>}
        content={renderDropdownContent()}
      />
    </header>
  );
};

export default Header;
