import React from "react";
import { Line } from "react-chartjs-2";

// const rapid = "dataset";
// const nummy = 112;

// const data = {
//   labels: [
//     "January 2003",
//     "July 2003",
//        "March",
//     "April",
//     "May",
//     "June",
//     "July",

//   ],
//   datasets: [
//     {
//       label: "Price over Time",
//       fill: false,
//       lineTension: 0.1,
//       backgroundColor: "rgba(75,192,192,0.4)",
//       borderColor: "rgba(75,192,192,1)",
//       borderCapStyle: "butt",
//       borderDash: [],
//       borderDashOffset: 0.0,
//       borderJoinStyle: "miter",
//       pointBorderColor: "rgba(75,192,192,1)",
//       pointBackgroundColor: "#fff",
//       pointBorderWidth: 1,
//       pointHoverRadius: 5,
//       pointHoverBackgroundColor: "rgba(75,192,192,1)",
//       pointHoverBorderColor: "rgba(220,220,220,1)",
//       pointHoverBorderWidth: 2,
//       pointRadius: 1,
//       pointHitRadius: 10,
//       data: [55, 59, 80, 81, 56, 55, 40]
//     }
//   ]
// };

export default class ChartsJs extends React.Component {
  constructor(props) {
    super(props);
    console.log("test props:", props.pinkUnicorn);
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
        <h2>Simple Moving Average</h2>
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
