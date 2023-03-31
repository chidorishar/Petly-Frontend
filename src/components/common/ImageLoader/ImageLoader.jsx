import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { TfiPlus } from 'react-icons/tfi';

import { ImgPlug, ImgPet } from './ImageLoader.styled';

export const ImageLoader = ({ file, onClick, className }) => {
  const [loading, setLoading] = useState(false);
  const [thumb, setThumb] = useState(undefined);

  useEffect(() => {
    if (!file) {
      return;
    }
    if (!(file instanceof File)) {
      console.error('Invalid file type');
      return;
    }
    setLoading(true);
    let reader = new FileReader();

    reader.onloadend = () => {
      setLoading(false);
      setThumb(reader.result);
    };

    reader.readAsDataURL(file);
  }, [file]);

  if (!file) {
    return (
      <ImgPlug onClick={onClick} className={className}>
        <TfiPlus size={48} />
      </ImgPlug>
    );
  }

  if (loading) {
    return <p>loading...</p>;
  }
  if (file && typeof file.name !== 'string') {
    console.error('Invalid file name type');
    return null;
  }
  return (
    <ImgPet
      src={thumb}
      alt={file.name}
      onClick={onClick}
      className={className}
    />
  );
};

ImageLoader.propTypes = {
  file: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

ImageLoader.defaultProps = {
  file: null,
};
