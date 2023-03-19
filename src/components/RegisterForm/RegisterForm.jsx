import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { Transition } from 'react-transition-group';

import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

import { registerSchema } from 'utils/validations';

import * as Styled from './RegisterForm.styled';

const initialRegistrationValues = {
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  location: '',
  phone: '',
};

const minStep = 1;
const maxStep = 2;

const RegisterForm = () => {
  const [registerStep, setRegisterStep] = useState(minStep);

  const secondStepRef = useRef(null);

  const handleStepIncrement = () => {
    if (registerStep === maxStep) return;

    setRegisterStep(prevStep => prevStep + 1);
  };

  const handleStepDecrement = () => {
    if (registerStep === minStep) return;

    setRegisterStep(prevStep => prevStep - 1);
  };

  const handleFormSubmit = values => {
    window.alert(JSON.stringify(values));
  };

  return (
    <Styled.FormWrapper>
      <Formik
        initialValues={initialRegistrationValues}
        validationSchema={registerSchema}
        onSubmit={handleFormSubmit}
        validateOnBlur={false}
        validateOnChange={false}
        isInitialValid={false}
      >
        <Form>
          <StepOne handleStepChange={handleStepIncrement} />
          <Transition
            in={registerStep === 2}
            timeout={500}
            nodeRef={secondStepRef}
            mountOnEnter={true}
            unmountOnExit={true}
          >
            {state => (
              <StepTwo
                animationState={state}
                handleStepChange={handleStepDecrement}
                refProp={secondStepRef}
              />
            )}
          </Transition>
        </Form>
      </Formik>
    </Styled.FormWrapper>
  );
};

export { RegisterForm };
