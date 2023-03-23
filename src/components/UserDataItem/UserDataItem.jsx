import React, { useState } from 'react';
import { Box } from 'components/common/Box/Box.styled';
import { UserInput, UserLabel, UserSpan } from './UserDataItem.styled';
import { BiCheck } from 'react-icons/bi';
import { MdEdit } from 'react-icons/md';

export const UserDataItem = () => {
  const [currEditInputID, setCurrEditInputID] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [activeType, setActiveType] = useState('');

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
    console.log(e.currentTarget.dataset.type);
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
    <Box backgroundColor="#ffffff">
      <form type="submit">
        <UserLabel>
          <UserSpan>Name:</UserSpan>
          <UserInput
            type="text"
            name="name"
            value={name}
            placeholder="Your name"
            className={currEditInputID === 0 ? 'enabled' : ''}
            disabled={currEditInputID !== 0}
            onChange={handleInputChange}
          />
          <button data-type="name" onClick={e => handleEnableToEdit(0, e)}>
            {isClicked && activeType === 'name' ? <BiCheck /> : <MdEdit />}
          </button>
        </UserLabel>
        <UserLabel>
          <UserSpan>Email:</UserSpan>
          <UserInput
            type="email"
            name="email"
            value={email}
            placeholder="Your email"
            className={currEditInputID === 1 ? 'enabled' : ''}
            disabled={currEditInputID !== 1}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button data-type="email" onClick={e => handleEnableToEdit(1, e)}>
            {isClicked && activeType === 'email' ? <BiCheck /> : <MdEdit />}
          </button>
        </UserLabel>
        <UserLabel>
          <UserSpan>Birthday:</UserSpan>
          <UserInput
            type="text"
            name="date"
            value={date}
            placeholder="Your birthday"
            className={currEditInputID === 2 ? 'enabled' : ''}
            disabled={currEditInputID !== 2}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button data-type="date" onClick={e => handleEnableToEdit(2, e)}>
            {isClicked && activeType === 'date' ? <BiCheck /> : <MdEdit />}
          </button>
        </UserLabel>
        <UserLabel>
          <UserSpan>Phone:</UserSpan>
          <UserInput
            type="phone"
            name="phone"
            value={phone}
            placeholder="Your phone"
            className={currEditInputID === 3 ? 'enabled' : ''}
            disabled={currEditInputID !== 3}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button data-type="phone" onClick={e => handleEnableToEdit(3, e)}>
            {isClicked && activeType === 'phone' ? <BiCheck /> : <MdEdit />}
          </button>
        </UserLabel>
        <UserLabel>
          <UserSpan>City:</UserSpan>
          <UserInput
            type="text"
            name="city"
            value={city}
            placeholder="Your city"
            className={currEditInputID === 4 ? 'enabled' : ''}
            disabled={currEditInputID !== 4}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button data-type="city" onClick={e => handleEnableToEdit(4, e)}>
            {isClicked && activeType === 'city' ? <BiCheck /> : <MdEdit />}
          </button>
        </UserLabel>
      </form>
    </Box>
  );
};
