import { Types } from "./Types";

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
