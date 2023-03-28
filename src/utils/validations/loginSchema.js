import * as Yup from 'yup';
import i18n from 'i18next';

const loginschema = Yup.object().shape({
  email: Yup.string()
    .required(i18n.t('validation.requiredEmail'))
    .email(i18n.t('validation.invalidEmail')),
  password: Yup.string()
    .required(i18n.t('validation.requiredPass'))
    .min(8, i18n.t('validation.passMin'))
    .matches(/[0-9]/, i18n.t('validation.passNumber'))
    .matches(/[a-z]/, i18n.t('validation.passLowercase'))
    .matches(/[A-Z]/, i18n.t('validation.passUppercase'))
    .matches(/[^\w]/, i18n.t('validation.passSymbol')),
  confirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    i18n.t('validation.confirm')
  ),
});

export { loginschema };
