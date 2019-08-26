import { Types } from "../actions/Types";

export default (state = { currentPage: "Browse" }, action) => {
  switch (action.type) {
    case Types.JoinIn:
      return { ...state, currentPage: "Browse" };
    case Types.SignIn:
      return { ...state, currentPage: "SignIn" };
    default:
      return state;
  }
};
