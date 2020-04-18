
const initialState = {
    changeData: {
        name:'123'
    }
}

const Change = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE':
            state.changeData = action.changeData;
            let testDta = Object.assign({}, { changeData: action.changeData })
            return state;
        default:
            return state
    }
}

export default Change