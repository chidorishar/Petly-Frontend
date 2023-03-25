import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

import * as Styled from './RegisterForm.styled';
import { TextInput } from 'components/common';

const StepOne = ({ handleStepChange }) => {
  const { values, handleChange, validateField, errors, isValidating } =
    useFormikContext();
  const [stepIsPressed, setStepIsPressed] = useState(false);
  const ifCurrentIsInvalid =
    errors.email || errors.password || errors.confirmPassword;

  useEffect(() => {
    if (!ifCurrentIsInvalid && !isValidating && stepIsPressed) {
      handleStepChange();
    }
  }, [isValidating, ifCurrentIsInvalid, stepIsPressed]);

  const handleNextClick = async () => {
    validateField('email');
    validateField('password');
    validateField('confirmPassword');

    setStepIsPressed(true);
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>Registration</Styled.Title>
      <Styled.InputWrapper>
        <TextInput
          errorText={errors.email}
          handleChange={handleChange}
          inputName="email"
          placeholder="Email"
          value={values.email}
        />
        <TextInput
          errorText={errors.password}
          handleChange={handleChange}
          inputName="password"
          placeholder="Password"
          value={values.password}
          inputType="password"
        />
        <TextInput
          errorText={errors.confirmPassword}
          handleChange={handleChange}
          inputName="confirmPassword"
          placeholder="Confrim Password"
          value={values.confirmPassword}
          inputType="password"
        />
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </Styled.ButtonWrapper>
      <Styled.BottomText>
        Already have an account?{' '}
        <Styled.BottomLink to={ROUTES.LOGIN}>Login</Styled.BottomLink>
      </Styled.BottomText>
    </Styled.Wrapper>
  );
};

StepOne.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
};

export { StepOne };
