import {
    LOADING_SWITCHER,
    GET_CHARACTER,
    SEARCH_CHARACTER,
    PAGE_SWITCHER,
    SET_PAGES,
    SET_PAGES_FINDED,
    SET_LAST_SEARCH,
    CLEANER_FINDED
} from "../actions/index.js";

const initialState = {
    charArr: [],
    charDetail: {},
    charFinded: [],
    currentPage: 1,
    totalCharacters: 82,
    totalFinded: 0,
    lastSearch: null,
    isLoading: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_SWITCHER:
            return {
                ...state,
                isLoading: action.payload,
            };

        case SET_LAST_SEARCH:
            return {
                ...state,
                lastSearch: action.payload,
            };
        case GET_CHARACTER:
            return {
                ...state,
                charArr: action.payload,
                lastSearch: null

            };
        case SEARCH_CHARACTER:
            return {
                ...state,
                charFinded: action.payload,
            };
        case CLEANER_FINDED:
            return {
                ...state,
                charFinded: action.payload,
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
        case SET_PAGES_FINDED:
            return {
                ...state,
                totalFinded: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};
export default rootReducer;
