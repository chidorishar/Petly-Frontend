/**
 * File contains reusable yup validation schemas.
 */

import * as Yup from 'yup';
import i18n from 'i18next';

const passwordSchema = Yup.string().required(i18n.t('validation.requiredPass'));

// TODO: Add regexp for password
const emailSchema = Yup.string()
  .email(i18n.t('validation.invalidEmail'))
  .required(i18n.t('validation.requiredEmail'));

// TODO: Add regexp for phone
const phoneSchema = Yup.string().required(i18n.t('validation.requiredPhone'));

export { passwordSchema, emailSchema, phoneSchema };
