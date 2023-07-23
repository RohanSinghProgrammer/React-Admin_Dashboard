import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mobile", value: 400 },
  { name: "Laptop", value: 300 },
  { name: "Desktop", value: 300 },
  { name: "Tablet", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChartBox = () => {
  return (
    <div className="w-full h-full">
      <h3 className="text-white font-bold text-xl">Leads by Source</h3>
      <ResponsiveContainer height="80%" width="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((_,index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* legend */}
      <div className="flex flex-wrap w-full justify-between">
        {data.map((item, index) => (
          <div className=" grid place-items-center">
            <div className="flex items-center space-x-1.5">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />
              <p className="text-xs text-gray-100">{item.name}</p>
            </div>
            <p className="text-xs text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartBox;
