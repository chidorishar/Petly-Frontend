import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ROUTES } from 'utils/appKeys';
import {
  Button,
  ContainerCardCommon,
  FormCommon,
  InputCommon,
  Link,
  Text,
  TextMessage,
  Title,
} from './LoginForm.styled';

const Loginschema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Enter a valid Email'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter'),
  confirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Must match "password" field value'
  ),
});

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Loginschema,

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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

  return (
    <ContainerCardCommon>
      <Title>Login</Title>
      <FormCommon onSubmit={formik.handleSubmit}>
        <InputCommon
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="on"
          autoFocus
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          style={{ outlineColor: ifCurrentEmail() }}
        ></InputCommon>
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
        <InputCommon
          type="password"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          style={{ outlineColor: ifCurrentPassword() }}
        ></InputCommon>
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
        <Button disabled={!formik.isValid || formik.isSubmitting} type="submit">
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
