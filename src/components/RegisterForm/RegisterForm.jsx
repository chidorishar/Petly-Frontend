import { useState } from 'react';
import { Form, Formik } from 'formik';

import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

import { registerSchema } from 'utils/validations';

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
    <Formik
      initialValues={initialRegistrationValues}
      validationSchema={registerSchema}
      onSubmit={handleFormSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      <Form>
        {registerStep === 1 && (
          <StepOne handleStepChange={handleStepIncrement} />
        )}
        {registerStep === 2 && (
          <StepTwo handleStepChange={handleStepDecrement} />
        )}
      </Form>
    </Formik>
  );
};

export { RegisterForm };
