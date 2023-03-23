import { useState } from 'react';
import {
  UserInput,
  UserTitle,
  UserImageWrapper,
  UserLabel,
  UserSpan,
  EditPhotoLabel,
  UserWrapper,
  EditAvatarIcon,
  AvatarInput,
} from './UserData.styled';

import sprite from 'images/sprite.svg';

export const UserData = () => {
  const [currEditInputID, setCurrEditInputID] = useState(null);

  return (
    <>
      <UserTitle>My information:</UserTitle>
      <UserWrapper>
        <UserImageWrapper>
          <img
            src="https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
            alt="User Photo"
            style={{ borderRadius: '50%', objectFit: 'contain' }}
          />
          <EditPhotoLabel>
            <AvatarInput name="img" type="file" accept="image/*" />
            <EditAvatarIcon>
              <use href={sprite + '#camera'} />
            </EditAvatarIcon>
            <span>Edit Photo</span>
          </EditPhotoLabel>
        </UserImageWrapper>

        {/* UserForm component */}
        <form type="submit">
          <UserLabel>
            <UserSpan>Name:</UserSpan>
            <UserInput
              type="text"
              value="Anna"
              className={currEditInputID === 0 ? 'enabled' : ''}
            />
            <button
              onClick={() => {
                setCurrEditInputID(prevState => {
                  return prevState !== 0 ? 0 : null;
                });
              }}
            >
              Edit
            </button>
          </UserLabel>
          <UserLabel>
            <UserSpan>Email:</UserSpan>
            <UserInput
              type="email"
              value="anna00@gmail.com"
              className={currEditInputID === 1 ? 'enabled' : ''}
            />
            <button
              onClick={() => {
                setCurrEditInputID(prevState => {
                  return prevState !== 1 ? 1 : null;
                });
              }}
            >
              Edit
            </button>
          </UserLabel>
          <UserLabel>
            <UserSpan>Birthday:</UserSpan>
            <UserInput type="text" value="00.00.0000" />
          </UserLabel>
          <UserLabel>
            <UserSpan>Phone:</UserSpan>
            <UserInput type="phone" value="+38000000000" />
          </UserLabel>
          <UserLabel>
            <UserSpan>City:</UserSpan>
            <UserInput type="text" value="Kiev" />
          </UserLabel>
        </form>
        {/* ....... */}
      </UserWrapper>
    </>
  );
};
