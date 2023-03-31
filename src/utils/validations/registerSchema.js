/**
 * File contains validation schema for register page.
 */

import * as Yup from 'yup';
// import i18n from 'i18next';

import { passwordSchema, emailSchema, phoneSchema } from './common';

const locationRegexp =
  /^([a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-'`0-9]+(?:\s[a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-0-9]+)?),\s([a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-'`0-9]+(?:\s[a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F0-9]+)*)$/;

const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [Yup.ref('password'), null],
    'validation.passMatch'
  ),
  name: Yup.string()
    .required('validation.requiredName')
    .matches(
      /^([a-zA-Z-яА-ЯІіЇїЄє\u0410-\u044F]+[-]?[a-zA-Z-яА-ЯІіЇїЄє\u0410-\u044F]+)+([ ]?[a-zA-Z-яА-ЯІіЇїЄє\u0410-\u044F]+[-]?[a-zA-Z-яА-ЯІіЇїЄє\u0410-\u044F]+)+[ ]?([a-zA-Z-яА-ЯІіЇїЄє\u0410-\u044F]+)$/,
      'validation.requiredName'
    )
    .max(40, 'validation.validName'),
  location: Yup.string()
    .matches(locationRegexp, 'validation.addressFormat')
    .required('validation.requiredLocation'),
  phone: phoneSchema,
});

export { registerSchema };
