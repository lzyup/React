//组件的视图和逻辑混合在一起
import React from 'react'
import { connect } from 'react-redux'
import { addTodo, changeDataA } from '../actions'

class AddTodo extends React.Component {
    constructor(){
        super();
        this.input = null;
    }
    componentDidMount() {
        
    }

    clickChange = () => {
        console.log('测试clickChange');
        const { changeData, changeDataAction } = this.props;
        console.log('测试changeDataAction---->', changeDataAction);
        changeDataAction({name:'xgf'});
        console.log('')
        console.log('测试changeData---->', changeData); 
    }
    render() {
        // console.log('测试props----->', this.props);
        const { addTodo, changeData, changeDataAction } = this.props;
        
        console.log('测试render');
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!this.input.value.trim()) {
                            return
                        }
                        addTodo(this.input.value)
                        this.input.value = ''
                    }}
                >
                    <input
                        ref={node => {
                            this.input = node
                        }}
                    />
                    <button type='submit'>
                        Add Todo
                </button>
                    <span onClick={this.clickChange}>{changeData.name}9999</span>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('测试state----->', state.change);
    return{
        changeData: state.change.changeData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addTodo: (value) => dispatch(addTodo(value)),
    changeDataAction: (data) => dispatch(changeDataA(data)),
})
 
const AddTodo1 = connect(mapStateToProps,
    mapDispatchToProps)(AddTodo)

export default AddTodo1