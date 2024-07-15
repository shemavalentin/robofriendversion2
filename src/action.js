// let's import the constant into action file
//import { CHANGE_SEARCH_FIELD } from "./constant";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
  REQUEST_ROBOTS_PENDING,
} from "./constant";

export const setSearchField = (text) => ({
  // Here used paranthesis to avoid the return statement
  // The action is made of TYPE, and the PAYLOAD

  //type: "CHANGE-SEARCH-FIELD", //Here used capital letter cze it's a constant and it's a standard and

  // Now instead of using the text in TYPE, let's use one from the constant file
  type: CHANGE_SEARCH_FIELD,
  // it's better to use constant variable to in caps to be able to track error when we mispel the action whether to let it empty
  payload: text,
});

/* 
We need to use an actual constant variable because with just a string we can misspel
something and might not get the error but if we use a variable and we misspel it 
will actually get an error when we are running the app. So, it's a nice little nifty
trick and most redux demos have a constant file as well where they keep track
of all these actions and it's also nice to have a file where you can see what 
your actions are line by line because most apps will have more than just one action
*/

// creating actions for the above added constants

//export const requestRobots = (dispatch) => {       // this turned into a clausure function (a function that returns anothe function )
export const requestRobots = () => (dispatch) => {
  // we passed dispatch here cze we need to dispatch actions to reducer
  // and when using a middleware we wait them and dispatch then after. that's why we passed a dispatch

  dispatch({
    type: REQUEST_ROBOTS_PENDING,
    // payload: '' because it's pending, we don't have a payload yet.
  });

  //we also have an API that we need to call and wait
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    // here we have .then() and .catch()
    .then((data) => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    .catch((error) =>
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error })
    );

  // Technically speaking, here we are returning nothing
};

// Now both of our actions do not have a function,
// let's first update the state in App.js
