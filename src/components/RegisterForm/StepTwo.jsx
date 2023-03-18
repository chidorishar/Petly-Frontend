import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

import * as Styled from './RegisterForm.styled';

const StepTwo = ({ handleStepChange }) => {
  const { values, handleChange } = useFormikContext();

  const handlePrevClick = () => {
    handleStepChange();
  };

  return (
    <>
      <Styled.Title>Registration</Styled.Title>
      <Styled.InputWrapper>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          {/* <div>{errors.name}</div> */}
        </div>
        <div>
          <input
            name="location"
            placeholder="City, region"
            value={values.location}
            onChange={handleChange}
          />
          {/* <div>{errors.location}</div> */}
        </div>
        <div>
          <input
            name="phone"
            placeholder="Mobile phone"
            value={values.phone}
            onChange={handleChange}
          />
          {/* <div>{errors.phone}</div> */}
        </div>
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <button type="submit">Register</button>
        <button type="button" onClick={handlePrevClick}>
          Back
        </button>
      </Styled.ButtonWrapper>
      <Styled.BottomText>
        Already have an account?{' '}
        <Styled.BottomLink to={ROUTES.LOGIN}>Login</Styled.BottomLink>
      </Styled.BottomText>
    </>
  );
};

StepTwo.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
};

export { StepTwo };
