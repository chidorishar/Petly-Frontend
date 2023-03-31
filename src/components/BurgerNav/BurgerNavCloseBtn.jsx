import PropTypes from 'prop-types';

import { GrClose } from 'react-icons/gr';

import { GiHamburgerMenuClose } from './BurgerNavCloseBtn.styled';

export const BurgerNavCloseBtn = ({ onClick }) => {
  return (
    <>
      <GiHamburgerMenuClose onClick={onClick}>
        <GrClose />
      </GiHamburgerMenuClose>
    </>
  );
};

BurgerNavCloseBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
