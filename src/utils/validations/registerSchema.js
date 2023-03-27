/**
 * File contains validation schema for register page.
 */

import * as Yup from 'yup';
import i18n from 'i18next';

import { passwordSchema, emailSchema, phoneSchema } from './common';

const registerSchema = Yup.object({
  email: emailSchema,
  password: passwordSchema,
  confirmPassword: passwordSchema.oneOf(
    [Yup.ref('password'), null],
    i18n.t('validation.passMatch')
  ),
  name: Yup.string().required(i18n.t('validation.requiredName')),
  location: Yup.string().required(i18n.t('validation.requiredLocation')),
  phone: phoneSchema,
});

export { registerSchema };
