/**
 * File contains reusable yup validation schemas.
 */

import * as Yup from 'yup';

/* const passwordRegexp =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()-_/#:;<>])[A-Za-z\d@$!%*?&]/; */

const emailRegexp =
  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const passwordSchema = Yup.string()
  .required('Password is a required field')
  .min(8, 'Password must be at least 8 characters')
  .matches(/[0-9]/, 'Password requires a number')
  .matches(/[a-z]/, 'Password requires a lowercase letter')
  .matches(/[A-Z]/, 'Password requires an uppercase letter')
  .matches(/[^\w]/, 'Password requires a symbol');
/* .required('Password is required')
  .min(7, 'Must be at least 7 characters long')
  .max(32, 'Must be at most 32 characters long')
  .matches(
    passwordRegexp,
    'At least one number and one special character required'
  ); */

const emailSchema = Yup.string()
  .email('Email is invalid')
  .matches(emailRegexp, 'Email is invalid')
  .required('Email is required');

const phoneSchema = Yup.string()
  .required('Mobile phone is required')
  .matches(phoneRegexp, 'Phone number is invalid');

export { passwordSchema, emailSchema, phoneSchema };
