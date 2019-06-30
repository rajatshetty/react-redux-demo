import { combineReducers } from 'redux';
import { ItemListReducer } from '../reducers/reducers';

const rootReducer = combineReducers({
    items: ItemListReducer
})

export default rootReducer;