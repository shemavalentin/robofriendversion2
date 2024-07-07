import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
//import { robots } from "./robots";
import Scroll from "../components/Scroll";
import "./App.css";

// creating a state object to describe what our state should be

// const state = {
//   robots: "robots",
//   searchField: "",
// };

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
      <h2>Loading... </h2>
    ) : (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          {/* now the CardList componet is the children to Scroll componet
            . even though in Scroll there is props passed but automatically every componet
            in react has children
            the scroll can use children as a way to render it's children. */}
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
