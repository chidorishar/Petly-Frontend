import logoIcon from './petly.svg';
import { LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <LogoImg src={logoIcon} alt="petly" />
    </>
  );
};