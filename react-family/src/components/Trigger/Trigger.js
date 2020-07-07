import React, { PropType } from 'react';

class Trigger extends React.Component {
    constructor(props) {
        super(props);
        this.clicked = false;
    }

    triggerOnClick() {
        this.clicked = true;
    }

    checkStatus = () => {
        const { status, closeFunc, disabled } = this.props;
        if (disabled) return;

        const clicked = this.clicked;
        if (clicked) {
            this.clicked = false;
        }

        if (status && !clicked) {
            closeFunc && closeFunc();
        }
    }

    static defaultProps = {
        className: '',
        status: false,
        disabled: false
    };

    componentWillMount() {
        window.addEventListener('click', this.checkStatus, false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.disabled) {
            return;
        }
        if (this.props.status && !nextProps.status) {
            this.setState({
                clicked: false
            })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.checkStatus, false)
    }

    render() {
        const { className, children } = this.props;
        return (
            <div className={`Trigger ${className}`} onClick={() => this.triggerOnClick()}>
                {children}
            </div >
        )
    }
}

Trigger.propTypes = {
    className: PropTypes.string,
    status: PropTypes.bool.isRequired,
    colseFunc: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

export default Trigger;