import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Homepage from './Homepage';
import {
  selectTitle, selectLogo, selectButtons, selectTheme, selectLogginStatus, setConfig,
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
  const dispatch = useDispatch();

  const initialConf = async () => {
    const response = await fetch('/api/v1/home');
    const json = await response.json();
    dispatch(setConfig(json));
  };

  const checkAdmin = async () => {
    const response = await fetch('/api/v1/home');
    const json = await response.json();
    return json.isAdmin;
  };

  useEffect(() => {
    initialConf();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav logo={logo} buttons={buttons} title={title} isLoggedIn={!checkAdmin()} />
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
