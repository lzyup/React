import React, { Component } from 'react';

import Nav from 'components/Nav/Nav'
import getRouter from 'router/router';

export default class APP extends Component {
    componentDidUpdate() {
        console.log('渲染app组件');
    }
    render() {
        return (
            <div>
                <Nav />
                {getRouter()}
            </div>
        )
    }
}