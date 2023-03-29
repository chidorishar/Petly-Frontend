/**
 * File contains validation schema for register page.
 */

import * as Yup from 'yup';
import i18n from 'i18next';

import { passwordSchema, emailSchema, phoneSchema } from './common';

const locationRegexp =
  /^([a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F]+[a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-'`0-9]+){1}, ([-'a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F`]+){2}$/;

const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [Yup.ref('password'), null],
    i18n.t('validation.passMatch')
  ),
  name: Yup.string()
    .required('Name is required')
    .matches(
      /^([a-zA-Z]+[-]?[a-zA-Z]+)+[ ]?([a-zA-Z]+)$/,
      i18n.t('validation.requiredName')
    )
    .max(40, 'Please enter valid name'),
  location: Yup.string()
    .matches(locationRegexp, i18n.t('validation.addressFormat'))
    .required(i18n.t('validation.requiredLocation')),
  phone: phoneSchema,
});

export { registerSchema };
