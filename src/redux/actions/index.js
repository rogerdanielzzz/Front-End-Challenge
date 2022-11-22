import Axios from "axios";

export const GET_CHARACTER = "GET_CHARACTER";
export const PAGE_SWITCHER = "PAGE_SWITCHER";
export const SET_PAGES = "SET_PAGES";
export const LOADING_SWITCHER = "LOADING_SWITCHER";
export const SEARCH_CHARACTER = "SEARCH_CHARACTER";
export const SET_PAGES_FINDED = "SET_PAGES_FINDED";
export const SET_LAST_SEARCH = "SET_LAST_SEARCH";
export const CLEANER_FINDED = "CLEANER_FINDED";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const CLEANER_CHARACTER = "CLEANER_CHARACTER";

let baseUrl = "https://swapi.py4e.com/api/people/";
let apiError = `Sorry, we cant access to the database server, try later`;

export const getCharacter = (page) => {
  return async function (dispatch) {
    try {
      const res = await Axios.get(`${baseUrl}?page=${page}`);
      dispatch({ type: GET_CHARACTER, payload: res.data.results });
      dispatch({ type: SET_PAGES, payload: res.data.count });
      dispatch({ type: LOADING_SWITCHER, payload: false });
    } catch (error) {
      dispatch({ type: LOADING_SWITCHER, payload: false });
      dispatch({
        type: SEARCH_CHARACTER,
        payload: {
          error: apiError,
        },
      });
    }
  };
};
export const searchCharacter = (search, page) => {
  return async function (dispatch) {
    try {
      const res = await Axios.get(`${baseUrl}?search=${search}&page=${page}`);
      if (res.data.count > 0) {
        dispatch({ type: SET_LAST_SEARCH, payload: search });
        dispatch({ type: SEARCH_CHARACTER, payload: res.data.results });
        dispatch({ type: SET_PAGES_FINDED, payload: res.data.count });
        dispatch({ type: PAGE_SWITCHER, payload: page });
        dispatch({ type: LOADING_SWITCHER, payload: false });
      } else if (res.data.count <= 0) {
        dispatch({ type: SET_LAST_SEARCH, payload: null });
        dispatch({ type: LOADING_SWITCHER, payload: false });
        dispatch({
          type: SEARCH_CHARACTER,
          payload: { error: `We can't Find a Character Named ${search}` },
        });
      }
    } catch (error) {
      dispatch({ type: LOADING_SWITCHER, payload: false });
      dispatch({
        type: SEARCH_CHARACTER,
        payload: {
          error: apiError,
        },
      });
    }
  };
};
export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      let films = [];
      const detail = await Axios.get(`${baseUrl}${id}`);
      const planet = await Axios.get(detail.data.homeworld);

      for (let i = 0; i < detail.data.films.length; i++) {
        let film = await Axios.get(detail.data.films[i]);
        films.push(film.data.title);
      }

      let str = films.join(", ");

      let finalDetail = detail.data;
      finalDetail.homeworld = planet.data.name;
      finalDetail.films = str;

      dispatch({ type: GET_DETAIL, payload: finalDetail });
      dispatch({ type: LOADING_SWITCHER, payload: false });
    } catch (error) {
      dispatch({ type: LOADING_SWITCHER, payload: false });
      dispatch({
        type: SEARCH_CHARACTER,
        payload: {
          error: apiError,
        },
      });
    }
  };
};

export const setLastSearch = (payload) => {
  return { type: SET_LAST_SEARCH, payload };
};
export const cleanDetail = (payload) => {
  return { type: CLEAN_DETAIL, payload };
};
export const cleanerFinded = (payload) => {
  return { type: CLEANER_FINDED, payload };
};
export const cleanerShowAll = (payload) => {
 
  return (dispatch) => {
    dispatch({ type: CLEANER_FINDED, payload });
    dispatch(getCharacter(1));
  };
};

export const cleanerCharacter = (payload) => {
  return { type: CLEANER_CHARACTER, payload };
};

export const loadingSwitcher = (payload) => {
  return { type: LOADING_SWITCHER, payload };
};
export const pageSwitcher = (payload) => {
  return { type: PAGE_SWITCHER, payload };
};
