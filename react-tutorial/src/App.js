import React, { Component } from 'react';
import Counter from './components/Counter'
import PropTypes from 'prop-types'
class App extends Component {
    constructor(props){
        super(props)
        console.log('测试props---->',this.props);
        // this.state = { value: this.props.value,onIncrement:this.props.onIncrement,onDecrement:this.props.onDecrement};
    }

    render(){
        return(
            <Counter
                value={this.props.value}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
            >
            </Counter>
        )
    }
}


App.propTypes = {
    value:PropTypes.number.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired
}

export default App;
