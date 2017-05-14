import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NotFound from './components/NotFound';
import Welcome from './components/Welcome';
import Projects from './components/Projects';
import Art from './components/Art';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

ReactDOM.render(
  (<Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="projects" component={Projects} />
      <Route path="art" component={Art} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>),
  document.getElementById('root')
);
