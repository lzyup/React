import React, { Component } from 'react'
class ListOfWords extends React.PureComponent {
    render(){
    return <div>{this.props.words.join(',')}</div>
    }
}

export default ListOfWords