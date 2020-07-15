import React, { PureComponent } from 'react'
import cls from "classnames"
import PropTypes from "prop-types";

import './style.scss'

const DefaultDot = () => <div className="timeline-dot"></div>

const types = [
    "primary",
    "warning",
    "success",
    "error",
    "info",
    "disabled",
    "loading"
]

export default class TimelineItem extends PureComponent {
    static defaultProps = {
        prefixCls: "timeline-item",
        dot: <DefaultDot />,
        type: types[0],
        color: ""
    };

    static propTypes = {
        prefixCls: PropTypes.string.isRequired,
        types: PropTypes.oneOf(types),
        color: PropTypes.string,
        dot: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.string,
            PropTypes.number
        ])
    };

    render() {
        const { prefixCls, className, dot, children, type, color, style, ...attr } = this.props;
        console.log('type--->', type);
        return (
            <li
                className={cls(prefixCls, className, {
                    [`${prefixCls}-${type}`]: type
                })}
                {...attr}
            >
                <div className={`${prefixCls}-line`} />
                {
                    // type === 'loading' ? (
                    //     <div className={`${prefixCls}-dot-loading`}>
                    //         <span>icon</span>
                    //     </div>
                    // ) : (
                    //         <div className={`${prefixCls}-dot`} style={{ borderColor: color }}>
                    //             {dot}
                    //         </div>
                    //     )
                    <div className={`${prefixCls}-dot`} style={{ borderColor: color }}>
                        {dot}
                    </div>

                }
                <div
                    className={`${prefixCls}-content`}
                    style={{ animationDelay: style.animationDelay }}
                >
                    {children}
                </div>

            </li>
        )
    }
}