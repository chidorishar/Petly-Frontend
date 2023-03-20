import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

import * as Styled from './RegisterForm.styled';

const StepTwo = ({ handleStepChange, animationState, refProp }) => {
  const { values, handleChange, errors } = useFormikContext();

  const handlePrevClick = () => {
    handleStepChange();
  };

  return (
    <Styled.WrapperTwo state={animationState} ref={refProp}>
      <Styled.Title>Registration</Styled.Title>
      <Styled.InputWrapper>
        <div>
          <input
            name="name"
            placeholder="Name"
            value={values.name}
            onChange={handleChange}
          />
          <div>{errors.name}</div>
        </div>
        <div>
          <input
            name="location"
            placeholder="City, region"
            value={values.location}
            onChange={handleChange}
          />
          <div>{errors.location}</div>
        </div>
        <div>
          <input
            name="phone"
            placeholder="Mobile phone"
            value={values.phone}
            onChange={handleChange}
          />
          <div>{errors.phone}</div>
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
    </Styled.WrapperTwo>
  );
};

StepTwo.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
  animationState: PropTypes.string.isRequired,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export { StepTwo };
