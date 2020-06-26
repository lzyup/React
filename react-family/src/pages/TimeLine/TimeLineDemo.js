import React, { Component } from 'react'
import TimeLine from 'components/timeline/TimeLine'
import TimeLineItem from 'components/timeline/TimeLineItem'

export default class TimeLineDemo extends Component {
    componentDidMount() {
        console.log('时间线组件');
    }
    render() {
        return (
            <TimeLine>
                <TimeLineItem type="info">
                    信息
</TimeLineItem>
                <TimeLineItem type="error">
                    错误
</TimeLineItem>
                <TimeLineItem type="warning">
                    警告
</TimeLineItem>
                <TimeLineItem type="disabled">
                    禁用
</TimeLineItem>
            </TimeLine>
        )
    }
}