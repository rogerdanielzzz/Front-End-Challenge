import Axios from 'axios'

export const GET_CHARACTER = "GET_CHARACTER";
export const PAGE_SWITCHER = "PAGE_SWITCHER";
export const SET_PAGES = "SET_PAGES";
export const LOADING_SWITCHER = "LOADING_SWITCHER";
export const SEARCH_CHARACTER = "SEARCH_CHARACTER";
export const SET_PAGES_FINDED = "SET_PAGES_FINDED";
export const SET_LAST_SEARCH = "SET_LAST_SEARCH";
export const CLEANER_FINDED = "CLEANER_FINDED"




let baseUrl = "https://swapi.dev/api/people/"


export const getCharacter = (page) => {
  return function (dispatch) {

    return Axios.get(`${baseUrl}?page=${page}`)
      .then((res) => {

        dispatch({ type: GET_CHARACTER, payload: res.data.results });
        dispatch({ type: SET_PAGES, payload: res.data.count });
        dispatch({ type: LOADING_SWITCHER, payload: false });

      });
  };
};
export const searchCharacter = (search, page) => {
  return function (dispatch) {
    return Axios.get(`${baseUrl}?search=${search}&page=${page}`)
      .then((res) => {

        if (res.data.count>0){
          dispatch({ type: SET_LAST_SEARCH, payload: search})

        dispatch({ type: SEARCH_CHARACTER, payload: res.data.results });
        dispatch({ type: SET_PAGES_FINDED, payload: res.data.count });
        dispatch({ type: PAGE_SWITCHER, payload: page });
        dispatch({ type: LOADING_SWITCHER, payload: false });
        }else if(res.data.count<=0){
            dispatch({ type: SET_LAST_SEARCH, payload: null})

          dispatch({ type: SEARCH_CHARACTER, payload: {error:`We cant Find a Character Named ${search}`}});


        }
      });
  };
};

export const setLastSearch = (payload) => {
  return { type: SET_LAST_SEARCH, payload, }

};

export const loadingSwitcher = (payload) => {
  return { type: LOADING_SWITCHER, payload, }

};
export const pageSwitcher = (payload) => {
  return { type: PAGE_SWITCHER, payload, }

};