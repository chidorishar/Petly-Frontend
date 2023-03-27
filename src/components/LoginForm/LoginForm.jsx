import { useFormik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { ErrorIcon } from 'assets/icons';
import { SuccessIcon } from 'assets/icons';

import { loginschema } from 'utils/validations';
import { ROUTES } from 'utils/appKeys';

import { useLoginUserMutation } from 'redux/slices/usersAPISlice';

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
          error.status === 400 ? 'Wrong credentials!' : 'Something went wrong'
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

  return (
    <ContainerCardCommon>
      <Title>Login</Title>
      <FormCommon onSubmit={formik.handleSubmit}>
        <InputWrapper style={{ outlineColor: ifCurrentEmail() }}>
          <InputCommon
            type="email"
            name="email"
            placeholder="Email"
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
            Email is correct
          </TextMessage>
        ) : null}
        {formik.touched.email && formik.errors.email ? (
          <TextMessage style={{ color: '#E2001A' }}>
            {formik.errors.email}
          </TextMessage>
        ) : null}
        <InputWrapper style={{ outlineColor: ifCurrentPassword() }}>
          <InputCommon
            type="password"
            name="password"
            placeholder="Password"
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
            Password is secure
          </TextMessage>
        ) : null}
        {formik.touched.password && formik.errors.password ? (
          <TextMessage style={{ color: '#E2001A' }}>
            {formik.errors.password}
          </TextMessage>
        ) : null}
        <Button disabled={isSuccess} type="submit">
          Login
        </Button>
      </FormCommon>
      <Text>
        Don&#39;t have an account?&nbsp;
        <Link to={ROUTES.REGISTER}>Register</Link>
      </Text>
    </ContainerCardCommon>
  );
};
