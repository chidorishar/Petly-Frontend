/**
 * File contains reusable yup validation schemas.
 */

import * as Yup from 'yup';

const passwordSchema = Yup.string().required('Password is required');

// TODO: Add regexp for password
const emailSchema = Yup.string()
  .email('Email is invalid')
  .required('Email is required');

// TODO: Add regexp for phone
const phoneSchema = Yup.string().required('Mobile phone is required');

export { passwordSchema, emailSchema, phoneSchema };
