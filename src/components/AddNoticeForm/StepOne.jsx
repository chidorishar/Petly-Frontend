import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { NOTICE_CATEGORY } from 'utils/validations';
import * as Styled from './AddNoticeForm.styled';

const StepOne = ({ handleNext, handleCancel, animationState, refProp }) => {
  const {
    values,
    handleChange,
    setFieldValue,
    // validateField,
    errors,
    isValidating,
  } = useFormikContext();
  const [stepIsPressed, setStepIsPressed] = useState(false);
  const ifCurrentIsInvalid =
    errors.title || errors.name || errors.birthDate || errors.breed;

  useEffect(() => {
    if (!ifCurrentIsInvalid && !isValidating && stepIsPressed) {
      handleNext();
    }
  }, [isValidating, ifCurrentIsInvalid, stepIsPressed]);

  const handleNextClick = async () => {
    // validateField('title');
    // validateField('name');
    // validateField('birthDate');
    // validateField('breed');

    setStepIsPressed(true);
  };

  const handleCategoryChange = category => () => {
    if (values.category === category) return;

    setFieldValue('category', category);
  };

  return (
    <Styled.WrapperOne state={animationState} ref={refProp}>
      <Styled.ContentWrapper>
        <h2>Add pet</h2>
        <Styled.NoticeDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Styled.NoticeDescription>
        <Styled.OptionsWrapper>
          <button
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.LOST_FOUND)}
            // isActive={values.category === NOTICE_CATEGORY.LOST_FOUND}
          >
            lost/found
          </button>
          <button
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.FOR_FREE)}
            // isActive={values.category === NOTICE_CATEGORY.FOR_FREE}
          >
            in good hands
          </button>
          <button
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.SELL)}
            // isActive={values.category === NOTICE_CATEGORY.SELL}
          >
            sell
          </button>
        </Styled.OptionsWrapper>
        <div>
          <p>Title</p>
          <input
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Type name"
          />
          <p>{errors.title}</p>
        </div>
        <div>
          <p>Name</p>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Type pet's name"
          />
          <p>{errors.name}</p>
        </div>
        <div>
          <p>Date of birth</p>
          <input
            name="birthDate"
            value={values.birthDate}
            onChange={handleChange}
            placeholder="Type date of birth"
          />
          <p>{errors.birthDate}</p>
        </div>
        <div>
          <p>Breed</p>
          <input
            name="breed"
            value={values.breed}
            onChange={handleChange}
            placeholder="Type breed"
          />
          <p>{errors.breed}</p>
        </div>
      </Styled.ContentWrapper>

      <Styled.ButtonsWrapper>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
        <button type="button" onClick={handleNextClick}>
          Next
        </button>
      </Styled.ButtonsWrapper>
    </Styled.WrapperOne>
  );
};

StepOne.propTypes = {
  handleNext: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  animationState: PropTypes.string.isRequired,
  refProp: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export { StepOne };
