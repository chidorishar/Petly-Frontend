import { Logout } from 'components/Logout/Logout';
import PropTypes from 'prop-types';
import {
  UserInput,
  UserImageWrapper,
  UserLabel,
  UserSpan,
  EditPhotoLabel,
  EditAvatarIcon,
  AvatarInput,
  Form,
  FormWrapper,
  UserImage,
} from './UserData.styled';

import sprite from 'images/sprite.svg';

import userDefaultImage from 'images/userDefaultImage.jpg';

export const UserData = ({ user }) => {
  const {
    avatarURL = userDefaultImage,
    birthday,
    email,
    name,
    phone,
    location,
  } = user;

  return (
    <>
      <UserImageWrapper>
        <UserImage src={avatarURL} alt="User Photo" />
        <EditPhotoLabel>
          <AvatarInput name="img" type="file" accept="image/*" />
          <EditAvatarIcon>
            <use href={sprite + '#camera'} />
          </EditAvatarIcon>
          <span>Edit Photo</span>
        </EditPhotoLabel>
      </UserImageWrapper>
      {/* Контейнер FormWrapper потрібний для зміни позиціонування компонентів UserForm та Logout */}
      <FormWrapper>
        {/* UserForm component */}
        <Form type="submit">
          <UserLabel>
            <UserSpan>Name:</UserSpan>
            <UserInput type="text" value={name} />
          </UserLabel>
          <UserLabel>
            <UserSpan>Email:</UserSpan>
            <UserInput type="email" value={email} />
          </UserLabel>
          <UserLabel>
            <UserSpan>Birthday:</UserSpan>
            <UserInput
              type="text"
              value={new Date(birthday).toLocaleString().split(',')[0]}
            />
          </UserLabel>
          <UserLabel>
            <UserSpan>Phone:</UserSpan>
            <UserInput type="phone" value={phone} />
          </UserLabel>
          <UserLabel>
            <UserSpan>City:</UserSpan>
            <UserInput type="text" value={location.split(',')[0]} />
          </UserLabel>
        </Form>
        {/* ....... */}

        <Logout userInfo={(birthday, email, name, phone, location)} />
      </FormWrapper>
    </>
  );
};

UserData.propTypes = {
  user: PropTypes.shape({
    avatarURL: PropTypes.string,
    birthday: PropTypes.string,
    email: PropTypes.string,
    name: PropTypes.string,
    phone: PropTypes.string,
    location: PropTypes.string,
  }),
};
