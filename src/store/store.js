import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { AdventuresReducer } from './Reducers/Adventures/AdventuresReducer'

const initialState = {};

const reducers = combineReducers({
  adventuresList:AdventuresReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  initialState,
  reducers,
  composeEnhancer(applyMiddleware(thunk))
)
