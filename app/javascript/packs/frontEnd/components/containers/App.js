import React, { useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Homepage from './Homepage';
import {
  selectTitle, selectLogo, selectTheme, setConfig,
} from '../../features/home/homeSlice';
import Nav from '../presentational/Nav';
import Sign from './Sign';
import Search from './Search';

const App = () => {
  const title = useSelector(selectTitle);
  const logo = useSelector(selectLogo);
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const initialConf = async () => {
    const response = await fetch('/api/v1/home');
    const json = await response.json();
    dispatch(setConfig(json));
  };

  useEffect(() => {
    initialConf();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Nav logo={logo} title={title} />
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
