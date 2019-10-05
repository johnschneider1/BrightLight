import React from "react";
import { Card } from "semantic-ui-react";

const items = [
  {
    header: "Ian Jansing",
    description: "Your session has ended please login to continue.",
    meta: "Session Length: 57 minutes."
  }
];

function Goodbye() {
  return (
    <div>
      <Card.Group items={items}></Card.Group>
    </div>
  );
}
// const CardExampleGroupProps = () => <Card.Group items={items} />;

// export default CardExampleGroupProps;

export default Goodbye;
