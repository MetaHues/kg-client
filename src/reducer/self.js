export default (state = null, action) => {
    switch(action.type) {
        case 'SET_SELF': 
            return action.payload
        default:
            return state
    }
}

