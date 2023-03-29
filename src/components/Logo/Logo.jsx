import logoIcon from './petly.svg';
import { LogoImg } from './Logo.styled';
import { Link } from 'react-router-dom';

export const Logo = () => {
  return (
    <Link to="/">
      <LogoImg src={logoIcon} alt="petly" />
    </Link>
  );
};
