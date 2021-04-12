import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./chapter_18/modules";
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {composeWithDevTools} from "redux-devtools-extension";
import {createLogger} from "redux-logger/src";
import ReduxThunk from 'redux-thunk'
import ReduxSaga from 'redux-saga'

const logger =createLogger();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,ReduxThunk)));


ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
    <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
