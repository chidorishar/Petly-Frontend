import PropTypes from 'prop-types';

import * as Styled from './TextInput.styled';
import { TextInputError } from './TextInputError';
import { TextInputIcon } from './TextInputIcon';
import { ImEye, ImEyeBlocked } from 'assets/icons';
import { useState } from 'react';

const TextInput = ({
  value,
  handleChange,
  errorText,
  inputName,
  placeholder,
  inputType = 'text',
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Styled.Wrapper isError={!!errorText}>
      <Styled.InputWrapper>
        <Styled.TextInput
          name={inputName}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          type={showPassword ? "text":inputType}
        />
        {inputType === 'password' ? (
          <div onClick={handleClick}>{ showPassword ? <ImEye /> : <ImEyeBlocked />}</div>) : null}
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
