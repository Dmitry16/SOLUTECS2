export default function frontPageReducer(state={},action) {
  if(action.type==='FRONT_PAGE') {
    if(document.getElementById('home').style.display==='none') {
      document.getElementById('home').style.display='block'
    }
    return {...state, frontPage: true }
  }
  if(action.type==='NOT_FRONT_PAGE') {
    return {...state, frontPage: false }
  }
  return state
}
