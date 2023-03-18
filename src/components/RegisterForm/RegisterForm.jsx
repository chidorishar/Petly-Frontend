import { useState } from 'react';
import { Form, Formik } from 'formik';

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

const RegisterForm = () => {
  const [registerStep, setRegisterStep] = useState(1);

  const handleStepIncrement = () => {
    setRegisterStep(prevStep => prevStep + 1);
  };

  const handleStepDecrement = () => {
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
          <Styled.Wrapper>
            {registerStep === 1 && (
              <StepOne handleStepChange={handleStepIncrement} />
            )}
            {registerStep === 2 && (
              <StepTwo handleStepChange={handleStepDecrement} />
            )}
          </Styled.Wrapper>
        </Form>
      </Formik>
    </Styled.FormWrapper>
  );
};

export { RegisterForm };
