import { Link } from 'react-router-dom';
import { LogoSvg } from '@/components/icons';

const Logo = () => {
  return (
    <Link to="/">
      <LogoSvg />
    </Link>
  );
};

export default Logo;
