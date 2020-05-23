import React, { Component } from 'react'
class Colok extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '1' }
    }

    componentDidMount() {
    }

    componentWillReceiveProps() {
        console.log('willReceiveProps');
    }

    render() {
        return (
            <div>
                <h1>Hello,world</h1>
                <h2>It is {name}</h2>
            </div>
        )
    }
}

export default Colok