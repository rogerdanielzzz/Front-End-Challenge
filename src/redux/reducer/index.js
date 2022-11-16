import {
    LOADING_SWITCHER,
    GET_CHARACTER,
    SEARCH_CHARACTER,
    PAGE_SWITCHER,
    SET_PAGES,
    SET_PAGES_FINDED,
    SET_LAST_SEARCH,
    CLEANER_FINDED,
    GET_DETAIL,
    CLEAN_DETAIL,
    CLEANER_CHARACTER
} from "../actions/index.js";
const json = require("../../utils/id.json")


const initialState = {
    charArr: [],
    charDetail: {},
    charFinded: [],
    currentPage: 1,
    totalCharacters: 87,
    totalFinded: 0,
    lastSearch: null,
    isLoading: false,
    idArr: json
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
        case GET_DETAIL:
            return {
                ...state,
                charDetail: action.payload,
                lastSearch: null

            };
        case CLEAN_DETAIL:
            return {
                ...state,
                charDetail: {},
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
                charFinded: [],
                lastSearch: null,
                totalFinded: 0
            };
        case CLEANER_CHARACTER:
            return {
                ...state,
                charArr: [],
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
