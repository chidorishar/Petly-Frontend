import { useRef } from 'react';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import * as Styled from './TextInput.styled';

const TextInputError = ({ errorText }) => {
  const errorRef = useRef(null);

  return (
    <Transition
      in={!!errorText}
      timeout={200}
      nodeRef={errorRef}
      mountOnEnter={true}
      unmountOnExit={true}
    >
      {state => (
        <Styled.ErrorText state={state} ref={errorRef}>
          {errorText}
        </Styled.ErrorText>
      )}
    </Transition>
  );
};

//write proptypes
TextInputError.propTypes = {
  errorText: PropTypes.string,
};

export { TextInputError };
