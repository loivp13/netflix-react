import { Types } from "../actions/Types";

export default (state = { contentDetails: {}, id: null }, action) => {
  switch (action.type) {
    case Types.ToggleContentDetails:
      return {
        ...state,
        contentDetails: action.payload.data,
        id: action.payload.id
      };

    default:
      return state;
  }
};
