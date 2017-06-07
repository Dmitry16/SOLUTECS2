export default function headerReducer(state={},action) {
  if(action.type==='RENDER_HEADER_TOP') {
    return {...state, headerScrolled: false }
  }
  if(action.type==='RENDER_HEADER_SCROLLED') {
    return {...state, headerScrolled: true }
  }
  return state
}
