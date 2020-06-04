import React from "react";
import { Line } from "react-chartjs-2";

export default class ChartsJs extends React.Component {
  constructor(props) {
    super(props);
    console.log("test props ema:", props.pinkUnicorn);
    this.state = {};
  }

  static defaultProps = {
    displayTitle: false,
    displayLegend: false,
    legendPosition: "top",
    stock: "cme",
  };

  render() {
    return (
      <div>
        <h2>Exponential Moving Average</h2>
        <Line
          data={this.props.pinkUnicorn}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Line Graph For " + this.props.stock,
              fontSize: 25,
              //   responsive: true
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
            },
          }}
        />
      </div>
    );
  }
}
