import {
GET_CHARACTER

} from "../actions/index.js";

const initialState = {   
    charArr: [],  
    charDetail:{},
    charFinded:[]

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                charArr: action.payload,

            };

                default:
                    return {
                        ...state
                    };


    }

};
export default rootReducer;