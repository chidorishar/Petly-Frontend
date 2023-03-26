import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { ModalPortal, ModalContent } from './ModalAddsPet.styled';

export const Overlay = forwardRef((props, ref) => {
  return ReactDOM.createPortal(
    <ModalPortal ref={ref}>
      <ModalContent>{props.children}</ModalContent>
    </ModalPortal>,
    document.getElementById("modal-root")
  );
});

Overlay.displayName = 'Overlay';

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};