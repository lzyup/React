import React, { Component } from 'react'

class NameForm extends Component {
    constructor(props) {
        super(props);
        console.log('constructor', props);
        this.state = { value: '' };
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

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        alert('提交的名字:' + this.state.value);
        event.preventDefault();
    }



    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

export default NameForm 