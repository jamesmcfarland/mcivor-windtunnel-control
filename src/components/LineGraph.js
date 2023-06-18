"use client";

import { Card, Title, LineChart } from "@tremor/react";
import { useEffect, useState } from "react";

const chartdata = [
  {
    year: 1970,
    target: 2.04,
    actual: 1.53,
  },
  {
    year: 1971,
    target: 1.96,
    actual: 1.58,
  },
  {
    year: 1972,
    target: 1.96,
    actual: 1.61,
  },
  {
    year: 1973,
    target: 1.93,
    actual: 1.61,
  },
  {
    year: 1974,
    target: 1.88,
    actual: 1.67,
  },
  //...
];

const dataFormatter = (number) => `${Math.round(number)} RPM`;

const LineGraph = ({ fanName, isGlobal = false }) => {
  const [chartData, setchartData] = useState(chartdata);

  useEffect(() => {
    const interval = setInterval(() => {
      setchartData((p) => [
        ...p.slice(p.length - 20, p.length),
        {
          year: p[p.length - 1].year,
          target: Math.random() * 1800,
          actual: Math.random() * 1800,
        },
      ]);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={isGlobal ? "col-span-2" : "col-span-1"}>
      <Card>
        <Title>{fanName} target</Title>
        <LineChart
          className="mt-6 h-48"
          data={chartData}
          index="year"
          categories={["target", "actual"]}
          colors={["emerald", "gray"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
          showAnimation={false}
        />
      </Card>
    </div>
  );
};

export default LineGraph;
