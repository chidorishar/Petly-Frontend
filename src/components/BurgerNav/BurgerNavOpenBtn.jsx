import PropTypes from 'prop-types';
import { GiHamburgerMenu } from 'react-icons/gi';

import { GiHamburgerMenuOpen } from './BurgerNavOpenBtn.styled';

export const BurgerNavOpenBtn = ({ onClick }) => {
  return (
    <>
      <GiHamburgerMenuOpen onClick={onClick} aria-label="Open">
        <GiHamburgerMenu />
      </GiHamburgerMenuOpen>
    </>
  );
};

BurgerNavOpenBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
