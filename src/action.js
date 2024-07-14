// let's import the constant into action file
import { CHANGE_SEARCH_FIELD } from "./constant";

export const setSearchFeald = (text) => ({
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
