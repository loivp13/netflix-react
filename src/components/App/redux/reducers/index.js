import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import showPageReducer from "./showPageReducer";
import videosReducer from "./videosReducer";
import contentDetailReducer from "./contentDetailReducer";

export default combineReducers({
  form: formReducer,
  currentShowPage: showPageReducer,
  videos: videosReducer,
  contentDetails: contentDetailReducer
});
