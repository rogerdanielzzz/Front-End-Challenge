import {
    GET_CHARACTER,
    PAGE_SWITCHER,
    SET_PAGES,
    LOADING_SWITCHER

} from "../actions/index.js";

const initialState = {
    charArr: [],
    charDetail: {},
    charFinded: [],
    currentPage: 1,
    totalCharacters: 82,
    isLoading: true,


};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTER:
            return {
                ...state,
                charArr: action.payload,

            };
        case PAGE_SWITCHER:
            return {
                ...state,
                currentPage: action.payload,

            };
        case SET_PAGES:
            return {
                ...state,
                totalCharacters: action.payload,

            };
        case LOADING_SWITCHER:
            return {
                ...state,
                isLoading: action.payload,

            };

            

        default:
            return {
                ...state
            };


    }

};
export default rootReducer;