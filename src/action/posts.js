export default (posts) => {
    return {
        type: 'ADD_POSTS',
        payload: posts
    }
}