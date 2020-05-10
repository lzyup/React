import React, { Component } from 'react';
import Counter from './components/Counter';
import PropTypes from 'prop-types';
import WordAdder from './components/WordAdder';
import Colock from './components/Colock'
import NameForm from './components/Form'
import SelectForm from './components/Form1'
import Welcome from './components/Welcome'
import Example from './components/HookExample'
class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'w'
        }
        this.name = 'k';
    }

    componentDidMount(){
        let i = 1;
        // setInterval(() => {
        //     this.setState({
        //         name: (i++ + 'b')
        //     })
        // }, 1000);
    }
    change(){
        // this.setState({
        //     name:'change'
        // })
        console.log(111);
        this.name = 'cc';
    }

    render() {
        // const { name } = this.state
        return (
            // <Counter
            //     value={this.props.value}
            //     onIncrement={this.props.onIncrement}
            //     onDecrement={this.props.onDecrement}
            // >
            // </Counter>
            <div>
                {/* <Example></Example>
                <Welcome name={this.state.name}></Welcome> */}
                <Colock name={this.name}></Colock>
                <button onClick={()=>{this.change()}}></button>
                {/* <NameForm></NameForm>
                <SelectForm></SelectForm> */}
            </div>
            // <WordAdder />
        )
    }
}


App.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default App;
