import { GET_NOTES, NOTES_STATUS } from "../actions/actionTypes";
import { database } from "../firebase";

export function getNotes() {
  return (dispatch) => {
    // Show loading to true
    dispatch({
      type: NOTES_STATUS,
      payload: true,
    });
    database.on(
      "value",
      (snapshot) => {
        dispatch({
          type: GET_NOTES,
          payload: snapshot.val(),
        });
        // Show loading to false
        dispatch({
          type: NOTES_STATUS,
          payload: false,
        });
      },
      // Wait something change and try again
      () => {
        dispatch({
          type: NOTES_STATUS,
          payload: -1,
        });
      }
    );
  };
}

export function saveNote(note) {
  return (dispatch) => database.push(note);
}

export function deleteNote(id) {
  return (dispatch) => database.child(id).remove();
}
