import React from 'react'
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import counter from './reducers'
import Counter from './components/Counter'
const store = createStore(counter);

const rootEl = document.getElementById('root');
// const render1 = () => ReactDOM.render(
//     <Counter
//         value={store.getState()}
//         onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
//         onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
//     />,
//     rootEl
// );
const render = () => ReactDOM.render(
    <App
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
);

render();

store.subscribe(render);
