import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Homepage from './Homepage';
import {
  selectTitle, selectLogo, selectButtons, selectTheme, selectLogginStatus,
} from '../../features/home/homeSlice';
import Nav from '../presentational/Nav';
import Sign from './Sign';
import Search from './Search';

const App = () => {
  const title = useSelector(selectTitle);
  const logo = useSelector(selectLogo);
  const buttons = useSelector(selectButtons);
  const theme = useSelector(selectTheme);
  const isLoggedIn = useSelector(selectLogginStatus);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav logo={logo} buttons={buttons} title={title} isLoggedIn={isLoggedIn} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/sign**" component={Sign} />
          <Route path="/search" component={Search} />
          <Route path="/user" component={Search} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
