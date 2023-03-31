import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { NOTICE_CATEGORY } from 'utils/validations';
import * as Styled from './AddNoticeForm.styled';
import { useTranslation } from 'react-i18next';

const StepOne = ({ handleNext, handleCancel, animationState, refProp }) => {
  const { t } = useTranslation();
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
        <Styled.Title>{t('notices.add')}</Styled.Title>
        <Styled.NoticeDescription>{t('notices.text')}</Styled.NoticeDescription>
        <Styled.OptionsWrapper>
          <Styled.ModalButton
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.LOST_FOUND)}
            // isActive={values.category === NOTICE_CATEGORY.LOST_FOUND}
          >
            {t('notices.lost')}
          </Styled.ModalButton>
          <Styled.ModalButton
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.FOR_FREE)}
            // isActive={values.category === NOTICE_CATEGORY.FOR_FREE}
          >
            {t('notices.free')}
          </Styled.ModalButton>
          <Styled.ModalButton
            type="button"
            onClick={handleCategoryChange(NOTICE_CATEGORY.SELL)}
            // isActive={values.category === NOTICE_CATEGORY.SELL}
          >
            {t('notices.sell')}
          </Styled.ModalButton>
        </Styled.OptionsWrapper>
        <div>
          <Styled.Subtitle>{t('notices.title')}</Styled.Subtitle>
          <Styled.InputCommon
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder={t('modal.titlePl')}
            style={
              errors.title
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{t(errors.title)}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>{t('registration.name')}</Styled.Subtitle>
          <Styled.InputCommon
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder={t('userModal.namePl')}
            style={
              errors.name
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{t(errors.name)}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>{t('modal.birth')}</Styled.Subtitle>
          <Styled.InputCommon
            name="birthDate"
            value={values.birthDate}
            onChange={handleChange}
            placeholder={t('userModal.birth')}
            style={
              errors.birthDate
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{t(errors.birthDate)}</Styled.TextMessage>
        </div>
        <div>
          <Styled.Subtitle>{t('modal.breed')}</Styled.Subtitle>
          <Styled.InputCommon
            name="breed"
            value={values.breed}
            onChange={handleChange}
            placeholder={t('userModal.breedPl')}
            style={
              errors.breed
                ? { outlineColor: '#E2001A' }
                : { outlineColor: 'rgba(245, 146, 86, 0.5)' }
            }
          />
          <Styled.TextMessage>{t(errors.breed)}</Styled.TextMessage>
        </div>
      </Styled.ContentWrapper>

      <Styled.ButtonsWrapper>
        <Styled.ModalButton type="button" onClick={handleCancel}>
          {t('modal.canc')}
        </Styled.ModalButton>
        <Styled.ModalButtonDown type="button" onClick={handleNextClick}>
          {t('modal.next')}
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
