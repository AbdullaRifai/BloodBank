import api from "./api";

export const ACTIONS_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  FETCH_ALL: "FETCH_ALL",
  DELETE: "DELETE"
};

export const fetchAll = () => {
  return dispatch => {
    api
      .dCandidate()
      .fetchAll()
      .then(response => {
        dispatch({
          type: ACTIONS_TYPES.FETCH_ALL,
          payload: response.data
        });
      })
      .catch(err => console.log(err));
  };
};
