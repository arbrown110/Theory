import { combineReducers } from 'redux'
import { adventuresReducer } from '../adventuresReducer'
//import { eventsReducer} from './eventsReducer'
export const rootReducer = combineReducers({
    adventures: adventuresReducer
    //events: eventsReducer
})

