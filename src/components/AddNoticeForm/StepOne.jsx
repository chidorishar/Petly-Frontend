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
    validateField,
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
    validateField('title');
    validateField('name');
    validateField('birthDate');
    validateField('breed');

    setStepIsPressed(true);
  };

  const handleCategoryChange = category => () => {
    if (values.category === category) return;

    setFieldValue('category', category);
  };

  return (
    <Styled.WrapperOne state={animationState} ref={refProp}>
      <Styled.ContentWrapper>
        <Styled.Title>Add pet</Styled.Title>
        <Styled.NoticeDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        </Styled.NoticeDescription>
        <Styled.OptionsWrapper>
          <Styled.ModalButton
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.LOST_FOUND)}
            // isActive={values.category === NOTICE_CATEGORY.LOST_FOUND}
          >
            lost/found
          </Styled.ModalButton>
          <Styled.ModalButton
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.FOR_FREE)}
            // isActive={values.category === NOTICE_CATEGORY.FOR_FREE}
          >
            in good hands
          </Styled.ModalButton>
          <Styled.ModalButton
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.SELL)}
            // isActive={values.category === NOTICE_CATEGORY.SELL}
          >
            sell
          </Styled.ModalButton>
        </Styled.OptionsWrapper>
        <div>
          <Styled.Subtitle>Title</Styled.Subtitle>
          <Styled.InputCommon
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Type name"
            style={
              errors.title
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{errors.title}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>Name</Styled.Subtitle>
          <Styled.InputCommon
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Type pet's name"
            style={
              errors.name
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{errors.name}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>Date of birth</Styled.Subtitle>
          <Styled.InputCommon
            name="birthDate"
            value={values.birthDate}
            onChange={handleChange}
            placeholder="Type date of birth"
            style={
              errors.birthDate
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{errors.birthDate}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>Breed</Styled.Subtitle>
          <Styled.InputCommon
            name="breed"
            value={values.breed}
            onChange={handleChange}
            placeholder="Type breed"
            style={
              errors.breed
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{errors.breed}</Styled.TextMessage>
        </div>
      </Styled.ContentWrapper>

      <Styled.ButtonsWrapper>
        <Styled.ModalButton type="button" onClick={handleCancel}>
          Cancel
        </Styled.ModalButton>
        <Styled.ModalButtonDown type="button" onClick={handleNextClick}>
          Next
        </Styled.ModalButtonDown>
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
