import React, { Component } from 'react'
class Colok extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '1' }
    }

    componentDidMount() {
        console.log('didmount')
        // setInterval(() => {
        //     this.setState({
        //         data: '1'
        //     })
        // }, 1000);
    }

    componentWillReceiveProps(){
        console.log('willReceiveProps');
    }

    render() {
        console.log('render111')
        const {name } = this.props;
        return (
            <div>
                <h1>Hello,world</h1>
                <h2>It is {name}</h2>
            </div>
        )
    }
}

export default Colok