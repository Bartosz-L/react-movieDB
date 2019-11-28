import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/elements/Header';
import Home from 'views/Home';
import Movie from 'views/Movie';
import NotFound from 'views/NotFound';
import { GlobalStyle } from 'components/styles/GlobalStyle';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:movieId" component={Movie} />
        <Route component={NotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
};

export default App;
