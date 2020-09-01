import { auth, googleProvider, twitterProvider } from "../firebase";
import { GET_USER } from "../actions/actionTypes";

export function googleLogin() {
  return (dispatch) => auth.signInWithPopup(googleProvider);
}

export function twitterLogin() {
  return (dispatch) => auth.signInWithPopup(twitterProvider);
}

export function getUser() {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      dispatch({
        type: GET_USER,
        payload: user,
      });
    });
  };
}
