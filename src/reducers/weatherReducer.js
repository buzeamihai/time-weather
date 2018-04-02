import { SEARCH_WEATHER } from "../actions/types";

export default function weatherReducer(state = [], action) {
    

    switch (action.type) {
        case SEARCH_WEATHER:
            console.log(action.payload);

            return [...state, action.payload.data];
        default:
            return state;
    }
}