/**
 * File contains reusable yup validation schemas.
 */

import * as Yup from 'yup';

const passwordRegexp =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&()-_/#:;<>])[A-Za-z\d@$!%*?&]/;

const phoneRegexp = /^\+380\d{3}\d{2}\d{2}\d{2}$/;

const passwordSchema = Yup.string()
  .matches(
    passwordRegexp,
    'At least one number and one special character required'
  )
  .min(7, 'Must be at least 7 characters long')
  .max(32, 'Must be at most 32 characters long')
  .required('Password is required');

const emailSchema = Yup.string()
  .email('Email is invalid')
  .required('Email is required');

const phoneSchema = Yup.string()
  .matches(phoneRegexp, 'Phone number is invalid')
  .required('Mobile phone is required');

export { passwordSchema, emailSchema, phoneSchema };
