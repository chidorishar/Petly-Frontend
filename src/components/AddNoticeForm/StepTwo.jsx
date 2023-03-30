import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

import { NOTICE_CATEGORY, NOTICE_GENDER } from 'utils/validations';
import * as Styled from './AddNoticeForm.styled';
import { useTranslation } from 'react-i18next';

const StepTwo = ({ animationState, handleStepChange, refProp }) => {
  const { t } = useTranslation();
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
        <Styled.Title>{t('notices.add')}</Styled.Title>
        <Styled.Subtitle>{t('modal.sex')}</Styled.Subtitle>
        <Styled.OptionsWrapperTwo>
          <Styled.SexButton
            type="button"
            onClick={handleSexChange(NOTICE_GENDER.MALE)}
            // isActive={NOTICE_GENDER.MALE === value.sex}
          >
            {t('modal.m')}
          </Styled.SexButton>
          <Styled.SexButton
            type="button"
            onClick={handleSexChange(NOTICE_GENDER.FEMALE)}
            // isActive={NOTICE_GENDER.FEMALE === value.sex}
          >
            {t('modal.f')}
          </Styled.SexButton>
        </Styled.OptionsWrapperTwo>
        <div>
          <Styled.Subtitle>{t('modal.location')}</Styled.Subtitle>
          <Styled.InputCommon
            name="location"
            value={values.location}
            onChange={handleChange}
            placeholder={t('modal.locationPl')}
            style={
              errors.location
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{errors.location}</Styled.TextMessage>
        </div>
        {values.category === NOTICE_CATEGORY.SELL && (
          <div>
            <Styled.Subtitle>Price</Styled.Subtitle>
            <Styled.InputCommon
              name="price"
              value={values.price}
              onChange={handleChange}
              placeholder="Type price"
              style={
                errors.price
                  ? { outlineColor: '#E2001A' }
                  : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
              }
            />
            <Styled.TextMessage>{errors.price}</Styled.TextMessage>
          </div>
        )}
        <div>
          <Styled.Subtitle>{t('modal.img')}</Styled.Subtitle>
          <Styled.ContainerAddImage>
            <Styled.InputAddImage
              accept="image/*"
              name="image"
              type="file"
              onChange={handleFileChange}
              style={
                errors.image
                  ? { outlineColor: '#E2001A' }
                  : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
              }
            />
          </Styled.ContainerAddImage>
          <Styled.TextMessage>{errors.image}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>{t('userModal.petComm')}</Styled.Subtitle>
          <Styled.InputComments
            type="text"
            name="comments"
            value={values.comments}
            onChange={handleChange}
            placeholder={t('modal.comm')}
            style={
              errors.comments
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{errors.comments}</Styled.TextMessage>
        </div>
      </Styled.ContentWrapper>
      <Styled.ButtonsWrapper>
        <Styled.ModalButton type="button" onClick={handleStepChange}>
          {t('modal.back')}
        </Styled.ModalButton>
        <Styled.ModalButtonDown disabled={isSubmitting} type="submit">
          {t('modal.done')}
        </Styled.ModalButtonDown>
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
