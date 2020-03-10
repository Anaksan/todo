import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ToDo from './containers/todo/todo';
import Home from './components/home/home';


ReactDOM.render((
	<BrowserRouter>
  <Provider store={store}>
  		<App>
  			<Switch>
  			<Route exact path='/' component={Home}/>
  			<Route path='/todolist' component={ToDo}/>
  			</Switch>
  		</App>
  </Provider>
  </BrowserRouter> 
), document.getElementById('root'));
registerServiceWorker();
