import React, { Component } from 'react'
class Colok extends Component {
    constructor(props) {
        super(props);
        this.state = { data: '1' }
    }

    componentDidMount() {

        // setInterval(() => {
        //     this.setState({
        //         data: '1'
        //     })
        // }, 1000);
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