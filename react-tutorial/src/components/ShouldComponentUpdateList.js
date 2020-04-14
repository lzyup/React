import React, { Component } from 'react'
class ShouldComponentUpdateList extends Component{
    render(){
        console.log('list render')
        return(
        <div>{this.props.list.title}</div>
        )
    }
}
export default ShouldComponentUpdateList