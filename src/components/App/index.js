import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Style Components */
import { GlobalStyle } from './styled';
/* Components */
import Cover from '../../pages/Cover';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Cover} />
      </Switch>
    </Router>
  )
}

export default App
