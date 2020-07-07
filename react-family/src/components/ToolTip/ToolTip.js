import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import classNames from 'classnames'

import './ToolTip.scss'

const body = document.body;

const PLACEMENT = {
    TOP: 'TOP',
    TOP_LEFT: 'TOP_LEFT',
    TOP_RIGHT: 'TOP_RIGHT',
    LEFT: 'LEFT',
    LEFT_TOP: 'LEFT_TOP',
    LEFT_BOTTOM: 'LEFT_BOTTOM',
    RIGHT: 'RIGHT',
    RIGHT_TOP: 'LEFT_TOP',
    LEFT_BOTTOM: 'LEFT_BOTTOM',
    RIGHT: 'RIGHT',
    RIGHT_TOP: 'RIGHT_TOP',
    RIGHT_BOTTOM: 'RIGHT_BOTTOM',
    BOTTOM: 'BOTTOM',
    BOTTOM_LEFT: 'BOTTOM_LEFT',
    BOTTOM_RIGHT: 'BOTTOM_RIGHT'
}

class ToolTip extends React.PureComponent {
    static defaultProps = {
        className: '',
        popupParentEl: body,
        placement: PLACEMENT.BOTTOM_RIGHT,//提示展示的方位
        maxWidth: 300,
        distance: 15,
        threshold: 20,
        title: '',
        hideOnClick: false,
        disabled: false,
        containerClass: ''
    }

    static PLACEMENT = PLACEMENT;

    consturctor(props) {
        super(props);
        this.state = {
            status: STATUS.HIDDEN,
            position: {
                left: 0,
                top: 0,
                transformOrigin: '0% 0%',
            },
            scale: 1
        };
        this.container = null;
        this.titleElSize = null;
        this.timer = null;
        this.unmounted = false;
    }

    init() {
        const { popupParentEl, containerClass } = this.props;
        this.container = document.createElement('div');
        this.container.className = `ToolTipContainer ${STATUS.HIDDEN} ${containerClass}`
        popupParentEl.appendChild(this.container);
        this.renderTitle();
    }

    show = () => {
        const { title, disabled } = this.props;
        const { status } = this.state;
        this.clearTimer();
        if (disabled || status === STATUS.SHOW || !title) return;
        this.updatePosition();
        // add scale animation
        this.setState({
            scale: 0
        }, () => {
            window.setTimeout(() => {
                this.container.classList.remove(STATUS.HIDDEN);
                this.setState({
                    scale: 1,
                    status: STATUS.SHOW
                })
            }, 50)
        })
    }

    onClick = () => {
        const { hideOnclick } = this.props;
        if (hideOnclick) {
            this.hide();
        }
    }

    hide = () => {
        this.container.classList.add(STATUS.HIDDEN);
        this.setState({
            status: STATUS.HIDDEN
        })
    }

    //尝试在一段时间后隐藏提示
    tryHide = () => {
        this.clearTimer();
        this.timer = window.setTimeOut(() => {
            if (this.unmounted) return;
            this.hide();
        }, 200)
    }

    clearTimer() {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    }

    updatePosition() {
        const { distance, threshold, placement } = this.props;
        const triggerRect = this.triggerEl.getBoundingClientRect();
        const titleRect = this.titleEl.getBoundingClientRect();
        if (!this.titleElSize) {
            this.titleElSize = {
                width: titleRect.width,
                height: titleRect.height
            }
        }
        // 根据站位的方向，进行对应方位的计算
        const formatter = getPlacementFormatter(placement);
        // calculate left & top
        let left = formatter.left(triggerRect, this.titleElSize, distance);
        left = Math.min(left, body.offsetWidth - this.titleElSize.width - threshold);
        left = Math.max(left, threshold);
        let top = formatter.top(triggerRect, this.titleElSize, distance);
        top = Math.min(top, body.offsetHeight - this.titleElSize.height - threshold);
        top = Math.max(top, threshold);

        // calculate transform origin
        let originX = (triggerRect.left + triggerRect.width / 2 - left) / this.titleElSize.width;
        originX = Math.max(Math.round(originX * 100), 0);
        let originY = (triggerRect.top + triggerRect.height / 2 - top) / this.titleElSize.height;
        originY = Math.max(Math.round(originY * 100), 0);
        const transformOrigin = `${originX}% ${originY}%`;

        this.setState({
            position: {
                left,
                top,
                transformOrigin
            }
        });
    }

    destory() {
        this.container.parentElement.removeChild(this.container);
        this.clearTimer();
        this.unmounted = true;
    }

    //simulate ReactDOM.createPortal with React v15.6
    renderTitle() {
        const { title, maxWidth } = this.props;
        const { position: { left, top, transformOrigin }, scale } = this.state;
        if (this.container) {
            ReactDOM.render(
                <div
                    ref={ref => this.titleEl = ref}
                    className="tool-tip-inner"
                    onMouseEnter={this.show}
                    onMouseLeave={this.tryHide}
                    style={{
                        left,
                        top,
                        width: this.titleElSize ? this.titleElSize.width ?: null,
                        transform: `scale(${scale})`,
                        transformOrigin,
                        maxWidth
                    }}
                >
                    {title}

                </div>,
                this.container
            )
        }
    }
    componentDidMount() {
        this.renderTitle();
    }

    componentWillUnmount() {
        this.destory();
    }

    render() {
        const { className } = this.props;
        const { status } = this.state;
        return (
            <div
                ref={ref => this.triggerEl = ref}
                className={classNames('Tooltip', status, className)}
                onMouseEnter={this.show}
                onMouseLeave={this.tryHide}
                onClick={this.onClick}
            >
                {this.props.children}

            </div>
        )
    }
}

