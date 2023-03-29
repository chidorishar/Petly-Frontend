import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { Transition } from 'react-transition-group';

import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

import { useSignupUserMutation } from 'redux/slices/usersAPISlice';

import { registerSchema } from 'utils/validations';

import * as Styled from './RegisterForm.styled';
import { ROUTES } from 'utils/appKeys';

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
  const navigate = useNavigate();
  const [register, { isSuccess }] = useSignupUserMutation({});

  const secondStepRef = useRef(null);

  useEffect(() => {
    if (isSuccess) {
      navigate(ROUTES.USERPAGE);
    }
  }, [isSuccess, navigate]);

  const handleStepIncrement = () => {
    if (registerStep === maxStep) return;

    setRegisterStep(prevStep => prevStep + 1);
  };

  const handleStepDecrement = () => {
    if (registerStep === minStep) return;

    setRegisterStep(prevStep => prevStep - 1);
  };

  const handleFormSubmit = async ({
    email,
    password,
    name,
    location,
    phone,
  }) => {
    const { error } = await register({
      email,
      password,
      name,
      location,
      phone,
    });

    if (error) {
      toast.error(
        error.status === 409 ? 'User already exists' : 'Something went wrong'
      );
      return;
    }

    toast.success('User created successfully');
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
