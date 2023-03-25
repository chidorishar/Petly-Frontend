import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  UserInput,
  UserLabel,
  UserSpan,
  EditBtn,
  FormBox,
} from './UserDataItem.styled';

import { FaCheck } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';

const updateUserData = async dataObject => {
  await axios
    .post(`http://${'asdasd'}/api/users`, dataObject)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
};

export const UserDataItem = user => {
  const [currEditInputID, setCurrEditInputID] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [activeType, setActiveType] = useState('');
  const [errorInput, setErrorInput] = useState(false);
  const { userName, userEmail, userDate, userPhone, userCity } = user;
  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
    setDate(userDate);
    setPhone(userPhone);
    setCity(userCity);
  }, [user]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setErrorInput(value.match(/^[a-zA-Z0-9_]{3,16}$/) ? false : true);
        setName(value);
        break;

      case 'email':
        setErrorInput(
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]+)/) ? false : true
        );
        setEmail(value);
        break;

      case 'date':
        setErrorInput(
          value.match(/^(0[1-9]|[1-2][0-9]|3[0-1])\.(0[1-9]|1[0-2])\.\d{4}$/)
            ? false
            : true
        );
        setDate(value);
        break;

      case 'phone':
        setErrorInput(value.match(/^\+380\d{9}$/) ? false : true);
        setPhone(value);
        break;

      case 'city':
        setErrorInput(
          value.match(/^[a-zA-Zа-яА-ЯёЁ]+[-\s]?[a-zA-Zа-яА-ЯёЁ]*$/)
            ? false
            : true
        );
        setCity(value);
        break;
      default:
        break;
    }
  };
  const handleEnableToEdit = (index, e) => {
    e.preventDefault();
    const changedField = e.currentTarget.dataset.type;

    if (errorInput) return;
    if (isClicked && changedField !== activeType) {
      return;
    }
    setActiveType(changedField);
    setIsClicked(!isClicked);
    if (currEditInputID !== null) {
      updateUserData({ changedField });
    }
    setCurrEditInputID(prevState => {
      return prevState !== index ? index : null;
    });
  };
  const handleKeyDown = event => {
    if (errorInput) return;
    if (event.keyCode === 13) {
      // selectDataToUpdate(currEditInputID);
      setCurrEditInputID(null);
      setIsClicked(false);
    }
  };

  const elementsData = [
    {
      id: 0,
      name: 'name',
      text: 'Name:',
      value: name,
      placeholder: 'Your name',
      type: 'text',
    },
    {
      id: 1,
      name: 'email',
      text: 'Email:',
      value: email,
      placeholder: 'user@email.com',
      type: 'email',
    },
    {
      id: 2,
      name: 'birthday',
      text: 'Birthday:',
      value: date,
      placeholder: '01.01.2023',
      type: 'text',
    },
    {
      id: 3,
      name: 'phone',
      text: 'Phone:',
      value: phone,
      placeholder: '+380XXXXXXXXX',
      type: 'text',
    },
    {
      id: 4,
      name: 'location',
      text: 'City:',
      value: city,
      placeholder: 'Brovary, Kiev',
      type: 'text',
    },
  ];

  return (
    <FormBox>
      <form type="submit">
        {elementsData.map(el => {
          return (
            <UserLabel key={el.id}>
              <UserSpan>{el.text}</UserSpan>
              <UserInput
                type={el.type}
                name={el.name}
                value={el.value ?? ''}
                placeholder={el.placeholder}
                className={
                  errorInput
                    ? currEditInputID === el.id
                      ? 'enabled error'
                      : ''
                    : currEditInputID === el.id
                    ? 'enabled'
                    : ''
                }
                disabled={currEditInputID !== el.id}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <EditBtn
                data-type={el.name}
                onClick={e => handleEnableToEdit(el.id, e)}
                className={
                  isClicked && currEditInputID !== el.id ? 'disabled' : ''
                }
              >
                {isClicked && currEditInputID === el.id ? (
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
