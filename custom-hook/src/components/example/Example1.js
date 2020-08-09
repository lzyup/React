import React, { useState, useRef, useEffect, cloneElement } from 'react'

export default function Carousel(props) {
    const [count, setCount] = useState(1);
    const prevCountRef = useRef([{ name: 'x' }, { name: 'lu' }]);
    console.log('prevCount1', prevCountRef.current);

    const handleClick = () => {
        setCount(2);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>SetCount</button>
        </div>
    )
}