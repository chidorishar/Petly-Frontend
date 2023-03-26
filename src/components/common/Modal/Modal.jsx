import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import PropTypes from 'prop-types';

import * as Styled from './Modal.styled';

const Modal = ({ isOpen, children, handleClose }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';

    window[isOpen ? 'addEventListener' : 'removeEventListener'](
      'keydown',
      handleWindowKeydown
    );

    return () => {
      window.removeEventListener('keydown', handleWindowKeydown);
    };
  }, [isOpen]);

  function handleWindowKeydown(e) {
    if (e.code === `Escape`) {
      console.log('handleClose');
      handleClose();
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const Element = (
    <>
      <Styled.Backdrop onClick={handleBackdropClick}>
        {children}
      </Styled.Backdrop>
    </>
  );

  return createPortal(Element, document.getElementById('modal'));
};

// proptypes
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export { Modal };
