export default function piezaReducer(state={
  pieza:[]
}, action) {
  if(action.type==='SHOW_PIEZA_PAGE') {
    return {
      ...state,
      piezaTitle: action.payload[0],
      piezaDescription: action.payload[1],
      piezaImg: action.payload[2],
    }
  } else {
    return state
  }
}
