import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={totalMax}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
