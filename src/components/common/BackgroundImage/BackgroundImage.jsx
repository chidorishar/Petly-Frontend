import PropTypes from 'prop-types';

const BackgroundImage = ({
  srcSetWebp,
  srcSetOldTypes,
  placeholderImg,
  typeOldTypes = 'image/jpeg',
  typeWebp = 'image/webp',
  className = '',
}) => {
  return (
    //     <picture>
    //   <source srcset="photo.webp 1x, photo@2x.webp 2x" type="image/webp" />
    //   <source srcset="photo.jpg 1x, photo@2x.jpg 2x" type="image/jpeg" />
    //   <img src="photo.jpg" alt="Кот" />
    // </picture>
    <picture className={className}>
      <source srcSet={srcSetWebp} type={typeWebp} />
      <source srcSet={srcSetOldTypes} type={typeOldTypes} />
      <img src={placeholderImg} />
    </picture>
  );
};

export default BackgroundImage;

BackgroundImage.propTypes = {
  srcSetWebp: PropTypes.string.isRequired,
  srcSetOldTypes: PropTypes.string.isRequired,
  placeholderImg: PropTypes.string.isRequired,
  typeOldTypes: PropTypes.string,
  typeWebp: PropTypes.string,
  className: PropTypes.string,
};
