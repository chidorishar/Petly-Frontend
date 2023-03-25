import { TextInput } from 'components/common';
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
        <TextInput
          inputName="name"
          placeholder="Name"
          value={values.name}
          errorText={errors.name}
          handleChange={handleChange}
        />
        <TextInput
          inputName="location"
          placeholder="City, region"
          value={values.location}
          errorText={errors.location}
          handleChange={handleChange}
        />
        <TextInput
          inputName="phone"
          placeholder="Mobile phone"
          value={values.phone}
          errorText={errors.phone}
          handleChange={handleChange}
        />
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
