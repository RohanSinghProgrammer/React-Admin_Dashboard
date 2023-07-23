import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

type Props = {
  id: number;
  title: string;
  img?: string;
  info: object;
  chart: {
    dataKeys: { name: string; color: string }[];
    data: {
      name: string;
      visits: number;
      clicks?: number;
    }[];
  };
  activities?: {
    text: string;
    time: string;
  }[];
};

const SingleItemPage = (props: Props) => {
  return (
    <div id='sidebar' className="lg:h-full w-full overflow-y-scroll md:overflow-hidden flex flex-col lg:flex-row">
      {/* ------------------------------- left ------------------------------- */}
      <div className="w-full lg:w-1/2 py-2 px-6 sm:px-12">
        <div className="w-full lg:h-1/2 border-b border-gray-300">
          <div className="flex items-center space-x-2">
            <img
              src={props.img || "/noavatar.png"}
              className="h-20 w-16 rounded-lg object-cover"
            />
            <h3 className="text-xl font-bold text-white">{props.title}</h3>
            <button className="capitalize cursor-pointer px-3 py-0.5 text-sm bg-gray-100 rounded-md">
              Update
            </button>
          </div>
          {/* --------------------- info grid --------------------- */}
          <div className="grid sm:grid-cols-2 pb-4 lg:pb-0">
            {Object.entries(props.info).map((item) => (
              <div className="flex items-center space-x-2 mt-2.5">
                <p className="text-lg font-semibold text-white">{item[0]}</p>
                <p className="text-gray-100">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
        {/* --------------------- chart --------------------- */}
        <div className="h-full w-full -ml-12 pt-4 hidden sm:block">
          <LineChart
            width={500}
            height={300}
            data={props.chart.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {props.chart.dataKeys.map((key) => (
              <Line
                type="monotone"
                dataKey={key.name}
                stroke={key.color}
                activeDot={{ r: 8 }}
              />
            ))}
          </LineChart>
        </div>
      </div>
      {/* ------------------------------- Right ------------------------------- */}
      <div className="lg:w-1/2 p-6">
        <h3 className="text-xl font-bold text-white">Latest Activities</h3>
        <ul className="mt-4">
          {props.activities?.map((item) => (
            <li className="pr-8 pt-4 border-l border-[#f45b69] relative">
              <div className="absolute p-2 bg-[#f45b69] rounded-full -bottom-1 -left-2" />
              <div className="px-4 py-2 rounded-r-lg bg-[#f45b6810]">
                <p className="text-sm text-white">{item.text}</p>
                <p className="text-sm font-semibold mt-1.5 text-white">
                  {item.time}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleItemPage;
