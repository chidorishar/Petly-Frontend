import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

import * as Styled from './RegisterForm.styled';

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
    <>
      <Styled.Title>Registration</Styled.Title>
      <Styled.InputWrapper>
        <div>
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {/* <div>{errors.email}</div> */}
        </div>
        <div>
          <input
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
          />
          {/* <div>{errors.password}</div> */}
        </div>
        <div>
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {/* <div>{errors.confirmPassword}</div> */}
        </div>
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
    </>
  );
};

StepOne.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
};

export { StepOne };
