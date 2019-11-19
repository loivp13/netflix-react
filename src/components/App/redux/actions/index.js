import { Types } from "./Types";
import keys from "../../../../../.keys";

import axios from "axios";
export const selectShowPage = page => {
  return {
    type: page
  };
};

export const signIn = userId => async (dispatch, getState) => {
  axios.post("/");
  dispatch({
    type: "SignIn",
    payload: userId
  });
};

export const signUp = formValue => async (dispatch, getState) => {
  await axios.post("/authLocal/signup", formValue).then(res => {
    console.log(res.data);
    if (res.status !== 200) {
      return;
    } else if (res.data.error) {
      dispatch({ type: Types.TiggerErrorMessage, payload: res.data.error });
    } else {
      dispatch({ type: Types.SignInLocal, payload: res.data });
      dispatch({ type: Types.TiggerErrorMessage, payload: {} });
      history.push("/userAccount");
    }
  });
};

//YOUTUBE SEARCH

export const setMergeData = data => async (dispatch, getState) => {
  function getYTresults1() {
    return axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=netflix trailer&maxResults=50&key=${keys.Youtube}&channelId=UCWOA1ZGywLbqmigxE4Qlvuw`
    );
  }
  function getYTresults2() {
    return axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=netflix trailer&maxResults=50&key=${keys.Youtube}&channelId=UCWOA1ZGywLbqmigxE4Qlvuw&pageToken=CDIQAA`
    );
  }
  let data = await axios.all([getYTresults1(), getYTresults2()]).then(
    axios.spread(function(results1, results2) {
      console.log(results1, results2);
      let mergeResultsItems = [...results1.data.items, ...results2.data.items];
      console.log(_.chunk(mergeResultsItems, 15));
    })
  );
  dispatch({ type: Types.YTResults, payload: data });
};

//Show/Hide ContentDetails
export const toggleContentDetails = (snippet, id) => async (
  dispatch,
  getState
) => {
  function cleanTitleString(string) {
    let indexOfPipeChar = string.indexOf("|");
    return string.slice(0, indexOfPipeChar).replace(" ", "+");
  }
  console.log(snippet);
  let term = snippet.title ? cleanTitleString(snippet.title) : "";

  let res = await axios
    .get(`http://www.omdbapi.com/?t=${term}&apikey=${keys.OMDB}`)
    .then(res => {
      console.log(res);
      res.data.description = snippet.description;
      return res.data;
    });
  console.log(res);
  dispatch({
    type: Types.ToggleContentDetails,
    payload: { data: res, id: id }
  });
};
