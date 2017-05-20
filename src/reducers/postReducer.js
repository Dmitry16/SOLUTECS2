export default function postReducer(state={
  post:''
}, action) {
  if (action.type==='SHOW_POST') {
    return {...state,
            postTitle: action.payload[0],
            postContent: action.payload[1],
            }
  }
  return state
}
