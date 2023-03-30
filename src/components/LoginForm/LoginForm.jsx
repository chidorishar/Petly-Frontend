import { useFormik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ErrorIcon } from 'assets/icons';
import { SuccessIcon } from 'assets/icons';

import { loginschema } from 'utils/validations';
import { ROUTES } from 'utils/appKeys';

import { useLoginUserMutation } from 'redux/slices/usersAPISlice';
import { useTranslation } from 'react-i18next';

import {
  Button,
  ContainerCardCommon,
  FormCommon,
  IconInput,
  InputCommon,
  InputWrapper,
  Link,
  Text,
  TextMessage,
  Title,
} from './LoginForm.styled';

export const LoginForm = () => {
  const [sendLoginRequest, { isSuccess }] = useLoginUserMutation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginschema,

    onSubmit: async values => {
      try {
        const {
          data: { user },
        } = await sendLoginRequest(values).unwrap();

        toast.success(`Welcome back, ${user.name}!`);
      } catch (error) {
        toast.error(
          error.status === 400
            ? t('notification.wrong')
            : t('notification.someWrong')
        );
      }
    },
  });

  useEffect(() => {
    if (isSuccess) {
      formik.resetForm();
    }
  }, [isSuccess, formik]);

  const ifCurrentEmail = () => {
    let currentColor = '';
    if (formik.touched.email) {
      if (formik.errors.email) {
        currentColor = '#E2001A';
      }
      if (formik.errors.email === undefined) {
        currentColor = '#3CBC81';
      }
      return currentColor;
    }
  };

  const ifCurrentPassword = () => {
    let currentColor = '';
    if (formik.touched.password) {
      if (formik.errors.password) {
        currentColor = '#E2001A';
      }
      if (formik.errors.password === undefined) {
        currentColor = '#3CBC81';
      }
      return currentColor;
    }
  };

  const { t } = useTranslation();

  return (
    <ContainerCardCommon>
      <Title>{t('login.login')}</Title>
      <FormCommon onSubmit={formik.handleSubmit}>
        <InputWrapper style={{ outlineColor: ifCurrentEmail() }}>
          <InputCommon
            type="email"
            name="email"
            placeholder={t('login.email')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          ></InputCommon>
          <IconInput>
            {formik.touched.email && formik.errors.email ? <ErrorIcon /> : null}
            {formik.touched.email && !formik.errors.email ? (
              <SuccessIcon />
            ) : null}
          </IconInput>
        </InputWrapper>
        {formik.touched.email && !formik.errors.email ? (
          <TextMessage style={{ color: '#3CBC81' }}>
            {t('notification.emailIsCor')}
          </TextMessage>
        ) : null}
        {formik.touched.email && formik.errors.email ? (
          <TextMessage style={{ color: '#E2001A' }}>
            {t(`${formik.errors.email}`)}
          </TextMessage>
        ) : null}
        <InputWrapper style={{ outlineColor: ifCurrentPassword() }}>
          <InputCommon
            type="password"
            name="password"
            placeholder={t('login.password')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          ></InputCommon>
          <IconInput>
            {formik.touched.password && formik.errors.password ? (
              <ErrorIcon />
            ) : null}
            {formik.touched.password && !formik.errors.password ? (
              <SuccessIcon />
            ) : null}
          </IconInput>
        </InputWrapper>
        {formik.touched.password && !formik.errors.password ? (
          <TextMessage style={{ color: '#3CBC81' }}>
            {t('notification.passwordIsSec')}
          </TextMessage>
        ) : null}
        {formik.touched.password && formik.errors.password ? (
          <TextMessage style={{ color: '#E2001A' }}>
            {t(`${formik.errors.password}`)}
          </TextMessage>
        ) : null}
        <Button disabled={isSuccess} type="submit">
          {t('login.login')}
        </Button>
      </FormCommon>
      <Text>
        {t('login.noacc')}
        <Link to={ROUTES.REGISTER}>{t('login.register')}</Link>
      </Text>
    </ContainerCardCommon>
  );
};
