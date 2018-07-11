import { combineReducers } from 'redux'
import selfReducer from './self'
import postsReducer from './posts'
import usersReducer from './users'

const rootReducer = combineReducers({
    self: selfReducer,
    posts: postsReducer,
    users: usersReducer
})

export default rootReducer