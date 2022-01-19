import React from 'react';
import ReactDOM from 'react-dom'; //connects react package to the DOM
import {Provider,connect} from 'react-redux';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import './index.css';
import App from './App';
import CardList from './CardList';
import 'tachyons';
//import registerServiceWorker from './registerServiceWorker';
import reportWebVitals from './reportWebVitals';
import {searchRobots,requestRobots} from './reducers';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger=createLogger();
const rootReducer=combineReducers({searchRobots,requestRobots});
const store=createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




reportWebVitals();
//registerServiceWorker();
