import React, { useState, useRef, useEffect } from 'react'
export default function Welcome(props) {
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);
    const prevCount = usePrevious(count)
    console.log('prevCount', prevCount);
    const latesMessage = useRef("");
    const handleSendClick = () => {
        setTimeout(() => {
            alert("You said:" + message);
        }, 3000);
    }
    const handleMessageChange = e => {
        setMessage(e.target.value);
        latesMessage.current = e.target.value;
    }
    function usePrevious(value) {
        console.log('111xgf', value);
        const ref = useRef();
        useEffect(() => {
            console.log('useeffect111');
            ref.current = value;
        })
        return ref.current;
    }
    function changeState() {
        console.log('222xgf', count);
        setCount(count + 1)
    }
    return <div>
        <p>Now:{count},before:{prevCount}</p>
        <input value={message} onChange={handleMessageChange} />
        <button onClick={handleSendClick}>Send</button>
        <button onClick={changeState}></button>
    </div>
}