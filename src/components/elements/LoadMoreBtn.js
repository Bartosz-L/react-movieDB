import React from 'react';
import PropTypes from 'prop-types';
import { StyledLoadMoreBtn } from 'components/styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

LoadMoreBtn.propTypes = {
  text: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
