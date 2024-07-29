// as we are going to need the action let's import it here.
//import { CHANGE_SEARCH_FIELD } from "./constant";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constant";

// Let's create the initial state as we have it in the app.js
// Note that it is the one we will have in the store initially

const initialStateSearch = {
  searchField: "",
};

// CREATING A REDUCER

// Now let's create a REDUCER that is pure function  and because we are going to
//  use it in other places let's export it .

//export const searchRobots = (state, action)  // but to avoid error that may araise
// let's use ES6 and assign state and action variables

export const searchRobots = (state = initialStateSearch, action = {}) => {
  // Here if we care an action and we receive an action that is related to searching robots we gonna act upon the state
  // let's use SWITCH case Statement
  switch (
    action.type // SWITCH is recommanded as we need to keep on adding condtion that affect the state and it is recommended in redux tutorials
  ) {
    case CHANGE_SEARCH_FIELD:
      // NOTE THAT HERE IT TURNS TO THE 3 PRONCIPLES( Single source of truth, State is read only, Change using pure function)
      // let's return the copy of the state and what we need to change
      // we do this using (Object.assign) to copy the source to the target

      return Object.assign({}, state, { searchField: action.payload });

    // another of doing this is using object destructuring and it is cleaner than this
    //return { ...state, searchField: action.payload }

    // a pure function always return something

    default:
      return state;
  }
};

// creating the initialstate for robots

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: "",
};
//========== Let's create another reducer apart to not combine them.

export const requestRobots = (state = initialStateRobots, action = {}) => {
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return Object.assign({}, state, { isPending: true }); // here created an object isPending and set it to true

    case REQUEST_ROBOTS_SUCCESS:
      return Object.assign({}, state, {
        robots: action.payload,
        isPending: false,
      });

    case REQUEST_ROBOTS_FAILED:
      return Object.assign({}, state, {
        error: action.payload, // what need to be changed
        isPending: false,
      });

    //alwayse when a reducer does not return anything it returns the default state.
    default:
      return state;
  }
};
