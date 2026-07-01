import React, { useEffect, useState } from "react";
import axios from "axios";
import { AreaChart, Area, CartesianGrid, Tooltip } from "recharts";
function Rechartcomponent() {
  const [state, setstate] = useState([]);
  const [graph, setgraph] = useState([]);
  const url = new URL(
    "http://solardex.herokuapp.com/swap/chart?quote=3bK9z2C76mpDbjZmTteRgNi5oAwzTim36dEfVqYgehpn&base=ofML6MvYCY3tX7FEVMawNpuwXvMhfPHx32N6sit46vH&range=1day"
  );
  const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const ChartsretriveAPI = async () => {
    await axios
      .get(url, header)
      .then((response) => {
        console.log("reponse products data", response.data);
        const apivalue = response.data;
        setstate((previous) => [...previous, ...apivalue]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    async function anyNameFunction() {
      await ChartsretriveAPI();
    }
    anyNameFunction();
  }, []);
  //   state && console.log("state data", state[0].points);
  return (
    <div
      style={{
        margin: "auto",
        width: "730px",
        height: "25px",
        position: "relative",
        top: "50px",
      }}
    >
      <h1>Recharts API</h1>
      <AreaChart
        width={730}
        height={250}
        data={state[0]?.points}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f5f5f5" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          wrapperStyle={{ backgroundColor: "black" }}
          labelStyle={{ color: "blue" }}
          itemStyle={{ color: "blue" }}
        />
        <Area
          type="monotone"
          dataKey="date"
          stroke="#82ca9d"
          fillOpacity={1}
          fill=" rgb(0, 0, 255,0.8)"
        />

        <Area
          type="monotone"
          dataKey="price"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
}

export default Rechartcomponent;
