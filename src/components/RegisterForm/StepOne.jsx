import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

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
      <div>Registration</div>
      <div>
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <div>{errors.email}</div>
        <input
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <div>{errors.password}</div>
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <div>{errors.confirmPassword}</div>
      </div>
      <div>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </div>
      <div>
        Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
      </div>
    </>
  );
};

StepOne.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
};

export { StepOne };
