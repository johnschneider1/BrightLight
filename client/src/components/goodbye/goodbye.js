import React from "react";
import { Card } from "semantic-ui-react";
import "./goodbye.css";

const items = [
  {
    header: "Ian Jansing",
    description: "Your session has ended please login to continue.",
    meta: "Session Length: 57 minutes."
  }
];

function Goodbye() {
  return (
    <div className="byebox">
      <img
        className="byeImage"
        src="https://i.imgur.com/IjSQ94T.jpg"
        alt="goodbye"
        // width={500}
        // height={500}
      />
      {/* <Card.Group items={items}></Card.Group> */}
    </div>
  );
}
// const CardExampleGroupProps = () => <Card.Group items={items} />;

// export default CardExampleGroupProps;

export default Goodbye;
