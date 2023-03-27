import PropTypes from 'prop-types';

const BackgroundImage = ({
  srcSetWebp,
  srcSetOldTypes,
  placeholderImg,
  typeOldTypes = 'image/jpeg',
  typeWebp = 'image/webp',
  className = '',
  children,
}) => {
  return (
    <picture className={className}>
      <source srcSet={srcSetWebp} type={typeWebp} />
      <source srcSet={srcSetOldTypes} type={typeOldTypes} />
      <img src={placeholderImg} />
      {children}
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
  children: PropTypes.node,
};
