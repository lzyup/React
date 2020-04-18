import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux'  
import {Provider} from 'react-redux'
import rootReducer from './reducers'


const store = createStore(rootReducer)
// const StoreContext = React.createContext({ store });
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    // <StoreContext.Provider>
    //     <App />
    // </StoreContext.Provider>    
  ,
  document.getElementById('root')
);
