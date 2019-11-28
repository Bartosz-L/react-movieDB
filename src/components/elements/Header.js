import React from 'react';
import reactMovieLogo from 'images/reactMovie_logo.png';
import TMDBLogo from 'images/tmdb_logo.svg';
import { StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from 'components/styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledRMDBLogo src={reactMovieLogo} alt="reactMovie_logo" />
        <StyledTMDBLogo src={TMDBLogo} alt="tmdb_logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
