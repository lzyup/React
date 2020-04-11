import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux'  
import {Provider} from 'react-redux'
import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log('测试store---->',store.getState());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);
