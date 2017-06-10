import { combineReducers } from 'redux'
import picsReducer from './picsReducer'
import modalReducer from './modalReducer'
import blogReducer from './blogReducer'
import postReducer from './postReducer'
import piezaReducer from './piezaReducer'
import headerReducer from './headerReducer'
import frontPageReducer from './frontPageReducer'


export default combineReducers({
  pics: picsReducer,
  blog: blogReducer,
  post: postReducer,
  pieza: piezaReducer,
  header: headerReducer,
  frontPage: frontPageReducer,
})
