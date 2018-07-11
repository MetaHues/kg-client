export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_POSTS':
            return state.concat(action.payload)
        default:
            return state
    }
}