export default (state = {}, action) => {
    switch(action.type) {
        case 'ADD_USER':
            let newState = Object.assign({}, state)
            newState[action.payload._id] = action.payload
            return newState
        default:
            return state
    }
}