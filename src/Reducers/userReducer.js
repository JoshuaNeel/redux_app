import * as actionTypes from '../Actions/ActionTypes';
const initialState = {
  users: []
};
export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        users: action.payload
      };
    case actionTypes.POST_USER:
      let users = state.users;
      users = [...state.users, action.payload]
      return {
        ...state,
        users: users
      };
    case actionTypes.DELETE_USER:
      console.log(state);
      let filteredArray = state.users.filter(user => {
        return user.name !== action.payload
      })
      return {
        ...state,
        users: filteredArray
      }
    default:
      return state;
  }
}