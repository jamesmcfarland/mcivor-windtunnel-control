"use client";

import { Card, Title, LineChart, AreaChart } from "@tremor/react";
const dataFormatter = (number) => `${Math.round(number)} RPM`;

const LineGraph = ({ fanName, isGlobal = false, data }) => {
  return (
    <div className={isGlobal ? "col-span-2" : "col-span-1"}>
      <Card>
        <Title>{fanName} target</Title>
        <AreaChart
          className="mt-6 h-48"
          data={data}
          index="index"
          categories={["target", "actual"]}
          colors={["emerald", "cyan"]}
          valueFormatter={dataFormatter}
          yAxisWidth={40}
          showAnimation={false}
        />
      </Card>
    </div>
  );
};

export default LineGraph;
