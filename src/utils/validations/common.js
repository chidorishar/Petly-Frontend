/**
 * File contains reusable yup validation schemas.
 */

import * as Yup from 'yup';

/* const passwordRegexp =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()-_/#:;<>])[A-Za-z\d@$!%*?&]/; */

const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const passwordSchema = Yup.string()
  .required('validation.requiredPass')
  .min(8, 'validation.passMin')
  .matches(/[0-9]/, 'validation.passNumber')
  .matches(/[a-z]/, 'validation.passLowercase')
  .matches(/[A-Z]/, 'validation.passUppercase')
  .matches(/[^\w]/, 'validation.passSymbol');
/* .required('Password is required')
  .min(7, 'Must be at least 7 characters long')
  .max(32, 'Must be at most 32 characters long')
  .matches(
    passwordRegexp,
    'At least one number and one special character required'
  ); */

const emailSchema = Yup.string()
  .email('validation.invalidEmail')
  .matches(emailRegexp, 'validation.invalidEmail')
  .required('validation.requiredEmail');

const phoneSchema = Yup.string()
  .required('validation.requiredPhone')
  .matches(phoneRegexp, 'validation.phoneInvalid');

export { passwordSchema, emailSchema, phoneSchema };
