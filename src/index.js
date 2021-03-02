import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  name: 'John'
};

const rootReducer = (state=initialState, action) => {
  console.log('rootReducer', action);
  switch(action.type){
    case 'CHANGE_DATA':
      return Object.assign({}, state, {name:'JOHN CENA'});
      
  }
  return state;
}

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
