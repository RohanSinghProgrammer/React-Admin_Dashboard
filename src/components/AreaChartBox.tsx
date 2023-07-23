import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";

const data = [
  {
    name: "Sun",
    electronics: 4000,
    grocery: 2400,
    fashion: 2400,
  },
  {
    name: "Mon",
    electronics: 3000,
    grocery: 1398,
    fashion: 2210,
  },
  {
    name: "Tue",
    electronics: 2000,
    grocery: 9800,
    fashion: 2290,
  },
  {
    name: "Wed",
    electronics: 2780,
    grocery: 3908,
    fashion: 2000,
  },
  {
    name: "Thu",
    electronics: 1890,
    grocery: 4800,
    fashion: 2181,
  },
  {
    name: "Fri",
    electronics: 2390,
    grocery: 3800,
    fashion: 2500,
  },
  {
    name: "Sat",
    electronics: 3490,
    grocery: 4300,
    fashion: 2100,
  },
];

const AreaChartBox = () => {
  return (
    <div className="h-full w-full flex-col justify-between">
      <h3 className="text-white font-bold text-2xl mb-4">Revenue Analysis</h3>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            cursor={{ display: "none" }}
            contentStyle={{
              backgroundColor: "#2a3447",
              border: "none",
              borderRadius: 4,
            }}
            labelStyle={{ display: "none" }}
          />
          <Area
            type="monotone"
            dataKey="electronics"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="grocery"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="fashion"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChartBox;
