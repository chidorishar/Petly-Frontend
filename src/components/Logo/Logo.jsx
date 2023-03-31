import { LogoImg } from './Logo.styled';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoImg aria-label="aaa" />
    </Link>
  );
};
