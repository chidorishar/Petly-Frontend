import { Logout } from 'components/Logout/Logout';
import PropTypes from 'prop-types';
import {
  UserImageWrapper,
  EditPhotoLabel,
  EditAvatarIcon,
  AvatarInput,
  UserDataWrapper,
  UserImage,
} from './UserData.styled';

import sprite from 'images/sprite.svg';

import userDefaultImage from 'images/userDefaultImage.jpg';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import { changeAvatar } from 'redux/hooks/changeAvatar';

export const UserData = ({ user, onUserDataUpdated }) => {
  const {
    avatarURL = userDefaultImage,
    birthday,
    email,
    name,
    phone,
    location,
  } = user;

  const addAvatar = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatarImg', e.target.files[0]);
    changeAvatar(formData);
    // console.log(formData.get('file'));
  };

  return (
    <>
      <UserImageWrapper>
        <UserImage src={avatarURL} alt="User Photo" />
        <EditPhotoLabel>
          <AvatarInput
            name="avatarImage"
            type="file"
            accept="image/*"
            onChange={addAvatar}
          />
          <EditAvatarIcon>
            <use href={sprite + '#camera'} />
          </EditAvatarIcon>
          <span>Edit Photo</span>
        </EditPhotoLabel>
      </UserImageWrapper>
      <UserDataWrapper>
        <UserDataItem
          user={{ birthday, email, name, phone, location }}
          onUserDataUpdated={onUserDataUpdated}
        />
        <Logout />
      </UserDataWrapper>
    </>
  );
};

UserData.propTypes = {
  user: PropTypes.shape({
    avatarURL: PropTypes.string,
    birthday: PropTypes.string,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  onUserDataUpdated: PropTypes.func.isRequired,
};
