import React from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from './components/alert'
import Carousel from './components/carousel'
import Example1 from './components/example/Example1'

function App() {
    return (
        <div className="App">
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header> */}
            <Alert type="warning" message="This is info" />
            <Carousel carouselItems={[
                <div>carousel item 1</div>,
                <div>carousel item 2</div>,
                <div>carousel item 3</div>
            ]} />
            <Example1></Example1>
        </div>
    );
}

export default App;
