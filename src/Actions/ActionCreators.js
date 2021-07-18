import * as actionTypes from './ActionTypes';
export const fetchPosts = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts =>{
      posts = posts.splice(0,2)
      dispatch({
        type: actionTypes.FETCH_POSTS,
        payload: posts
      })
    })
    
};
export const postUser = (postUser) => {
  return function (dispatch,getState){
    let state = getState();
    console.log(state)
    dispatch({
      type:actionTypes.POST_USER,
      payload:postUser
    })
  }
}
export const deleteUser = (userId) => {
  return function(dispatch,getState){
    
    dispatch({
      type:actionTypes.DELETE_USER,
      payload:userId
    })

  }
}