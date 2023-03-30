import * as Yup from 'yup';

const loginschema = Yup.object().shape({
  email: Yup.string()
    .required('validation.requiredEmail')
    .email('validation.invalidEmail'),
  password: Yup.string()
    .required('validation.requiredPass')
    .min(8, 'validation.passMin')
    .matches(/[0-9]/, 'validation.passNumber')
    .matches(/[a-z]/, 'validation.passLowercase')
    .matches(/[A-Z]/, 'validation.passUppercase')
    .matches(/[^\w]/, 'validation.passSymbol'),
});

export { loginschema };
