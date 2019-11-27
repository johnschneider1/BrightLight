import React, { useState, useEffect } from "react";
import { Header, Table, Button, Icon, Input } from "semantic-ui-react";
import axios from "axios";

const Vol = props => {
  const [stock, setStock] = useState("cme");
  const [crypto, setCrypto] = useState([]);

  // https://www.alphavantage.co/query?function=WMA&symbol=MSFT&interval=weekly&time_period=10&series_type=open&apikey=demo

  useEffect(() => {
    console.log(stock);
    axios

      .get(
        ` https://www.alphavantage.co/query?function=WMA&symbol=${stock}&interval=weekly&time_period=10&series_type=open&apikey=LKWC7HB4USLTPXIL`
      )
      .then(res => {
        console.log("chart data:", res.data);
        setCrypto(res.data["WMA"]);
      })
      .catch(error => {
        console.error(error);
      });
  }, [stock]);

  return (
    <div className="Vol-container">
      <h1>Last 10 days weighted moving average</h1>
      <Button
        circular
        icon="chart line"
        color="yellow"
        onClick={e => setStock(e.target.value)}
      />

      <div>crypto={crypto}</div>
    </div>
  );
};

export default Vol;
