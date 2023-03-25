import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { ErrorIcon } from 'assets/icons';
import * as Styled from './TextInput.styled';

const TextInputIcon = ({ hasError }) => {
  const iconRef = useRef(null);

  return (
    <Transition
      in={!!hasError}
      timeout={200}
      nodeRef={iconRef}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <Styled.IconInput state={state} ref={iconRef}>
          <ErrorIcon />
        </Styled.IconInput>
      )}
      {/* <SuccessIcon /> */}
    </Transition>
  );
};

// write proptypes
TextInputIcon.propTypes = {
  hasError: PropTypes.bool,
};

export { TextInputIcon };
