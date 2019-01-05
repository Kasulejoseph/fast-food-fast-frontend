import {FETCHMENU} from '../actions/types'
const initialState = {
    menu: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCHMENU:
  console.log(action.payload );
  
    return { ...state, menu: action.payload }

  default:
    return state
  }
}
