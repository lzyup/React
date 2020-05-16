import React, { Component } from 'react'
class Colok extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '1' }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Hello,world</h1>
                <h2>It is {this.state.data}</h2>
            </div>
        )
    }
}

export default Colok