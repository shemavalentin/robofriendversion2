import React, { Component } from "react";

//Now let's import connect from react-redux to connect the container to action component
import { connect } from "react-redux"; // implemented down
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
//import { robots } from "./robots";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "./App.css";

// as the Provider component is now working but we need to connect it to
// contianners or smart objects or states components. Now we have to import
// action component in here.

import { setSearchField } from "../action";

// creating a state object to describe what our state should be

// const state = {
//   robots: "robots",
//   searchField: "",
// };

// Let's now tell the smart (App in this case)component what sate it should listen to

const mapStateToProps = (state) => {
  return {
    searchfield: state.searchRobots.searchfield, // the searchField here is the state from reducer(initial state)
  }; // searchRobots is from reducer and we created the store using the searchRobots(it is the only one reducer)
  // and it is considered as the root reducer.
};

// Telling the App which action or dispact it should listen to
const mapDispatchToProps = (dispatch) => {
  // dispatch here is what triggers the action.(Flux pattern). in order to
  // to send the action we needs dispatch function so that the action can get dispatched to the reducer
  return {
    // onSearchChange can be any name but let use the one we have
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value)); // setSearchField is an action to be dispatched.
    },
  };
};
class App extends Component {
  // in order to be abble to use state here I need to use constructor
  // and bring what I need to be my state( what describes our App)
  // Now we have our state. State is something that can change.
  // it can change our APP/ affect our APP and usually live in the parent component
  // the component that passes state to different components.
  constructor() {
    super();
    this.state = {
      robots: [],
      // robots: robots,
      //robots,
      searchfield: "",
    };
  }
  // Let's use life cycle hook to mount our page in the DOM.
  // it mounts it automatically without calling it
  componentDidMount() {
    // console.log(this.props.store.getState());
    // using fetch function
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  //   // let's access our robots now
  //   this.setState({ robots: robots });
  // }

  // a method to keep track of input change in the searchBox/ that manupulate
  // the data in the class object

  // and used arrow function to refere to App object not the component object (local environment context)
  onSearchChange = (event) => {
    // here update the state in search field as user search in search field
    this.setState({ searchfield: event.target.value });

    //console.log(filteredRobots);
  };

  render() {
    // Here we use destructuring
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    // Where there is a long lag awaiting the response from the API use condition to show loading
    return !robots.length ? (
      <h2>Loading...</h2>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {/* now the CardList componet is the children to Scroll componet
            . even though in Scroll there is props passed but automatically every componet
            in react has children
            the scroll can use children as a way to render it's children. */}
          {/* <ErrorBoundary> */}
          <CardList robots={filteredRobots} />
          {/* </ErrorBoundary> */}
        </Scroll>
      </div>
    );
  }
}

// export default App;

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is a higher order function. that is
// a function that returns another function. the connect function takes two parameters
// that tells it which state should listen to, which action should listen to.

// like this any component connected/ subscribed like this should know that
// there is a store somewhere and anytime there is any change to it
// it might be interested to it.

/*
mapStateToProps: telling the connected component which state it should listen to

mapDispatchToProps: Telling the connected component which action it should listen to

*/
