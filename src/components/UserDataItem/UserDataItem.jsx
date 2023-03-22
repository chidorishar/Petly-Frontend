import React, { useState } from 'react';
import { Box } from 'components/common/Box/Box.styled';
import { UserInput, UserLabel, UserSpan } from './UserDataItem.styled';

export const UserDataItem = () => {
  const [currEditInputID, setCurrEditInputID] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  const handleInputChange = e => {
    e.preventDefault();
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
    setCurrEditInputID(prevState => {
      return prevState !== index ? index : null;
    });
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
          <button onClick={e => handleEnableToEdit(0, e)}>Edit</button>
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
          />
          <button onClick={e => handleEnableToEdit(1, e)}>Edit</button>
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
          />
          <button onClick={e => handleEnableToEdit(2, e)}>Edit</button>
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
          />
          <button onClick={e => handleEnableToEdit(3, e)}>Edit</button>
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
          />
          <button onClick={e => handleEnableToEdit(4, e)}>Edit</button>
        </UserLabel>
      </form>
    </Box>
  );
};
