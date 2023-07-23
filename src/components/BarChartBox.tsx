import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type barChartType = {
  title: string;
  color: string;
  dataKey: string;
  chartData: object[];
};

const BarChartBox = (props: barChartType) => {
  return (
    <div className="h-full w-full flex flex-col justify-around">
      <h4 className="text-white font-semibold">{props.title}</h4>
      <ResponsiveContainer width="100%" height={"80%"}>
        <BarChart width={150} height={40} data={props.chartData}>
          <Tooltip
            contentStyle={{
              backgroundColor: "#2a3447",
              color: "white",
              border: "none",
              padding: 4,
              borderRadius: 4,
            }}
            labelStyle={{ display: "none" }}
            cursor={{fill: "none"}}
          />
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartBox;
