import React, { useEffect, useState } from 'react';
import {
  UserInput,
  UserLabel,
  UserSpan,
  EditBtn,
  FormBox,
} from './UserDataItem.styled';

import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { theme } from 'utils';

export const UserDataItem = user => {
  const [currEditInputID, setCurrEditInputID] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [activeType, setActiveType] = useState('');
  const { userName, userEmail, userDate, userPhone, userCity } = user;
  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
    setDate(userDate);
    setPhone(userPhone);
    setCity(userCity);
  }, [user]);

  const handleInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'email':
        setEmail(e.target.value);
        break;

      case 'date':
        setDate(e.target.value);
        break;

      case 'phone':
        setPhone(e.target.value);
        break;

      case 'city':
        setCity(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleEnableToEdit = (index, e) => {
    e.preventDefault();

    if (isClicked && e.currentTarget.dataset.type !== activeType) {
      return;
    }
    setActiveType(e.currentTarget.dataset.type);
    setIsClicked(!isClicked);
    setCurrEditInputID(prevState => {
      return prevState !== index ? index : null;
    });
  };
  const handleKeyDown = event => {
    if (event.keyCode === 13) {
      setCurrEditInputID(null);
      setIsClicked(false);
    }
  };
  return (
    <FormBox>
      <form type="submit">
        <UserLabel>
          <UserSpan>Name:</UserSpan>
          <UserInput
            type="text"
            name="name"
            value={name ?? ''}
            placeholder="Your name"
            className={currEditInputID === 0 ? 'enabled' : ''}
            disabled={currEditInputID !== 0}
            onChange={handleInputChange}
          />
          <EditBtn
            data-type="name"
            onClick={e => handleEnableToEdit(0, e)}
            color="red"
          >
            {isClicked && activeType === 'name' ? (
              <FaCheck fill={theme.colors.accent} />
            ) : (
              <MdEdit
                fill={isClicked ? theme.colors.heading : theme.colors.accent}
              />
            )}
          </EditBtn>
        </UserLabel>
        <UserLabel>
          <UserSpan>Email:</UserSpan>
          <UserInput
            type="email"
            name="email"
            value={email ?? ''}
            placeholder="Your email"
            className={currEditInputID === 1 ? 'enabled' : ''}
            disabled={currEditInputID !== 1}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn data-type="email" onClick={e => handleEnableToEdit(1, e)}>
            {isClicked && activeType === 'email' ? (
              <FaCheck fill={theme.colors.accent} />
            ) : (
              <MdEdit
                fill={isClicked ? theme.colors.heading : theme.colors.accent}
              />
            )}
          </EditBtn>
        </UserLabel>
        <UserLabel>
          <UserSpan>Birthday:</UserSpan>
          <UserInput
            type="text"
            name="date"
            value={date ?? ''}
            placeholder="Your birthday"
            className={currEditInputID === 2 ? 'enabled' : ''}
            disabled={currEditInputID !== 2}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn data-type="date" onClick={e => handleEnableToEdit(2, e)}>
            {isClicked && activeType === 'date' ? (
              <FaCheck fill={theme.colors.accent} />
            ) : (
              <MdEdit
                fill={isClicked ? theme.colors.heading : theme.colors.accent}
              />
            )}
          </EditBtn>
        </UserLabel>
        <UserLabel>
          <UserSpan>Phone:</UserSpan>
          <UserInput
            type="phone"
            name="phone"
            value={phone ?? ''}
            placeholder="Your phone"
            className={currEditInputID === 3 ? 'enabled' : ''}
            disabled={currEditInputID !== 3}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn data-type="phone" onClick={e => handleEnableToEdit(3, e)}>
            {isClicked && activeType === 'phone' ? (
              <FaCheck fill={theme.colors.accent} />
            ) : (
              <MdEdit
                fill={isClicked ? theme.colors.heading : theme.colors.accent}
              />
            )}
          </EditBtn>
        </UserLabel>
        <UserLabel>
          <UserSpan>City:</UserSpan>
          <UserInput
            type="text"
            name="city"
            value={city ?? ''}
            placeholder="Your city"
            className={currEditInputID === 4 ? 'enabled' : ''}
            disabled={currEditInputID !== 4}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn data-type="city" onClick={e => handleEnableToEdit(4, e)}>
            {isClicked && activeType === 'city' ? (
              <FaCheck fill={theme.colors.accent} />
            ) : (
              <MdEdit
                fill={isClicked ? theme.colors.heading : theme.colors.accent}
              />
            )}
          </EditBtn>
        </UserLabel>
      </form>
    </FormBox>
  );
};
