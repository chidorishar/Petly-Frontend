import { TextInput } from 'components/common';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

import * as Styled from './RegisterForm.styled';
import { useTranslation } from 'react-i18next';

const StepTwo = ({ handleStepChange, animationState, refProp }) => {
  const { values, handleChange, errors } = useFormikContext();

  const handlePrevClick = () => {
    handleStepChange();
  };
  const { t } = useTranslation();

  return (
    <Styled.WrapperTwo state={animationState} ref={refProp}>
      <Styled.Title>{t('registration.registration')}</Styled.Title>
      <Styled.InputWrapper>
        <TextInput
          inputName="name"
          placeholder={t('registration.name')}
          value={values.name}
          errorText={t(errors.name)}
          handleChange={handleChange}
        />
        <TextInput
          inputName="location"
          placeholder={t('registration.city')}
          value={values.location}
          errorText={t(errors.location)}
          handleChange={handleChange}
        />
        <TextInput
          inputName="phone"
          placeholder={t('registration.phone')}
          value={values.phone}
          errorText={t(errors.phone)}
          handleChange={handleChange}
        />
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <Styled.Button type="submit">
          {t('registration.register')}
        </Styled.Button>
        <Styled.Button type="button" onClick={handlePrevClick} isLight>
          {t('registration.back')}
        </Styled.Button>
      </Styled.ButtonWrapper>
      <Styled.BottomText>
        {t('registration.have')}{' '}
        <Styled.BottomLink to={ROUTES.LOGIN}>
          {t('registration.login')}
        </Styled.BottomLink>
      </Styled.BottomText>
    </Styled.WrapperTwo>
  );
};

StepTwo.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
  animationState: PropTypes.string.isRequired,
  refProp: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export { StepTwo };
