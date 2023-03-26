import { useRef, useState } from 'react';
import { Form, Formik } from 'formik';
import { Transition } from 'react-transition-group';
import PropTypes from 'prop-types';

import { StepOne } from './StepOne';
import { StepTwo } from './StepTwo';

import {
  addNoticeSchema,
  NOTICE_CATEGORY,
  NOTICE_GENDER,
} from 'utils/validations';

const initialValues = {
  category: NOTICE_CATEGORY.LOST_FOUND,
  title: '',
  name: '',
  birthDate: '',
  breed: '',
  sex: NOTICE_GENDER.MALE,
  location: '',
  price: '',
  image: '',
  comments: '',
};

const minStep = 1;
const maxStep = 2;

const AddNoticeForm = ({ handleClose }) => {
  const [formStep, setFormStep] = useState(minStep);
  const secondStepRef = useRef(null);
  const fiestStepRef = useRef(null);

  const handleStepIncrement = () => {
    if (formStep === maxStep) return;

    setFormStep(prevStep => prevStep + 1);
  };

  const handleStepDecrement = () => {
    if (formStep === minStep) return;

    setFormStep(prevStep => prevStep - 1);
  };

  const handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={addNoticeSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
      isInitialValid={false}
    >
      <Form>
        <Transition
          in={formStep === 1}
          timeout={500}
          nodeRef={fiestStepRef}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          {state => (
            <StepOne
              animationState={state}
              refProp={fiestStepRef}
              handleNext={handleStepIncrement}
              handleCancel={handleClose}
            />
          )}
        </Transition>
        <Transition
          in={formStep === 2}
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
  );
};

AddNoticeForm.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export { AddNoticeForm };
