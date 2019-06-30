import * as Actions from '../Actions/itemActions';

const initialState = {
   items: [],
   item: {}
}

export function ItemListReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.GET_ITEM: 
            console.log("Dispatched to the reducer...")
            return {
                ...state,
                items: action.payload
            };
        default: return state
    }
}