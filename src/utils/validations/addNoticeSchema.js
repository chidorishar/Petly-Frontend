import * as Yup from 'yup';

const NOTICE_CATEGORY = {
  SELL: 'sell',
  FOR_FREE: 'for-free',
  LOST_FOUND: 'lost-found',
};

const NOTICE_CATEGORY_MAP = {
  sell: 'sell',
  forFree: 'for-free',
  lostFound: 'lost-found',
};

const NOTICE_GENDER = {
  MALE: 'male',
  FEMALE: 'female',
};

const nameRegexp = /^([a-zA-Zа-яА-ЯёЁёЁЇїІіҐґЄє\s]+)$/;
const locationRegexp =
  /^([a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-'`0-9]+(?:\s[a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-0-9]+)?),\s([a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-'`0-9]+(?:\s[a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F0-9]+)*)$/;
const birthdayRegexp = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/;
const validCategory = Object.values(NOTICE_CATEGORY);
const validGender = Object.values(NOTICE_GENDER);

const addNoticeSchema = Yup.object().shape({
  title: Yup.string()
    .required('validation.requiredT')
    .min(2)
    .max(48)
    .matches(nameRegexp, 'validation.titleLetters'),
  category: Yup.string()
    .oneOf(validCategory)
    .required('validation.requireCategory'),
  breed: Yup.string()
    .required('validation.requireBreed')
    .min(2)
    .max(24)
    .matches(nameRegexp, 'validation.requireBreedLetters'),
  location: Yup.string()
    .required('validation.requiredLocation')
    .matches(locationRegexp, 'validation.addressFormat'),
  birthDate: Yup.string()
    .required('validation.requiredBirthday')
    .matches(birthdayRegexp, 'validation.birthdayFormat'),
  name: Yup.string()
    .required('validation.requiredName')
    .min(2)
    .max(16)
    .matches(nameRegexp, 'validation.nameFormat'),
  sex: Yup.string().required('validation.requiredSex').oneOf(validGender),
  price: Yup.number().min(1),
  comments: Yup.string().required('validation.requiredComm').min(8).max(120),
  image: Yup.string().required('validation.requiredImg'),
});

export { addNoticeSchema, NOTICE_CATEGORY, NOTICE_GENDER, NOTICE_CATEGORY_MAP };
