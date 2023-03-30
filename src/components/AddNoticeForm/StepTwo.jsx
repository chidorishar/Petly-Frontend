import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

import { NOTICE_CATEGORY, NOTICE_GENDER } from 'utils/validations';
import * as Styled from './AddNoticeForm.styled';

const StepTwo = ({ animationState, handleStepChange, refProp }) => {
  const { values, handleChange, setFieldValue, errors, isSubmitting } =
    useFormikContext();

  const handleSexChange = sex => () => {
    if (values.sex === sex) return;

    setFieldValue('sex', sex);
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFieldValue('image', file);
  };

  return (
    <Styled.WrapperTwo state={animationState} ref={refProp}>
      <Styled.ContentWrapper>
        <h2>Add pet</h2>
        <Styled.OptionsWrapper>
          <button
            type="button"
            onClick={handleSexChange(NOTICE_GENDER.MALE)}
            // isActive={NOTICE_GENDER.MALE === value.sex}
          >
            Male
          </button>
          <button
            type="button"
            onClick={handleSexChange(NOTICE_GENDER.FEMALE)}
            // isActive={NOTICE_GENDER.FEMALE === value.sex}
          >
            Female
          </button>
        </Styled.OptionsWrapper>
        <div>
          <p>Location</p>
          <input
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder="Type location"
          />
          <p>{errors.location}</p>
        </div>
        {values.category === NOTICE_CATEGORY.SELL && (
          <div>
            <p>Price</p>
            <input
              name="price"
              value={values.price}
              onChange={handleChange}
              placeholder="Type price"
            />
            <p>{errors.price}</p>
          </div>
        )}
        <div>
          <p>Load the pet’s image:</p>
          <input
            accept="image/*"
            name="image"
            type="file"
            onChange={handleFileChange}
          />
          <p>{errors.image}</p>
        </div>
        <div>
          <p>Comments</p>
          <input
            name="comments"
            value={values.comments}
            onChange={handleChange}
            placeholder="Type comment"
          />
          <p>{errors.comments}</p>
        </div>
      </Styled.ContentWrapper>
      <Styled.ButtonsWrapper>
        <button type="button" onClick={handleStepChange}>
          Back
        </button>
        <button type="submit" disabled={isSubmitting}>
          Done
        </button>
      </Styled.ButtonsWrapper>
    </Styled.WrapperTwo>
  );
};

StepTwo.propTypes = {
  animationState: PropTypes.string.isRequired,
  handleStepChange: PropTypes.func.isRequired,
  refProp: PropTypes.object.isRequired,
};

export { StepTwo };
