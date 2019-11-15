import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
/* Style Components */
import { Container } from './styled';
/* Components */
import Cover from '../../pages/Cover';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
      <Router>
        <GlobalStyle />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Cover} />
          </Switch>
        </div>
      </Router>
  )
}

export default App
