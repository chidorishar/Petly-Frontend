import React, { useState } from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';

import {
  UserInput,
  UserLabel,
  UserSpan,
  EditBtn,
  FormBox,
} from './UserDataItem.styled';

import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { BACKEND_BASE_URL, BACKEND_ENDPOINTS } from 'utils/appKeys';

const updateUserDataInBD = async dataObject => {
  return await axios.patch(
    `http://${BACKEND_BASE_URL}/api/${BACKEND_ENDPOINTS.UPDATE_USER_INFO}`,
    dataObject
  );
};

export const UserDataItem = ({ user, onUserDataUpdated }) => {
  const {
    name: userName = '',
    email: userEmail = '',
    birthday: userBirthdayDate = '',
    phone: userPhone = '',
    location: userLocation = '',
  } = user;

  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [birthday, setBirthday] = useState(userBirthdayDate);
  const [phone, setPhone] = useState(userPhone);
  const [location, setLocation] = useState(userLocation);
  const elementsData = {
    name: {
      id: 0,
      name: 'name',
      text: 'Name:',
      value: name,
      placeholder: 'Your name',
      type: 'text',
      pattern: /^[a-zA-Z0-9_]{3,16}$/,
      initialValue: userName,
      changeValueMethod: setName,
    },
    email: {
      id: 1,
      name: 'email',
      text: 'Email:',
      value: email,
      placeholder: 'user@email.com',
      type: 'email',
      pattern: /^([\w.%+-]+)@([\w-]+\.)+([\w]+)/,
      initialValue: userEmail,
      changeValueMethod: setEmail,
    },
    birthday: {
      id: 2,
      name: 'birthday',
      text: 'Birthday:',
      value: birthday,
      placeholder: '01.01.2023',
      type: 'text',
      pattern: /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/,
      initialValue: userBirthdayDate,
      changeValueMethod: setBirthday,
    },
    phone: {
      id: 3,
      name: 'phone',
      text: 'Phone:',
      value: phone,
      placeholder: '+380XXXXXXXXX',
      type: 'text',
      pattern: /^\+380\d{9}$/,
      initialValue: userPhone,
      changeValueMethod: setPhone,
    },
    location: {
      id: 4,
      name: 'location',
      text: 'City:',
      value: location,
      placeholder: 'Brovary, Kiev',
      type: 'text',
      pattern: /^[A-Z][a-z]+[,][ ][A-Z][a-z]+$/,
      initialValue: userLocation,
      changeValueMethod: setLocation,
    },
  };

  const [currEditedInputName, setCurrEditedInputName] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isInputDataNotValid, setIsInputDataNotValid] = useState(false);

  const updateUserData = async dataObject => {
    try {
      const res = await updateUserDataInBD(dataObject);
      if (res.status === 200) onUserDataUpdated();
    } catch (error) {
      console.log(`Error updating user data ${error}`);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    const currElement = elementsData[name];

    setIsInputDataNotValid(value.match(currElement.pattern) ? false : true);
    currElement.changeValueMethod(value);
  };

  const handleEditButtonClick = e => {
    e.preventDefault();
    const inputNameToSwitchTo = e.currentTarget.dataset.elName;

    // currently there is no active input
    if (!isEditing) {
      setIsEditing(true);
      setCurrEditedInputName(inputNameToSwitchTo);
      return;
    }

    const currentElement = elementsData[currEditedInputName];
    const currElInitialValue = currentElement.initialValue;
    const isInputContentChanged = currElInitialValue !== currentElement.value;

    //reset current input value if input has invalid data
    if (isInputDataNotValid) {
      currentElement.changeValueMethod(currElInitialValue);
    } else if (isInputContentChanged) {
      updateUserData({ [currEditedInputName]: currentElement.value });
    }

    // if clicked on the same input's edit button
    if (isEditing && inputNameToSwitchTo === currEditedInputName) {
      setCurrEditedInputName(null);
      setIsEditing(false);
      return;
    }

    // if clicked on another input's edit button
    setCurrEditedInputName(inputNameToSwitchTo);
  };

  /** handle escape key press */
  const handleKeyDown = event => {
    if (event.code !== 'Escape' || !currEditedInputName) return;

    const currElement = elementsData[currEditedInputName];
    if (isInputDataNotValid) {
      currElement.changeValueMethod(currElement.initialValue);
    } else if (currElement.initialValue !== currElement.value)
      updateUserData({ [currElement.name]: currElement.value });

    setCurrEditedInputName(null);
    setIsEditing(false);
  };

  return (
    <FormBox>
      <form type="submit" onKeyDown={handleKeyDown}>
        {Object.values(elementsData).map(el => {
          const elName = el.name;

          return (
            <UserLabel key={el.id}>
              <UserSpan>{el.text}</UserSpan>
              <UserInput
                type={el.type}
                name={elName}
                value={el.value ?? ''}
                placeholder={el.placeholder}
                className={
                  isInputDataNotValid
                    ? currEditedInputName === elName
                      ? 'enabled error'
                      : ''
                    : currEditedInputName === elName
                    ? 'enabled'
                    : ''
                }
                disabled={currEditedInputName !== elName}
                onChange={handleInputChange}
              />
              <EditBtn
                data-el-name={elName}
                onClick={handleEditButtonClick}
                className={
                  isEditing && currEditedInputName !== elName ? 'disabled' : ''
                }
              >
                {isEditing && currEditedInputName === elName ? (
                  <FaCheck fill={'currentColor'} />
                ) : (
                  <MdEdit fill={'currentColor'} />
                )}
              </EditBtn>
            </UserLabel>
          );
        })}
      </form>
    </FormBox>
  );
};

UserDataItem.propTypes = {
  onUserDataUpdated: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
};

//old code
/*
        <UserLabel>
          <UserSpan>Name:</UserSpan>
          <UserInput
            type="text"
            name="name"
            value={name ?? ''}
            placeholder="Your name"
            className={
              errorInput
                ? currEditInputID === 0
                  ? 'enabled error'
                  : ''
                : currEditInputID === 0
                ? 'enabled'
                : ''
            }
            disabled={currEditInputID !== 0}
            onChange={handleInputChange}
          />
          <EditBtn
            data-type="name"
            onClick={e => handleEnableToEdit(0, e)}
            className={isClicked && currEditInputID !== 0 ? 'disabled' : ''}
          >
            {isClicked && currEditInputID === 0 ? (
              <FaCheck fill={'currentColor'} />
            ) : (
              <MdEdit fill={'currentColor'} />
            )}
          </EditBtn>
        </UserLabel>

        <UserLabel>
          <UserSpan>Email:</UserSpan>
          <UserInput
            type="email"
            name="email"
            value={email ?? ''}
            placeholder="user@email.com"
            className={
              errorInput
                ? currEditInputID === 1
                  ? 'enabled error'
                  : ''
                : currEditInputID === 1
                ? 'enabled'
                : ''
            }
            disabled={currEditInputID !== 1}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn
            data-type="email"
            onClick={e => handleEnableToEdit(1, e)}
            className={isClicked && currEditInputID !== 1 ? 'disabled' : ''}
          >
            {isClicked && currEditInputID === 1 ? (
              <FaCheck fill={'currentColor'} />
            ) : (
              <MdEdit fill={'currentColor'} />
            )}
          </EditBtn>
        </UserLabel>
        <UserLabel>
          <UserSpan>Birthday:</UserSpan>
          <UserInput
            type="text"
            name="date"
            value={date ?? ''}
            placeholder="01.01.2023"
            className={
              errorInput
                ? currEditInputID === 2
                  ? 'enabled error'
                  : ''
                : currEditInputID === 2
                ? 'enabled'
                : ''
            }
            disabled={currEditInputID !== 2}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn
            data-type="date"
            onClick={e => handleEnableToEdit(2, e)}
            className={isClicked && currEditInputID !== 2 ? 'disabled' : ''}
          >
            {isClicked && currEditInputID === 2 ? (
              <FaCheck fill={'currentColor'} />
            ) : (
              <MdEdit fill={'currentColor'} />
            )}
          </EditBtn>
        </UserLabel>
        <UserLabel>
          <UserSpan>Phone:</UserSpan>
          <UserInput
            type="phone"
            name="phone"
            value={phone ?? ''}
            placeholder="+380XXXXXXXXX"
            className={
              errorInput
                ? currEditInputID === 3
                  ? 'enabled error'
                  : ''
                : currEditInputID === 3
                ? 'enabled'
                : ''
            }
            disabled={currEditInputID !== 3}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn
            data-type="phone"
            onClick={e => handleEnableToEdit(3, e)}
            className={isClicked && currEditInputID !== 3 ? 'disabled' : ''}
          >
            {isClicked && currEditInputID === 3 ? (
              <FaCheck fill={'currentColor'} />
            ) : (
              <MdEdit fill={'currentColor'} />
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
            className={
              errorInput
                ? currEditInputID === 4
                  ? 'enabled error'
                  : ''
                : currEditInputID === 4
                ? 'enabled'
                : ''
            }
            disabled={currEditInputID !== 4}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <EditBtn data-type="city" onClick={e => handleEnableToEdit(4, e)}>
            {isClicked && activeType === 'city' ? (
              <FaCheck
                fill={errorInput ? theme.colors.heading : theme.colors.accent}
              />
            ) : (
              <MdEdit
                fill={isClicked ? theme.colors.heading : theme.colors.accent}
              />
            )}
          </EditBtn>
        </UserLabel>
*/
