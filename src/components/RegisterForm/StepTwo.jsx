import { useFormikContext } from 'formik';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

const StepTwo = ({ handleStepChange }) => {
  const { values, handleChange } = useFormikContext();

  const handlePrevClick = () => {
    handleStepChange();
  };

  return (
    <div>
      <div>Registration</div>
      <div>
        <input
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          name="location"
          placeholder="City, region"
          value={values.location}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Mobile phone"
          value={values.phone}
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit">Register</button>
        <button type="button" onClick={handlePrevClick}>
          Back
        </button>
      </div>
      <div>
        Already have an account? <Link to={ROUTES.LOGIN}>Login</Link>
      </div>
    </div>
  );
};

StepTwo.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
};

export { StepTwo };
