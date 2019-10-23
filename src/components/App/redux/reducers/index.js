import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import showPageReducer from "./showPageReducer";
import videosReducer from "./videosReducer";

export default combineReducers({
  form: formReducer,
  currentShowPage: showPageReducer,
  videos: videosReducer
});
