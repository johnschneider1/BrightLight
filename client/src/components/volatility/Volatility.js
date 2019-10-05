import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Header, Table, Button, Icon, Input } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import StockChart from "../charts/stockChart";
import Navbar from "../navbar/navbar";

const Volatility = () => {
  // form state
  const [vol, setVol] = useState([]);
  const [stock, setStock] = useState("cme");
  const [crypto, setCrypto] = useState([]);

  // api state

  const [data, setData] = useState();

  // Quote Endpoint: high usage https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=LKWC7HB4USLTPXIL`
      )
      .then(res => {
        console.log("Api data:", res.data["Global Quote"]);
        setCrypto(res.data["Global Quote"]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [stock]);

  const handleSubmit = e => {
    e.preventDefault();
    setStock();
  };

  return (
    <div className="vol-container" onSubmit={handleSubmit}>
      <Navbar />
      <Header as="h1" textAlign="center" color="yellow">
        Eqyity Index Search
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
          value={stock.product}
          onChange={e => setStock(e.target.value)}
        />
      </form>

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

      {/* <button type="submit">chart it</button> */}
      {/* <button onSubmit={getData}>FB Data</button> */}
      {/* <div className="stock-charts">
        <StockChart />
      </div> */}
      <div id="root">
        <StockChart />
      </div>
    </div>
  );
};

export default Volatility;
