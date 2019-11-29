import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Header, Table, Button, Icon, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import StockChart from "../charts/stockChart";
import Navbar from "../navbar/navbar";
import Vol from "./vol";
import "./volatility.css";
import Nivo from "../charts/Nivo";
import BarChart from "../charts/Bar";
import MyPie from "../charts/MyPie";

const Volatility = () => {
  // form state
  const [vol, setVol] = useState([]);
  const [stock, setStock] = useState("cme");
  const [crypto, setCrypto] = useState([]);
  const [chartdata, setChartData] = useState();

  console.log("volatility test:", vol);
  if (crypto === undefined) {
    setCrypto("cme");
  }
  console.log("test crypto:", crypto);

  // if (typeof Object.keys(vol) !== "undefined" && Object.keys(vol).length > 0) {
  //   setVol("");
  // }
  // const blankSpace = {
  //   labels: [
  //     "January 2003",
  //     "July 2003",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July"
  //   ]
  // };

  // if (vol === undefined || null) {
  //   let newAxis = {
  //     labels: [
  //       "January 2003",
  //       "July 2003",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July"
  //     ],
  //     datasets: [
  //       {
  //         label: "Price over Time",
  //         fill: false,
  //         lineTension: 0.1,
  //         backgroundColor: "rgba(75,192,192,0.4)",
  //         borderColor: "rgba(75,192,192,1)",
  //         borderCapStyle: "butt",
  //         borderDash: [],
  //         borderDashOffset: 0.0,
  //         borderJoinStyle: "miter",
  //         pointBorderColor: "rgba(75,192,192,1)",
  //         pointBackgroundColor: "#fff",
  //         pointBorderWidth: 1,
  //         pointHoverRadius: 5,
  //         pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //         pointHoverBorderColor: "rgba(220,220,220,1)",
  //         pointHoverBorderWidth: 2,
  //         pointRadius: 1,
  //         pointHitRadius: 10,
  //         data: [55, 59, 80, 81, 56, 55, 40]
  //       }
  //     ]
  //   };
  // }

  const newAxis = Object.keys(vol);
  // const newAxis = vol.map(el => Object.keys(el));
  const otherAxis = Object.values(vol).map(ele => ele.SMA);

  const barData = {
    labels: newAxis,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: otherAxis
      }
    ]
  };

  const data = {
    // labels: Object.keys(vol),
    labels: newAxis,
    datasets: [
      {
        label: "Price over Time",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        // data: Object.values(vol).map(ele => ele.SMA)
        data: otherAxis
      }
    ]
  };

  // const chartJsData = function() {
  //   return {
  //     data: {
  //       labels: [`${vol}`],
  //       datasets: [
  //         {
  //           label: "Price over Time",
  //           fill: false,
  //           lineTension: 0.1,
  //           backgroundColor: "rgba(75,192,192,0.4)",
  //           borderColor: "rgba(75,192,192,1)",
  //           borderCapStyle: "butt",
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: "miter",
  //           pointBorderColor: "rgba(75,192,192,1)",
  //           pointBackgroundColor: "#fff",
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: "rgba(75,192,192,1)",
  //           pointHoverBorderColor: "rgba(220,220,220,1)",
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [`${vol["SMA"]}`]
  //         }
  //       ]
  //     }
  //   };
  // };

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=LKWC7HB4USLTPXIL`
      )
      .then(res => {
        if (res.data) {
          // console.log("API fullData;", res.data);
          console.log("Api data:", res.data["Global Quote"]);
          if (res.data["Global Quote"] === undefined) {
            res.data["Global Quote"] = "cme";
          }
          setCrypto(res.data["Global Quote"]);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, [stock]);

  useEffect(() => {
    // console.log(stock);
    axios

      .get(
        ` https://www.alphavantage.co/query?function=SMA&symbol=${stock}&interval=weekly&time_period=10&series_type=open&apikey=LKWC7HB4USLTPXIL`
      )
      .then(res => {
        if (res.data) {
          console.log("truthytest", res.data["Technical Analysis: SMA"]);
          if (res.data["Technical Analysis: SMA"] === undefined) {
            res.data["Technical Analysis: SMA"] = "cme";
          }
          setVol(res.data["Technical Analysis: SMA"]);
        }
        // console.log("chart data:", res.data);
        // setVol(res.data["Technical Analysis: SMA"]);
        // console.log("statesetTest:", res.data["Technical Analysis: SMA"]);
        // const dataField = res.data;
        // dataField.map(data => {
        //   console.log("mapTest:", data);
        // });
        // const newData = res.data["Technical Analysis"];

        // was WMA in array brackets
      })
      .catch(error => {
        console.error(error);
      });
  }, [stock]);

  console.log("vollllllll", vol);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="vol-container2" onSubmit={handleSubmit}>
      <Navbar />
      <Header as="h1" textAlign="center" color="yellow">
        Equity Index Search
      </Header>
      <form className="vol-form">
        {/* <input
          placeholder="product code"
          name="product"
          value={stock.product}
          onChange={e => setStock(e.target.value)}
        /> */}
        <Input
          textAlign="center"
          size="large"
          icon="search"
          placeholder="Search..."
          name="product"
          value={stock}
          onChange={e => setStock(e.target.value)}
        />
      </form>
      {/* <Button circular icon="chart line" color="yellow" /> */}

      <Table celled padded>
        <Table.Header color="teal">
          <Table.Row>
            <Table.HeaderCell singleLine>Ticker/Symbol</Table.HeaderCell>
            <Table.HeaderCell>Open</Table.HeaderCell>
            <Table.HeaderCell>High</Table.HeaderCell>
            <Table.HeaderCell>Low</Table.HeaderCell>
            <Table.HeaderCell>Current Price</Table.HeaderCell>
            <Table.HeaderCell>Volume</Table.HeaderCell>
            <Table.HeaderCell>Latest Trading</Table.HeaderCell>
            <Table.HeaderCell>Previous Close</Table.HeaderCell>
            <Table.HeaderCell>Change</Table.HeaderCell>
            <Table.HeaderCell>% Change</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header as="h2" textAlign="center">
                {crypto["01. symbol"]}
              </Header>
            </Table.Cell>
            <Table.Cell singleLine>{crypto["02. open"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["03. high"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["04. low"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["05. price"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["06. volume"]}</Table.Cell>
            <Table.Cell singleLine>
              {crypto["07. latest trading day"]}
            </Table.Cell>
            <Table.Cell singleLine>{crypto["08. previous close"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["09. change"]}</Table.Cell>
            <Table.Cell singleLine>{crypto["10. change percent"]}</Table.Cell>
          </Table.Row>
          <Table.Row />
        </Table.Body>
      </Table>
      {/* <Vol /> */}

      {/* <button type="submit">chart it</button> */}
      {/* <button onSubmit={getData}>FB Data</button> */}
      {/* <div className="stock-charts">
        <StockChart />
      </div> */}
      <div id="root">
        <Nivo pinkUnicorn={data} stock={stock} />

        {/* <h2>
          I can render you data in almost any for you like, here are a few
          examples
        </h2> */}

        <BarChart pinkUnicorn={barData} />

        <MyPie />

        {/* <StockChart tableData={vol} /> */}
      </div>
    </div>
  );
};

export default Volatility;

// displayTitle={crypto} stock={crypto}
