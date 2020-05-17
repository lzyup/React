import React, { Component } from 'react';
import Counter from './components/Counter'
import PropTypes from 'prop-types'
import WordAdder from './components/WordAdder';
import Colock from './components/Colock'
import NameForm from './components/Form'
import SelectForm from './components/Form1'
import Welcome from './components/Welcome'
import Example from './components/HookExample'
import HookCapture from './components/HookCapture.js'
class App extends Component {
    constructor(props) {
        super(props)
        console.log(1111);
        this.state = {
            name: 'w'
        }
        this.name = 'w'
        // this.state = { value: this.props.value,onIncrement:this.props.onIncrement,onDecrement:this.props.onDecrement};
    }

    componentWillMount() {
        console.log('willmount');
    }

    componentDidMount() {
        console.log('didMount');
    }

    componentWillReceiveProps(nextProps) {
        //通过this.props来获取旧的外部状态，初始props不会被调用
        console.log('willReceiveProps', this.props, nextProps);
    }

    componentWillUpdate() {
        console.log('willUpdate')
    }

    componentDidUpdate() {
        console.log('didUpdate')
    }

    componentWillUnmount() {
        console.log('willUnmount');
    }

    componentDidMount() {
        console.log('DidMount');
    }

    changeState = () => {
        this.setState({
            name: 'Lu'
        })
        this.name = 'Lu'
    }

    changeState1 = () => {
        this.setState({
            name: 'Xia'
        })
        this.name = 'Xia'
    }

    render() {
        return (
            // <Counter
            //     value={this.props.value}
            //     onIncrement={this.props.onIncrement}
            //     onDecrement={this.props.onDecrement}
            // >
            // </Counter>
            <div>
                {/* <Example></Example> */}
                <HookCapture></HookCapture>
                {/* <Welcome name={this.state.name}></Welcome> */}
                {/* <Colock></Colock> */}
                {/* <NameForm name={this.name}></NameForm> */}
                <div onClick={this.changeState}>改变name1</div>
                <div onClick={this.changeState1}>改变name2</div>

                {/* <SelectForm></SelectForm> */}
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
