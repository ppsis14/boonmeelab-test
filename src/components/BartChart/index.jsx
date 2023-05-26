import { useMemo } from "react";
import classes from "./BarChart.module.css";
import Bar from "../Bar/index";

const transformData = (data) => {
  const newData = data.map(({ dcode, name, ...stat }) => ({ ...stat }));
  // console.log("newData:", newData);
  const newObject = Object.entries(newData[0]).map(([key, val]) => ({
    year: key,
    stat: Number(val.replace("%", "")),
  }));

  console.log("newObject:", newObject);
  const statVal = Object.values(newData[0]).map((val) =>
    Number(val.replace("%", ""))
  );

  const minVal = Math.min(...statVal);
  const maxVal = Math.max(...statVal);

  return {
    data: newObject,
    minVal: minVal,
    maxVal: maxVal,
  };
};

const getBarPartition = (minVal, maxVal) => {
  let scaleWidth = 0;
  let negBarWidth = 0;
  let posBarWidth = 0;

  if (maxVal < 0) {
    scaleWidth = minVal - maxVal;
  } else if (minVal > 0) {
    scaleWidth = maxVal - minVal;
  } else if ((maxVal > 0) & (minVal < 0)) {
    scaleWidth = ((maxVal - minVal) / 100).toFixed(4);
    negBarWidth = ((0 - minVal) / Math.abs(scaleWidth)).toFixed(2);
    posBarWidth = 100 - negBarWidth;
  }

  return {
    negBarWidth: negBarWidth,
    posBarWidth: posBarWidth,
  };
};

function BarChart({ data }) {
  const dataSource = useMemo(() => transformData(data), [data]);

  // console.log("dataSource:", dataSource);

  return (
    <div className={classes.chart_container}>
      <>
        {/* chart boundary */}
        <div className={classes.chart_boundary}>
          <div className={classes.label_box}></div>
          <div className={classes.boundary_box}>
            <span className="">{`${dataSource.minVal}%`}</span>
            <span className="">{`${dataSource.maxVal}%`}</span>
          </div>
        </div>
        {/* bar chart */}
        {dataSource.data.map((item, idx) => {
          return (
            <Bar
              key={idx}
              year={item.year}
              value={item.stat}
              partition={getBarPartition(dataSource.minVal, dataSource.maxVal)}
              minVal={dataSource.minVal}
              maxVal={dataSource.maxVal}
            />
          );
        })}
      </>
    </div>
  );
}

export default BarChart;
