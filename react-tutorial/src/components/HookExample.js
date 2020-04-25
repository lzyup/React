import {  useState } from 'react';
import React from 'react'

function Example() {
    //声明一个新的状态变量，我们将其称为"count"
    const [count, setCount] = useState(0);
    const [fruit, setFurit] = useState({a:'apple'})

    return (
        <div>
            <p>You clicked {count} times</p>
            <p>Fruit {fruit.a} </p>
            <button onClick={() => setCount(count + 1)}>
                Click me1
            </button>
            <button onClick={() => setFurit({a:'banana'})}>
                Click me1
            </button>
        </div>
    )
}

export default Example