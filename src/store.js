
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import rootRedurer from './Reducers'
const intialState = {}
const middleWare = [thunk]

const store = createStore(
    rootRedurer,
    intialState,
    applyMiddleware(
        ...middleWare
    )
)
export default store