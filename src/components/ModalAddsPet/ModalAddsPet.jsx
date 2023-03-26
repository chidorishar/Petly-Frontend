import React, { useState, useRef, useEffect, forwardRef } from 'react';
import {
  Overlay,
  ModalTitle,
  Modal,
  ModalButton,
  Form,
  Field,
  ErrorText,
} from './ModalAddsPet.styled';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { TfiPlus } from 'react-icons/tfi';

// import { useCreatePetMutation } from 'redux/slices/petSliceAPISlice';
import { toast } from 'react-toastify';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

// eslint-disable-next-line react/prop-types
const FormError = ({ name, component: Component = 'div' }) => {
  return (
    <ErrorMessage name={name} as={Component}>
      {message => <ErrorText>{message}</ErrorText>}
    </ErrorMessage>
  );
};

const validationAddPetOneStep = yup.object().shape({
  name: yup.string().min(2).max(16).required('Name pet is required!'),
  birth: yup
    .date()
    .required('Birth is required!')
    .test(
      'is-ddmmyyyy',
      'Date must be in the format DD.MM.YYYY'.toString(),
      value => {
        if (!value) return false;
        const regex = /^\d{2}\.\d{2}\.\d{4}$/;
        return regex.test(moment(value, 'DD.MM.YYYY').format('DD.MM.YYYY'));
      }
    )
    .test('is-valid-date', value => {
      const minDate = new Date('2000-01-01');
      return value >= minDate;
    })
    .max(new Date()),
  breed: yup.string().required('Breed is required!'),
});

const validationAddPetTwoStep = yup.object().shape({
  photo: yup.mixed().required('Please select a file'),
  comments: yup
    .string()
    .min(8)
    .max(300)
    .required('Please write about your pet'),
});

function ModalAddPet() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  // const navigate = useNavigate();

  // const [createPet, { data: mutationData, error, loading, called }] = useCreatePetMutation();
  //Для валідації//

  // Функції стосовно модального вікна //
  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };
  const handleKeyDown = e => {
    if (e.key === 'Escape' && showModal) {
      setShowModal(false);
    }
  };

  // Функції стосовно форми //
  const startDate = new Date();
  const [data, setData] = useState({
    name: '',
    birth: startDate,
    breed: '',
    photo: '',
    comments: '',
    photoPreview: null,
  });
  console.log('data start:', data);
  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('Form Submitted:', formData);
  };

  const handleChangeData = newData => {
    setData(prev => ({
      ...prev,
      ...newData,
      photo: newData.photo ? newData.photo[0] : prev.photo,
    }));
  };

  const handleNextStep = (newData, final = false) => {
    handleChangeData(newData);
    if (final) {
      makeRequest({ ...data, ...newData });
      return;
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBackStep = newData => {
    handleChangeData(newData);
    setCurrentStep(prev => prev - 1);
  };

  // const handleFileChange = e => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setData(prev => ({
  //       ...prev,
  //       photo: file,
  //       photoPreview: reader.result,
  //     }));
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmitForm = async (values, formikBag = {}) => {
    const { setSubmitting } = formikBag;
    const formData = { ...data, ...values };
    try {
      await makeRequest(formData);
      console.log('await submitForm:', formData);
      // createPet({variables:{formData}})
      toast.success(`${formData.name} successfully added!`, {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      toast.error('Error adding data!', {
        position: toast.POSITION.TOP_LEFT,
      });
    } finally {
      setSubmitting && setSubmitting(false);
      handleCloseModal();
    }
    console.log('data submit:', formData);
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
    <div>
      <ModalButton onClick={handleOpenModal}>Open Modal</ModalButton>

      {showModal && (
        <Overlay onClick={handleOverlayClick}>
          <Modal ref={modalRef} tabIndex={0} onKeyDown={handleKeyDown}>
            <div className="modal-header">
              <ModalTitle>Modal Title</ModalTitle>
              <ModalButton onClick={handleCloseModal}>Close Modal</ModalButton>
            </div>
            {steps[currentStep]}
          </Modal>
        </Overlay>
      )}
    </div>
  );
}

export default ModalAddPet;

const DatePickerField = ({
  label,
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  maxDate,
}) => {
  const handleChange = date => {
    //new Date(date).toISOString()
    onChange(date);
  };

  return (
    <>
      <label htmlFor={name}>{label}</label>
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
      />
    </>
  );
};

DatePickerField.propTypes = {
  label: PropTypes.string.isRequired,
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

const StepOne = ({ next, cancel, data }) => {
  const handleSubmit = values => {
    next(values);
  };

  return (
    <Formik
      validationSchema={validationAddPetOneStep}
      initialValues={data}
      onSubmit={handleSubmit}
    >
      {({ values, handleBlur, handleSubmit, setFieldValue }) => (
        <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <>
            <label htmlFor="name">
              Name pet
              <Field type="text" name="name" placeholder="Type name pet" />
            </label>
            <FormError component="div" name="name" />

            <DatePickerField
              label="Date of birth"
              name="birth"
              value={values.birth}
              placeholder="Type date of birth"
              onChange={date => setFieldValue('birth', date)}
              onBlur={handleBlur}
              utcOffset={0}
            />
            <FormError name="birth" />

            <label htmlFor="breed">
              Breed
              <Field type="text" name="breed" placeholder="Type breed" />
            </label>
            <FormError name="breed" />

            <ModalButton type="button" onClick={() => cancel(values)}>
              Cancel
            </ModalButton>

            <ModalButton type="submit">Next</ModalButton>
          </>
        </Form>
      )}
    </Formik>
  );
};

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
      <div
        onClick={onClick}
        className="img-thumbnail mt-2 d-flex justify-content-center align-items-center"
        style={{ height: 200, width: 200 }}
      >
        <TfiPlus size={100} />
      </div>
    );
  }

  if (loading) {
    return <p>loading...</p>;
  }
  if (file && typeof file.name !== 'string') {
    console.error('Invalid file name type');
    return null;
  }
  return (
    <img
      src={thumb}
      alt={file.name}
      className="img-thumbnail mt-2"
      height={200}
      width={200}
      onClick={onClick}
    />
  );
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

  const handleFileChange = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      updateData({ ...data, photo: file });
    }
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
    >
      {({ values, handleSubmit, setFieldValue }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <>
            <label htmlFor="photo">
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
            </label>
            <FormError name="photo" />

            <label htmlFor="comments">
              Comments
              <Field type="text" name="comments" placeholder="Type comments" />
            </label>
            <FormError name="comments" />

            <ModalButton type="button" onClick={() => prev(values)}>
              Back
            </ModalButton>

            <ModalButton type="submit">Submit</ModalButton>
          </>
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
  setFieldValue: PropTypes.any,
};
