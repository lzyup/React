import { createStore, applyMiddleware } from 'redux';
import combineReducers from './reducers'

import promiseMiddleware from './middleware/promiseMiddleWare'

let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));

if (module.hot) {
    module.hot.accept('./reducers.js', () => {
        const nextCombineReducer = require("./reducers").default;
        store.replaceReducer(nextCombineReducer);
    })
}

export default store;