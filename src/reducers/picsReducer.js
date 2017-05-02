const initialPics = [
  {
    id: 1,
    source_url:'http://llop-art.solutecs.biz/wp-content/uploads/sites/21/2017/01/esc2.gif',
    alt_text:'anunnaki'
  },
  {
    id: 2,
    source_url:'http://llop-art.solutecs.biz/wp-content/uploads/sites/21/2017/01/nero-1.jpg',
    alt_text:'anunnaki'
  },
  {
    id: 3,
    source_url:'http://llop-art.solutecs.biz/wp-content/uploads/sites/21/2017/01/caracalla.jpg',
    alt_text:'anunnaki'
  },
  {
    id: 4,
    source_url:'http://llop-art.solutecs.biz/wp-content/uploads/sites/21/2017/01/220px-Matronalivia2.jpg',
    alt_text:'anunnaki'
  }
]
const initialState = {
    initialPics: initialPics,
    pics: [...initialPics],
    fetching: false,
    fetched: false,
    error: null,
  }

import * as picsActionTypes from '../actionTypes/picsActionTypes'

export default function picsReducer(state=initialState, action) {

    switch (action.type) {
      case picsActionTypes.FETCH_PICS: {
        return {...state, fetching: true}
      }
      case picsActionTypes.FETCH_PICS_REJECTED: {
        return {...state, fetching: false, error: action.payload}
      }
      case picsActionTypes.FETCH_PICS_FULFILLED: {
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
