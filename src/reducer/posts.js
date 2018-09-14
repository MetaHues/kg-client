export default (state = [], action) => {
    switch(action.type) {
        case 'REPLACE_POST': 
            let newState = state.filter(post => {
                return post._id !== action.payload.prev._id
            })
            newState.push(action.payload.cur)
            return newState
        case 'ADD_POSTS':
            return state.concat(action.payload)
        default:
            return state
    }
}