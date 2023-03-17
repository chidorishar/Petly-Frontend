import { Link } from 'react-router-dom';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

const StepOne = ({ handleStepChange }) => {
  const { values, handleChange, validateField, errors } = useFormikContext();

  const handleNextClick = async () => {
    validateField('email');
    validateField('password');
    validateField('confirmPassword');

    if (Object.keys(errors).length) return;

    handleStepChange();
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
        <input
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        <input
          name="confirmPassword"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
        />
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
