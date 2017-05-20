import { combineReducers } from 'redux'
import picsReducer from './picsReducer'
import modalReducer from './modalReducer'
import blogReducer from './blogReducer'
import postReducer from './postReducer'
import piezaReducer from './piezaReducer'


export default combineReducers({
  pics: picsReducer,
  modal: modalReducer,
  blog: blogReducer,
  post: postReducer,
  pieza: piezaReducer
})
