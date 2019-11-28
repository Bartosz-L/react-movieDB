import React from 'react';
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

export default Navigation;
