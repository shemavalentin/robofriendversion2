import React from "react";
import ReactDOM from "react-dom/client";

// to connect our app and the redux we have to import some API from the library we installed(react-redux)
import { Provider } from "react-redux";

// To create a store we need to import another module
import { legacy_createStore, applyMiddleware } from "redux";

// importing the package from redux-logger we installed
import { createLogger } from "redux-logger";

import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
//import { robots } from "./robots";
import { searchRobots } from "./reducers";

// let's create a logger now
const logger = createLogger(); // after creating it let's apply it to our app by adding applyMiddleware

// after importing the configStore let's create the store
const store = legacy_createStore(searchRobots, applyMiddleware(logger)); // we could have the rootReducer, but now we have only one reducer that is searchRobots

// then pass the store of our App component as a prop to React to be rendered
// and
// Remember we can remove the App component as one that possess our state and define it
// our state then pass the store as a prop to react to render it.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // The provider component used to passe down the store to other components down the tree.
  // then the store is created by the rootReducer or whatever reducer using the legacy_createStore.
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
