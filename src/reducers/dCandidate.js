import { ACTIONS_TYPES } from "../actions/dCandidate";

const initialState = {
  list: []
};

export const dCandidate = (state, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.FETCH_ALL:
      return {
        ...state,
        list: [...action.payload]
      };
      break;

    default:
      return state;
      break;
  }
};
