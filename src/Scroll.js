import React from "react";

// Now every props object has children
// let's pass the props in Scroll component it will give us access to children.
const Scroll = (props) => {
  /* console.log(props); // every single component in react has this property children
  //return "hi";
  // return props.children; */

  // now by using the props.children let's create the scrollable functionality.

  // Note here, we could create the CSS file to add the scrollable styles we
  // need but let's use other way.
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

/*
P.S: Normally we can wrap the html like(JSX) syntax but we can not wrap 
the custom components we create that are capitalized. but we can by using
 
*/
