import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Transition } from 'react-transition-group';

import PropTypes from 'prop-types';

import * as Styled from './Modal.styled';

const Modal = ({ isOpen, children, handleClose }) => {
  const transitionRef = useRef(null);

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
      handleClose();
    }
  }

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      handleClose();
    }
  };

  const Element = (
    <>
      <Transition
        in={isOpen}
        timeout={250}
        nodeRef={transitionRef}
        mountOnEnter={true}
        unmountOnExit={true}
      >
        {state => (
          <Styled.Backdrop>
            <Styled.Wrapper
              onClick={handleBackdropClick}
              state={state}
              ref={transitionRef}
            >
              {children}
            </Styled.Wrapper>
          </Styled.Backdrop>
        )}
      </Transition>
    </>
  );

  return createPortal(Element, document.getElementById('modal'));
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export { Modal };
