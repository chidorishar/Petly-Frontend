import React, { useState, useRef, useEffect, forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { TfiPlus } from 'react-icons/tfi';
import PropTypes from 'prop-types';

import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
// import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

import {
  Overlay,
  ModalTitle,
  Modal,
  ModalButton,
  Form,
  Field,
  FieldComment,
  ErrorText,
  FormLabel,
  CrossButton,
  DatePickerWrapperStyles,
  Icon,
  InputWrapper,
  ButtonWrapper,
  ButtonWrapperTwo,
  FormLabelCentre,
  FormLabelFoto,
  FormLabelComment,
  Comment,
  ImgPet,
  ImgPlug,
  ModalButtonDown,
} from './ModalAddsPet.styled';

// import { useCreatePetMutation } from 'redux/slices/petSliceAPISlice';
import { selectUserAccessToken } from 'redux/selectors';
import { ResetButton } from './ResetButton';
import { addNewPet } from './api';

// eslint-disable-next-line react/prop-types
const FormError = forwardRef(({ name, component: Component = 'div' }, ref) => {
  return (
    <ErrorMessage name={name} as={Component} ref={ref}>
      {message => <ErrorText>{message}</ErrorText>}
    </ErrorMessage>
  );
});

FormError.displayName = 'FormError';

const validationAddPetOneStep = yup.object().shape({
  name: yup.string().min(2).max(16).required('Name pet is required!'),
  birthday: yup
    .date()
    .required('birthday is required!')
    .test('is-valid-date', value => {
      const minDate = new Date('2000-01-01');
      return value >= minDate;
    })
    .max(new Date() + 1),
  breed: yup.string().min(2).max(16).required('Breed is required!'),
});

const validationAddPetTwoStep = yup.object().shape({
  photo: yup.mixed().required('Please select a file'),
  comment: yup.string().min(8).max(120).required('Please write about your pet'),
});

export const ModalAddPet = ({ setModalStateInParent }) => {
  const [isModalAddPetShown, setShowModalAddPet] = useState(true);
  const userToken = useSelector(selectUserAccessToken);

  const modalRef = useRef(null);
  //Для валідації//

  // Функції стосовно модального вікна //
  useEffect(() => {
    if (isModalAddPetShown && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isModalAddPetShown]);

  const handleCloseModal = () => {
    setShowModalAddPet(false);
    setModalStateInParent(false);
    setData({
      name: '',
      birthday: startDate,
      breed: '',
      photo: '',
      comment: '',
    });
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  const handleKeyDown = e => {
    if (e.key === 'Escape' && isModalAddPetShown) {
      setModalStateInParent(false);
      setShowModalAddPet(false);
    }
  };

  // Функції стосовно форми //
  const startDate = new Date();
  const [data, setData] = useState({
    name: '',
    birthday: startDate,
    breed: '',
    photo: '',
    comment: '',
  });
  // console.log('data start:', data);
  const [currentStep, setCurrentStep] = useState(0);

  const handleChangeData = newData => {
    setData(prev => ({
      ...prev,
      ...newData,
    }));
  };

  const handleNextStep = (newData, final = false) => {
    handleChangeData(newData);
    if (final) {
      setData({ ...data, ...newData });
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBackStep = newData => {
    handleChangeData(newData);
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmitForm = async (values, formikBag = {}) => {
    const { setSubmitting } = formikBag;
    const formData = { ...data, ...values };

    if (userToken)
      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;
    const addResponse = await addNewPet(formData);

    if (addResponse.status === 201) {
      setCurrentStep(0);
      setData({
        name: '',
        birthday: startDate,
        breed: '',
        photo: '',
        comment: '',
      });
      // console.log('after try setData:', data);

      toast.success(`${formData.name} successfully added!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else
      toast.error('Error adding data!', {
        position: toast.POSITION.TOP_LEFT,
      });

    setSubmitting && setSubmitting(false);
    handleCloseModal();
  };

  const steps = [
    <StepOne
      key="1"
      next={handleNextStep}
      cancel={handleCloseModal}
      data={data}
    />,
    <StepTwo
      key="2"
      next={handleNextStep}
      prev={handleBackStep}
      submitForm={handleSubmitForm}
      data={data}
      updateData={setData}
    />,
  ];

  return (
    <>
      <Overlay onClick={handleOverlayClick}>
        <Modal ref={modalRef} tabIndex={0} onKeyDown={handleKeyDown}>
          <CrossButton onClick={handleCloseModal}>
            <Icon />
          </CrossButton>
          <ModalTitle>Add pet</ModalTitle>
          {steps[currentStep]}
        </Modal>
      </Overlay>
    </>
  );
};

ModalAddPet.propTypes = {
  setModalStateInParent: PropTypes.func.isRequired,
};

const DatePickerField = ({
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  maxDate,
}) => {
  const handleChange = date => {
    onChange(date);
  };

  return (
    <>
      <DatePicker
        id={name}
        name={name}
        selected={value}
        dateFormat="dd.MM.yyyy"
        placeholderText={placeholder}
        maxDate={maxDate || new Date()}
        onChange={handleChange}
        onBlur={onBlur}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={80}
        utcOffset={0}
        closeOnScroll={e => e.target === document}
      />
    </>
  );
};

DatePickerField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.oneOf([null, undefined]),
  ]),
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  maxDate: PropTypes.object,
};

const StepOne = forwardRef(({ next, cancel, data }, ref) => {
  const handleSubmit = values => {
    next(values);
  };
  const formRef = useRef();

  return (
    <Formik
      validationSchema={validationAddPetOneStep}
      initialValues={data}
      onSubmit={handleSubmit}
      innerRef={formRef}
    >
      {({ values, handleBlur, handleSubmit, setFieldValue }) => (
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <InputWrapper>
            <FormLabel htmlFor="name" ref={ref}>
              Name pet
              <Field type="text" name="name" placeholder="Type name pet" />
              <FormError component="div" name="name" />
            </FormLabel>

            <FormLabelCentre htmlFor="birthday">
              Date of birthday
              <DatePickerField
                id="birthday"
                name="birthday"
                value={values.birthday}
                placeholder="Type date of birthday"
                onChange={date => setFieldValue('birthday', date)}
                onBlur={handleBlur}
                utcOffset={0}
              />
              <DatePickerWrapperStyles />
              <FormError name="birthday" />
            </FormLabelCentre>

            <FormLabel htmlFor="breed">
              Breed
              <Field type="text" name="breed" placeholder="Type breed" />
              <FormError name="breed" />
            </FormLabel>
          </InputWrapper>

          <ButtonWrapper>
            <ModalButton type="button" onClick={() => cancel(values)}>
              Cancel
            </ModalButton>
            <ModalButtonDown type="submit">Next</ModalButtonDown>
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
});

StepOne.displayName = 'StepOne';

StepOne.propTypes = {
  next: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

const Thumb = ({ file, onClick }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) {
      return;
    }
    if (!(file instanceof File)) {
      console.error('Invalid file type');
      return;
    }
    setLoading(true);
    let reader = new FileReader();

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return (
      <ImgPlug onClick={onClick}>
        <TfiPlus size={48} />
      </ImgPlug>
    );
  }

  if (loading) {
    return <p>loading...</p>;
  }
  if (file && typeof file.name !== 'string') {
    console.error('Invalid file name type');
    return null;
  }
  return <ImgPet src={thumb} alt={file.name} onClick={onClick} />;
};

Thumb.propTypes = {
  file: PropTypes.any,
  onClick: PropTypes.func,
};

Thumb.defaultProps = {
  file: null,
};

const FileInput = forwardRef((props, ref) => {
  return (
    <input
      type="file"
      name="photo"
      accept="image/*"
      onChange={props.onChange}
      hidden
      ref={ref}
    />
  );
});

FileInput.displayName = 'FileInput';
FileInput.propTypes = {
  onChange: PropTypes.func,
};

const StepTwo = ({ next, prev, data, submitForm, updateData }) => {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const formRef = useRef();

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      updateData({ ...data, photo: file });
    }
  };

  const handleCommentChange = event => {
    const value = event.target.value;
    updateData({ ...data, comment: value });
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const formData = new FormData();
    formData.append('photo', selectedFile);
    Object.keys(values).forEach(key => {
      formData.append(key, values[key]);
    });
    updateData(values);
    await submitForm(formData);
    next(values, true);
    setSubmitting(false);
  };

  return (
    <Formik
      validationSchema={validationAddPetTwoStep}
      initialValues={data}
      onSubmit={handleSubmit}
      enableReinitialize
      innerRef={formRef}
    >
      {({ values, handleSubmit, setFieldValue, resetForm }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <InputWrapper>
            <FormLabelFoto htmlFor="photo">
              Add photo and some comments
              <FileInput
                onChange={e => {
                  handleFileChange(e);
                  setFieldValue('photo', e.currentTarget.files[0]);
                  setSelectedFile(e.currentTarget.files[0]);
                }}
                ref={fileInputRef}
              />
              <Thumb
                file={selectedFile ? selectedFile : data.photo}
                onClick={() => fileInputRef.current.click()}
              />
            </FormLabelFoto>
            <FormError name="photo" />

            <FormLabelComment htmlFor="comment">
              <Comment>Comments</Comment>
              <FieldComment
                type="textarea"
                name="comment"
                placeholder="Type comments"
                value={data.comment}
                onChange={handleCommentChange}
              />
            </FormLabelComment>
            <FormError name="comment" />
          </InputWrapper>

          <ButtonWrapperTwo>
            <ModalButton type="button" onClick={() => prev(values)}>
              Back
            </ModalButton>
            <ModalButtonDown type="submit" onClick={() => resetForm()}>
              Done
            </ModalButtonDown>
          </ButtonWrapperTwo>
          <ResetButton></ResetButton>
        </Form>
      )}
    </Formik>
  );
};

StepTwo.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};
