/**
 * File contains validation schema for register page.
 */

import * as Yup from 'yup';

import { passwordSchema, emailSchema, phoneSchema } from './common';

const locationRegexp =
  /^([a-zA-Zа-яА-ЯІіЇїЄє]+){2}, ([a-zA-Zа-яА-ЯІіЇїЄє]+){2}$/;

const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  ),
  name: Yup.string().required('Name is required'),
  location: Yup.string()
    .matches(locationRegexp, 'Must be in format: City, Region')
    .required('City, region is required'),
  phone: phoneSchema,
});

export { registerSchema };
