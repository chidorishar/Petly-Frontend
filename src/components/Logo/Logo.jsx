import logoIcon from './petly.svg';
import { LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <>
      <a href="">
        <LogoImg src={logoIcon} alt="petly" />
      </a>
    </>
  );
};
