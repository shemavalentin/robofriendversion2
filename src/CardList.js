import React from "react";
import Card from "./Card";

const CardList = ({ robots, id }) => {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={id}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
