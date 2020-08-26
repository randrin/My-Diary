export const GET_NOTES = "GET_NOTES";

export default function (state = {}, action) {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    default:
      return state;
  }
}
