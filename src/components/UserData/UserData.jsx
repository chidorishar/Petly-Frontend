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
import { useTranslation } from 'react-i18next';

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
    const response = await changeAvatar(formData);
    if (response.status === 201) onUserDataUpdated();
  };

  const { t } = useTranslation();

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
          <span>{t('user.edit')}</span>
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
    avatarURL: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  onUserDataUpdated: PropTypes.func.isRequired,
};
