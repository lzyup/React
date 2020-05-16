import React, { useState, useRef } from 'react'
export default function Welcome(props) {
    const [message, setMessage] = useState("");
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
    return <div>
        <input value={message} onChange={handleMessageChange} />
        <button onClick={handleSendClick}>Send</button>
    </div>
}