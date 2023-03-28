import * as Yup from 'yup';

const loginschema = Yup.object().shape({
  email: Yup.string()
    .required('Email is a required field')
    .email('Enter a valid Email'),
  password: Yup.string()
    .required('Password is a required field')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  /* confirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Must match "password" field value'
  ), */
});

export { loginschema };
