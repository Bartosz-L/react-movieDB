import React from 'react';
import Header from 'components/elements/Header';
import Home from 'components/Home';
import { GlobalStyle } from 'components/styles/GlobalStyle';

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;
