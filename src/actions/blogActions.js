import axios from 'axios'
import * as blogActionTypes from '../actionTypes/blogActionTypes'

export function fetchPosts() {
  return function(dispatch) {
  axios.get('http://receptum-in-natura.solutecs.biz/wp-json/wp/v2/posts&repeat=w3tc')
    .then((response) => {
      dispatch({type: blogActionTypes.FETCH_POSTS_FULFILLED,
                payload: response.data});
    })
    .catch((err) => {
      dispatch({type: blogActionTypes.FETCH_POSTS_REJECTED,
                payload: err});
    })
  }
}
