import React, { useState, useRef, useEffect } from 'react'
import './Alert.scss'
export default function Notification(props) {
    const [isShown, setIsShown] = React.useState(false);
    const [isLeaving, setIsLeaving] = React.useState(false);

    let timeoutId = null;

    console.log('alert111')

    React.useEffect(() => {
        setIsShown(true);
        return () => {
            clearTimeout(timeoutId);
        }
    }, [props.isShown, props.timeout, timeoutId]);

    const closeNotification = () => {
        setIsLeaving(true);
        timeoutId = setTimeout(() => {
            setIsLeaving(false);
            setIsShown(false);
        }, 250)
    }

    return isShown && (
        <div className={`alert ${props.type}${isLeaving ? ' leaving' : ''}`} role="alert">
            <button className="close" onClick={closeNotification} />
            {props.message}
        </div>
    )
}