import * as Yup from 'yup';

const NOTICE_CATEGORY = {
  SELL: 'sell',
  FOR_FREE: 'for-free',
  LOST_FOUND: 'lost-found',
};

const NOTICE_GENDER = {
  MALE: 'male',
  FEMALE: 'female',
};

const nameRegexp = /^([a-zA-Zа-яА-ЯёЁёЁЇїІіҐґЄє\s]+)$/;
const locationRegexp =
  /^([a-zA-Zа-яА-ЯІіЇїЄє]+){2}, ([a-zA-Zа-яА-ЯІіЇїЄє]+){2}$/;
const birthdayRegexp = /^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/;
const validCategory = Object.values(NOTICE_CATEGORY);
const validGender = Object.values(NOTICE_GENDER);

const addNoticeSchema = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2)
    .max(48)
    .matches(nameRegexp, 'Title must contain only letters'),
  category: Yup.string().oneOf(validCategory).required('Category is required'),
  breed: Yup.string()
    .required('Breed is required')
    .min(2)
    .max(24)
    .matches(nameRegexp, 'breed must contain only letters'),
  location: Yup.string()
    .required('Location is required')
    .matches(locationRegexp, 'Location must be in format City, Region'),
  birthDate: Yup.string()
    .required('Birthday is required')
    .matches(birthdayRegexp, 'Birthday must be in format 19.12.2020'),
  name: Yup.string()
    .required('Name is required')
    .min(2)
    .max(16)
    .matches(nameRegexp, 'Name must contain only letters'),
  sex: Yup.string().required('Sex is required').oneOf(validGender),
  price: Yup.number().min(1),
  comments: Yup.string().required('Comments is required').min(8).max(120),
  image: Yup.string().required('Image is required'),
});

export { addNoticeSchema, NOTICE_CATEGORY, NOTICE_GENDER };
