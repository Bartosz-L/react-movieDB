import React from 'react';
import { StyledLoadMoreBtn } from 'components/styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({ text, callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    {text}
  </StyledLoadMoreBtn>
);

export default LoadMoreBtn;
