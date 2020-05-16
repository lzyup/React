import React, { useState } from 'react'
export default function Welcome(props) {
    console.log('函数组件', this);
    const [person, setPerson] = useState(null);
    function changeName() {
        setPerson({ name: 'Luzy' });
        console.log(111, person);
        setTimeout(() => {
            console.log(222, person);
        }, 5000);
    }
    function changeSex() {
        setPerson({ sex: 'female' })
        console.log(333, person);
        setTimeout(() => {
            console.log(444, person);
        }, 1000);
    }
    function getInfo() {
        console.log('person', person);
    }
    return <div>
        <h1>Hello, {props.name}</h1>
        <p onClick={changeName}>点击1</p>
        <p onClick={changeSex}>点击2</p>
        <p onClick={getInfo}>拿到信息</p>
    </div>
}