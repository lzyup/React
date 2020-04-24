import React, { Component } from 'react';
import Counter from './components/Counter'
import PropTypes from 'prop-types'
import WordAdder from './components/WordAdder';
import Colock from './components/Colock'
import NameForm from './components/Form'
import SelectForm from './components/Form1'
import Welcome from './components/Welcome'
class App extends Component {
    constructor(props) {
        super(props)
        console.log('测试props---->', this.props);
        // this.state = { value: this.props.value,onIncrement:this.props.onIncrement,onDecrement:this.props.onDecrement};
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
                <Welcome name="luzy"></Welcome>
                <Colock></Colock>
                <NameForm></NameForm>
                <SelectForm></SelectForm>
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
