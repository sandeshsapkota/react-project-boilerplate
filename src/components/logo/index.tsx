import { Link } from 'react-router-dom';
import { LogoSvg } from '@/components/icons';
import { ADMIN_HOME_PAGE } from '@/utils/constants/common';

const Logo = () => {
  return (
    <Link to={ADMIN_HOME_PAGE}>
      <LogoSvg />
    </Link>
  );
};

export default Logo;
