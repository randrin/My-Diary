import { database } from "../firebase";

export function saveComment(noteId, comment) {
  return (dispatch) => database.child(noteId).child("comments").push(comment);
}
