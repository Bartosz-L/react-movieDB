import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledNavigation } from 'components/styles/StyledNavigation';

const Navigation = ({ movieTitle }) => {
  return (
    <StyledNavigation>
      <div className="navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movieTitle}</p>
      </div>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  movieTitle: PropTypes.string.isRequired,
};

export default Navigation;
