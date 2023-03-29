/**
 * File contains validation schema for register page.
 */

import * as Yup from 'yup';

import { passwordSchema, emailSchema, phoneSchema } from './common';

const locationRegexp =
  /^([-'a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F`]+){2}, ([-'a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F`]+){2}$/;

const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  name: Yup.string()
    .required('Name is required')
    .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(40, 'Please enter valid name'),
  location: Yup.string()
    .matches(locationRegexp, 'Must be in format: City, Region')
    .required('City, region is required'),
  phone: phoneSchema,
});

export { registerSchema };
