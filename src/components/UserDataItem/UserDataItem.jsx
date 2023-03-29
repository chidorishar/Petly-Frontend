import React, { useState } from 'react';
import axios from 'axios';
import { PropTypes } from 'prop-types';

import {
  UserInput,
  UserLabel,
  UserSpan,
  EditBtn,
  Form,
} from './UserDataItem.styled';

import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { BACKEND_BASE_URL, BACKEND_ENDPOINTS } from 'utils/appKeys';
import { dateConverter } from 'utils';
import i18n from 'i18next';
const updateUserDataInBD = async dataObject => {
  return await axios.patch(
    `${BACKEND_BASE_URL}/api/${BACKEND_ENDPOINTS.UPDATE_USER_INFO}`,
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
  const [birthday, setBirthday] = useState(
    dateConverter(userBirthdayDate, 'dd.MM.yyyy')
  );
  const [phone, setPhone] = useState(userPhone);
  const [location, setLocation] = useState(userLocation);

  const elementsData = {
    name: {
      id: 0,
      name: 'name',
      text: i18n.t('user.name'),
      value: name,
      placeholder: i18n.t('user.namePl'),
      type: 'text',
      pattern: /^([a-zA-Z]+[-]?[a-zA-Z]+)+[ ]?([a-zA-Z]+)$/,
      initialValue: userName,
      changeValueMethod: setName,
    },
    email: {
      id: 1,
      name: 'email',
      text: i18n.t('user.email'),
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
      text: i18n.t('user.birthday'),
      value: birthday,
      placeholder: '01.01.2023',
      type: 'text',
      pattern: /^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/,
      initialValue: dateConverter(userBirthdayDate, 'dd.MM.yyyy'),
      changeValueMethod: setBirthday,
    },
    phone: {
      id: 3,
      name: 'phone',
      text: i18n.t('user.phone'),
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
      text: i18n.t('user.city'),
      value: location,
      placeholder: i18n.t('user.cityPl'),
      type: 'text',
      pattern:
        /^([a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F]+[a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F-'`0-9]+){1}, ([-'a-zA-Zа-яА-ЯІіЇїЄє\u0410-\u044F`]+){2}$/,
      initialValue: userLocation,
      changeValueMethod: setLocation,
    },
  };

  const [currEditedInputName, setCurrEditedInputName] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isInputDataNotValid, setIsInputDataNotValid] = useState(false);

  const updateUserData = async dataObject => {
    try {
      // if passed object contains "birthday" field then:
      // convert date from dd.MM.yyyy to "MM/dd/yyyy" and set it as a Date object
      if (dataObject['birthday']) {
        const dataValue = dataObject['birthday'];

        const transformedDate = dataValue.replace(/(\d+[.])(\d+[.])/, '$2$1');
        dataObject['birthday'] = new Date(transformedDate);
      }

      const res = await updateUserDataInBD(dataObject);
      if (res.status === 200) onUserDataUpdated();
    } catch (error) {
      // reset all inputs to their initial values if error occurred
      Object.values(elementsData).forEach(element =>
        element.changeValueMethod(element.initialValue)
      );
      console.log(`Error updating user data ${error}`);
    }
  };

  function resetState() {
    setIsInputDataNotValid(false);
    setIsEditing(false);
    setCurrEditedInputName(null);
  }

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
      resetState();
    } else if (isInputContentChanged) {
      updateUserData({ [currEditedInputName]: currentElement.value });
      resetState();
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
    const currElement = elementsData[currEditedInputName];
    if (
      (event.code === 'Enter' && isInputDataNotValid) ||
      (event.code === 'NumpadEnter' && isInputDataNotValid)
    ) {
      currElement.changeValueMethod(currElement.initialValue);
      resetState();
    } else if (
      (event.code === 'Enter' && !isInputDataNotValid) ||
      (event.code === 'NumpadEnter' && !isInputDataNotValid)
    ) {
      if (currElement.initialValue !== currElement.value) {
        updateUserData({ [currElement.name]: currElement.value });
      }

      resetState();
    }
    if (event.code !== 'Escape' || !currEditedInputName) return;

    if (isInputDataNotValid) {
      currElement.changeValueMethod(currElement.initialValue);
    } else if (currElement.initialValue !== currElement.value)
      updateUserData({ [currElement.name]: currElement.value });

    setCurrEditedInputName(null);
    setIsEditing(false);
  };

  return (
    <Form type="submit" onKeyDown={handleKeyDown}>
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
                <FaCheck fill="currentColor" />
              ) : (
                <MdEdit fill="currentColor" />
              )}
            </EditBtn>
          </UserLabel>
        );
      })}
    </Form>
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
