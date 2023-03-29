import { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';

import PropTypes from 'prop-types';

import { ROUTES } from 'utils/appKeys';

import * as Styled from './RegisterForm.styled';
import { TextInput } from 'components/common';
import { useTranslation } from 'react-i18next';

const StepOne = ({ handleStepChange }) => {
  const { values, handleChange, validateField, errors, isValidating } =
    useFormikContext();
  const [stepIsPressed, setStepIsPressed] = useState(false);
  const ifCurrentIsInvalid =
    errors.email || errors.password || errors.confirmPassword;

  useEffect(() => {
    if (!ifCurrentIsInvalid && !isValidating && stepIsPressed) {
      handleStepChange();
    }
  }, [isValidating, ifCurrentIsInvalid, stepIsPressed]);

  const handleNextClick = async () => {
    validateField('email');
    validateField('password');
    validateField('confirmPassword');

    setStepIsPressed(true);
  };

  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Title>{t('registration.registration')}</Styled.Title>
      <Styled.InputWrapper>
        <TextInput
          errorText={errors.email}
          handleChange={handleChange}
          inputName="email"
          placeholder={t('login.email')}
          value={values.email}
        />
        <TextInput
          errorText={errors.password}
          handleChange={handleChange}
          inputName="password"
          placeholder={t('registration.password')}
          value={values.password}
          inputType="password"
        />
        <TextInput
          errorText={errors.confirmPassword}
          handleChange={handleChange}
          inputName="confirmPassword"
          placeholder={t('registration.confirm')}
          value={values.confirmPassword}
          inputType="password"
        />
      </Styled.InputWrapper>
      <Styled.ButtonWrapper>
        <Styled.Button type="button" onClick={handleNextClick}>
          {t('registration.next')}
        </Styled.Button>
      </Styled.ButtonWrapper>
      <Styled.BottomText>
        {t('registration.have')}{' '}
        <Styled.BottomLink to={ROUTES.LOGIN}>
          {t('registration.login')}
        </Styled.BottomLink>
      </Styled.BottomText>
    </Styled.Wrapper>
  );
};

StepOne.propTypes = {
  handleStepChange: PropTypes.func.isRequired,
};

export { StepOne };
