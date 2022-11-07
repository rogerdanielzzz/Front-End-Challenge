import Axios from 'axios'

export const GET_CHARACTER = "GET_CHARACTER";



let baseUrl= "https://swapi.dev/api/people/"


export const getCharacter = () => {
  return function (dispatch) {
    return Axios.get(`${baseUrl}?page=1`)
      .then((res) => {
        dispatch({ type: GET_CHARACTER, payload: res.data.results });
      });
  };
};





