import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Style Components */
import { GlobalStyle } from './styled';
/* Components */
import Cover from '../../pages/Cover';
import ErrorBoundary from '../../components/ErrorBoundary';


const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Cover} />
        </Switch>
      </Router>
    </ErrorBoundary>
  )
}

export default App
