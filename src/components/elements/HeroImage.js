import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeroImage } from 'components/styles/StyledHeroImage';

const HeroImage = ({ image, title, text }) => {
  return (
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
export default HeroImage;
