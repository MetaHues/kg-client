export default (state = [], action) => {
    switch(action.type) {
        case 'ADD_POST_COMMENT':
            let posts = state.filter(post => {
                return post._id === action._id
            })
            posts.push(action.payload)
            return posts

        case 'ADD_POSTS':
            return state.concat(action.payload)
        default:
            return state
    }
}