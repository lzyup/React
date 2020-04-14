import React, { Component } from 'react'
import ListOfWords from './ListOfWords'
class WordAdder extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            words:['marklar']
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        const words = this.state.words;
        words.push('marklar');
        this.setState({words:words})
    }

    render(){
        return(
            <div>
                <button></button>
                <ListOfWords words={this.state.words} />
            </div>
        )
    }
}
export default WordAdder;