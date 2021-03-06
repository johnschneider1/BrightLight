import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Header, Table, Button, Icon, Input, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import StockChart from "../charts/stockChart";
import Navbar from "../navbar/navbar";
import Vol from "./vol";
import "./volatility.css";
import Nivo from "../charts/Nivo";
import BarChart from "../charts/Bar";
import MyPie from "../charts/MyPie";
import Ema from "../charts/ema";
import Vwap from "../charts/vwap";
import Wma from "../charts/wma";

const Volatility = () => {
  // form state
  const [vol, setVol] = useState([]);
  const [stock, setStock] = useState("cme");
  const [crypto, setCrypto] = useState([]);
  const [chartdata, setChartData] = useState();
  const [isShown, setIsShown] = useState(false);
  const [newText, setNewText] = useState("This is the new text");
  const [newema, setNewema] = useState([]);
  const [newvwap, setNewvwap] = useState([]);
  const [newbbands, setBbands] = useState([]);
  const [newwma, setNewwma] = useState([]);

  const toggleTrueFalse = () => setIsShown(!isShown);

  console.log("volatility test:", vol);
  if (crypto === undefined) {
    setCrypto("cme");
  }
  console.log("test crypto:", crypto);

  // Logic for nivo graph axis
  const newAxis = Object.keys(vol);
  const otherAxis = Object.values(vol).map((ele) => ele.SMA);

  const data = {
    labels: newAxis,
    datasets: [
      {
        label: "Price",
        fill: true,
        lineTension: 0.1,
        // backgroundColor: "rgba(75,192,192,0.4)",
        backgroundColor: "rgba(234,255,3,0.6)",
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
        data: otherAxis,
      },
    ],
  };
  // EMA Logic for axis
  const newAxisema = Object.keys(newema);
  const otherAxisema = Object.values(newema).map((ele) => ele.EMA);

  const EmaData = {
    labels: newAxisema,
    datasets: [
      {
        label: "Price",
        fill: true,
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
        data: otherAxisema,
      },
    ],
  };

  // vwap Logic for axis
  const newAxisvwap = Object.keys(newvwap);
  const otherAxisvwap = Object.values(newvwap).map((ele) => ele.VWAP);

  const VwapData = {
    labels: newAxisvwap,
    datasets: [
      {
        label: "Price",
        fill: true,
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
        data: otherAxisvwap,
      },
    ],
  };

  // wma Logic for axis
  const newAxiswma = Object.keys(newwma);
  const otherAxiswma = Object.values(newwma).map((ele) => ele.WMA);

  const wmaData = {
    labels: newAxiswma,
    datasets: [
      {
        label: "Price",
        fill: true,
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
        data: otherAxiswma,
      },
    ],
  };

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=LKWC7HB4USLTPXIL`
      )
      .then((res) => {
        if (res.data) {
          // console.log("API fullData;", res.data);
          console.log("Api data:", res.data["Global Quote"]);
          if (res.data["Global Quote"] === undefined) {
            res.data["Global Quote"] = "cme";
          }
          setCrypto(res.data["Global Quote"]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [stock]);

  useEffect(() => {
    // console.log(stock);
    axios

      .get(
        ` https://www.alphavantage.co/query?function=SMA&symbol=${stock}&interval=weekly&time_period=10&series_type=open&apikey=LKWC7HB4USLTPXIL`
      )
      .then((res) => {
        if (res.data) {
          console.log("SMARAW:", res.data);
          console.log("truthytestSMA", res.data["Technical Analysis: SMA"]);
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
      .catch((error) => {
        console.error(error);
      });
  }, [stock]);

  const handleClickema = () => {
    axios

      .get(
        ` https://www.alphavantage.co/query?function=EMA&symbol=${stock}&interval=weekly&time_period=10&series_type=open&apikey=LKWC7HB4USLTPXIL`
      )
      .then((res) => {
        if (res.data) {
          console.log("PUREEMA:", res.data);
          console.log("EMA TEST:", res.data["Technical Analysis: EMA"]);

          setNewema(res.data["Technical Analysis: EMA"]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClickvwap = () => {
    //www.alphavantage.co/query?function=VWAP&symbol=IBM&interval=15min&apikey=demo

    https: axios

      .get(
        ` https://www.alphavantage.co/query?function=VWAP&symbol=${stock}&interval=15min&apikey=LKWC7HB4USLTPXIL`
      )
      .then((res) => {
        if (res.data) {
          console.log("VWAP TEST:", res.data["Technical Analysis: VWAP"]);

          setNewvwap(res.data["Technical Analysis: VWAP"]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClickvwma = () => {
    //www.alphavantage.co/query?function=VWAP&symbol=IBM&interval=15min&apikey=demo

    https: axios

      .get(
        ` https://www.alphavantage.co/query?function=WMA&symbol=${stock}&interval=weekly&time_period=10&series_type=open&apikey=LKWC7HB4USLTPXIL`
      )
      .then((res) => {
        if (res.data) {
          console.log("WMA TEST:", res.data["Technical Analysis: WMA"]);
          if (res.data["Technical Analysis: WMA"] === undefined) {
            res.data["Technical Analysis: WMA"] = "cme";
          }
          setNewwma(res.data["Technical Analysis: WMA"]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClickbbands = () => {
    //www.alphavantage.co/query?function=VWAP&symbol=IBM&interval=15min&apikey=demo

    https: axios

      .get(
        ` https://www.alphavantage.co/query?function=BBANDS&symbol=${stock}&interval=weekly&time_period=5&series_type=close&nbdevup=3&nbdevdn=3&apikey=LKWC7HB4USLTPXIL`
      )
      .then((res) => {
        if (res.data) {
          console.log("BBANDS TEST:", res.data["Technical Analysis: BBANDS"]);
          if (res.data["Technical Analysis: BBANDS"] === undefined) {
            res.data["Technical Analysis: BBANDS"] = "cme";
          }
          setBbands(res.data["Technical Analysis: VWAP"]);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // https://www.alphavantage.co/query?function=BBANDS&symbol=IBM&interval=weekly&time_period=5&series_type=close&nbdevup=3&nbdevdn=3&apikey=demo

  console.log("vollllllll", vol);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const replace = (e) => {};

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
          onChange={(e) => setStock(e.target.value)}
        /> */}
        <Input
          textAlign="center"
          size="large"
          icon="search"
          placeholder="Search..."
          name="product"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
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
        <div className="addcharts">
          <h1>Other Charts available for: {stock.toUpperCase()}</h1>
          {/* <Button inverted color="yellow">
            {stock.toUpperCase()} last ten opens
          </Button> */}
          {/* <Button inverted color="yellow" onClick={handleClickbbands}>
            {stock.toUpperCase()} BBANDS
          </Button> */}
          <Button
            inverted
            color="yellow"
            onClick={() => {
              handleClickvwma();
              toggleTrueFalse();
            }}
          >
            {stock.toUpperCase()} WMA
          </Button>
          <Button
            inverted
            color="yellow"
            onClick={() => {
              handleClickema();
              toggleTrueFalse();
            }}
          >
            {stock.toUpperCase()} EMA
          </Button>
          <Button
            inverted
            color="yellow"
            onClick={() => {
              handleClickvwap();
              toggleTrueFalse();
            }}
          >
            {stock.toUpperCase()} VWAP
          </Button>
          {/* <Popup
            content="Add VWAP to the Page Below"
            trigger={<Button icon="add" />}
          /> */}
        </div>
        <Nivo pinkUnicorn={data} stock={stock.toUpperCase()} />

        {isShown ? (
          <Ema pinkUnicorn={EmaData} stock={stock.toUpperCase()} />
        ) : null}

        {isShown ? (
          <Vwap pinkUnicorn={VwapData} stock={stock.toUpperCase()} />
        ) : null}

        {isShown ? (
          <Wma pinkUnicorn={wmaData} stock={stock.toUpperCase()} />
        ) : null}

        {/* <h2>
          I can render you data in almost any for you like, here are a few
          examples
        </h2> */}

        {/* <BarChart pinkUnicorn={barData} /> */}
      </div>
    </div>
  );
};

export default Volatility;
