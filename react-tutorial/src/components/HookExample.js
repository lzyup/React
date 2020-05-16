import { useState } from 'react';
import React from 'react'

function Example() {
    //声明一个新的状态变量，我们将其称为"count"
    const [obj, setObject] = useState({
        count: 0,
        name: 'alife'
    })

    return (
        <div className="App">
            <p>Count: {obj.count}</p>
            <p>Name: {obj.name}</p>
            <button onClick={() => setObject({ count: obj.count + 1 })}>+</button>
            <button onClick={() => setObject({ count: obj.count - 1 })}>-</button>
        </div>
    )
}

export default Example