import React from "react";

const Card = ({ name, email, id }) => {
  //Destructuring what I'm passing as props
  //const { name, email, id } = props;
  return (
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-s">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`}></img>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
