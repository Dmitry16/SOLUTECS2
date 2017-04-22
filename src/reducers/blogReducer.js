import * as blogActionTypes from '../actionTypes/blogActionTypes'

export default function blogReducer(state={
  posts: []
}, action) {

    switch (action.type) {
      case blogActionTypes.FETCH_POSTS: {
        return {...state, fetching: true}
      }
      case blogActionTypes.FETCH_POSTS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case blogActionTypes.FETCH_POSTS_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          pics: action.payload,
        }
      }
    }
    return state
}
