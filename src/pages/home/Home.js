import React from "react";
import Chart from "../../components/Chart/Chart";
import Feature from "../../components/features/Feature";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import { xAxisData } from "../../datas";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Feature />
      <Chart grid title="Month sale" data={xAxisData} dataKey="Sale" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
