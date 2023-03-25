import PropTypes from 'prop-types';

import * as Styled from './TextInput.styled';
import { TextInputError } from './TextInputError';
import { TextInputIcon } from './TextInputIcon';

const TextInput = ({
  value,
  handleChange,
  errorText,
  inputName,
  placeholder,
  inputType = 'text',
}) => {
  return (
    <Styled.Wrapper isError={!!errorText}>
      <Styled.InputWrapper>
        <Styled.TextInput
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={inputType}
        />
        <TextInputIcon hasError={!!errorText} />
      </Styled.InputWrapper>
      <TextInputError errorText={errorText} />
    </Styled.Wrapper>
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  errorText: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
};

export { TextInput };
