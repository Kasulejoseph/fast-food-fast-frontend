import {FETCHMENU, REGISTER, LOGIN} from '../actions/types'
const initialState = {
    menu: [],
    user: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case FETCHMENU:
    console.log(action.payload );
    return { ...state, menu: action.payload }
  case REGISTER:
    console.log(action.payload );
    return { ...state, user: action.payload }
  case LOGIN:
    console.log(action.payload );
    return { ...state, user: action.payload }

  default:
    return state
  }
}
