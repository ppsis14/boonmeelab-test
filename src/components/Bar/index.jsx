import chartClass from "../BartChart/BarChart.module.css";
import barClass from "./Bar.module.css";
function Bar({ year, value, partition, minVal, maxVal }) {
  const { negBarWidth, posBarWidth } = partition;
  // console.log(year, value, partition, minVal, maxVal);

  return (
    <div className={chartClass.chart_boundary}>
      {/* text */}
      <div className={chartClass.label_box}>{year}</div>
      {/* bar */}
      <div className={barClass.bar_box}>
        {/* left partition */}
        <div
          style={{ width: `${negBarWidth}%` }}
          className={`h-full flex justify-end items-center`}
        >
          <div
            style={{
              width: `${
                minVal === value
                  ? 100
                  : ((Math.abs(value) * 100) / (0 - minVal)).toFixed(2)
              }%`,
              height: "100%",
              backgroundColor: `${value > 0 ? "#333333" : "#ED2E7C"}`,
            }}
          ></div>
        </div>
        {/* right partition */}
        <div
          style={{ width: `${posBarWidth}%` }}
          className={`h-full flex justify-start items-center`}
        >
          <div
            style={{
              width: `${
                maxVal === value ? 100 : ((value * 100) / maxVal).toFixed(2)
              }%`,
              height: "100%",
              backgroundColor: `${value > 0 ? "#ED2E7C" : "#333333"}`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
