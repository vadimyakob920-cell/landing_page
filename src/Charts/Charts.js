import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./Charts.css";
function Charts() {
  const [state, setState] = useState({
    options: {
      colors: ["#FF9800", "#E91E63"],
      chart: {
        id: "basic-bar",
      },
    },
    series: [
      {
        name: "People Born",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });
  return (
    <div className="App">
      <h1>React Charts Demo</h1>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            width="450"
          />
        </div>
      </div>
    </div>
  );
}

export default Charts;
