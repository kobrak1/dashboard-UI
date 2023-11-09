import { useState } from "react";
import { Chart, Bar, Line, XAxis, YAxis, Tooltip } from "react-chartjs-2";
import dbJSON from "../../db.json";

const CandleChart = () => {
  const [data, setData] = useState(data2023);
  const [year, setYear] = useState(2023);

  const data2023 = dbJSON.year2023

  const handleYearChange = (e) => {
    setYear(parseInt(e.target.value));
    setData(data[e.target.value]);
  };

  const renderCandle = ({ timestamp, open, high, low, close }) => {
    return (
      <Bar
        key={timestamp}
        dataKey="timestamp"
        x={timestamp}
        fill="#007bff"
        strokeWidth={2}
        barWidth={10}
        shape={{
          type: "rect",
          height: high - low,
          y: low,
        }}
      />
    );
  };

  return (
    <div>
      <button value="2020" onClick={handleYearChange}>
        2020
      </button>
      <button value="2021" onClick={handleYearChange}>
        2021
      </button>
      <button value="2022" onClick={handleYearChange}>
        2022
      </button>
      <button value="2023" onClick={handleYearChange}>
        2023
      </button>
      <Chart width={800} height={400} data={data}>
        <XAxis
          dataKey="timestamp"
          tickFormatter={(timestamp) => timestamp.toISOString().slice(0, 10)}
        />
        <YAxis />
        <Tooltip />
        <Line dataKey="open" stroke="#007bff" />
        <Line dataKey="high" stroke="#007bff" />
        <Line dataKey="low" stroke="#007bff" />
        <Line dataKey="close" stroke="#007bff" />
        {data.map(renderCandle)}
      </Chart>
    </div>
  );
};

export default CandleChart;
