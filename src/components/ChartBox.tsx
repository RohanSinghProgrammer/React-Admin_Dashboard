import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";

type chartType = {
  color: string;
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: object[];
};


const ChartBox = (props: chartType) => {
  return (
    <div className="flex flex-col sm:flex-row items-center h-64 sm:h-full">
      {/* left section */}
      <div className="w-full sm:w-5/12 h-full flex flex-col justify-between">
        <div className="flex items-center space-x-1">
          <img src={props.icon} className="h-6" />
          <p className="text-xs text-soft-color font-semibold">{props.title}</p>
        </div>
        <p className="text-xl font-bold text-white">{props.number}</p>
        <Link to={"/"} style={{color: props.color}} className="text-xs">
          View all
        </Link>
      </div>
      {/* right section */}
      <div className="w-full sm:w-7/12 h-full flex flex-col justify-between">
        <div className="h-full pl-8">
          <ResponsiveContainer width="99%" height="99%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 10, y: 20 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <p
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
            className="font-semibold text-end"
          >
            {props.percentage}%
          </p>
          <p className="text-end text-xs text-soft-color">this month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartBox;
