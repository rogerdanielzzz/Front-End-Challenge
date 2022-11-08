import Axios from 'axios'

export const GET_CHARACTER = "GET_CHARACTER";
export const PAGE_SWITCHER = "PAGE_SWITCHER";
export const SET_PAGES = "SET_PAGES";
export const LOADING_SWITCHER = "LOADING_SWITCHER";





let baseUrl= "https://swapi.dev/api/people/"


export const getCharacter = (page) => {
  return function (dispatch) {
    console.log(page)

    return Axios.get(`${baseUrl}?page=${page}`)
      .then((res) => {
        console.log(res.data)
        dispatch({ type: GET_CHARACTER, payload: res.data.results });
        dispatch({ type: SET_PAGES, payload: res.data.count });
        dispatch({ type: LOADING_SWITCHER, payload: true });


      });   
  };
};
export const loadingSwitcher = (payload) => {
    return { type: LOADING_SWITCHER, payload, }
  
  };
export const pageSwitcher = (payload) => {
    return { type: PAGE_SWITCHER, payload, }
  
  };





