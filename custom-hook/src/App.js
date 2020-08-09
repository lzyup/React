import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './components/alert'
import Carousel from './components/carousel'
import Example1 from './components/example/Example1'
import From1 from './components/form'

function App() {
    const [count, setCount] = useState(1);
    console.log('app1')
    return (
        <div className="App">
            <Alert type="warning" message="This is info" />
            <Carousel carouselItems={[
                <div>carousel item 1</div>,
                <div>carousel item 2</div>,
                <div>carousel item 3</div>
            ]} />
            <Example1></Example1>
            <From1></From1>
        </div>
    );
}

export default App;
