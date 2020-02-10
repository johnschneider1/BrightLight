import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
    }
  ]
};

export default class MyPie extends React.Component {
  constructor(props) {
    super(props);
    console.log("test props:", props.pinkUnicorn);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Pie Example #3</h2>
        <Pie data={data} />
      </div>
    );
  }
}
