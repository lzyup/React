import React, { useState, useRef, useEffect, cloneElement } from 'react'

export default function Carousel(props) {
    const [count, setCount] = useState(1);

    const prevCountRef = useRef(1);
    const prevCount = prevCountRef.current;
    prevCountRef.current = count;
    console.log('prevCount', prevCount);
    const handleClick = () => {
        setCount(prevCount + count);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>SetCount</button>
        </div>
    )
}