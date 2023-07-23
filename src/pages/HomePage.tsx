import AreaChartBox from "../components/AreaChartBox";
import BarChartBox from "../components/BarChartBox";
import ChartBox from "../components/ChartBox";
import PieChartBox from "../components/PieChartBox";
import TopDeals from "../components/TopDeals";
import { barChartRevenue, barChartVisited } from "../helpers/BarChartData";
import { ChartBoxConversation, ChartBoxProduct, ChartBoxRevenue, ChartBoxUser } from "../helpers/ChartBoxData";

const HomePage = () => {
  return (
    <div id="sidebar" className="overflow-y-scroll lg:overflow-hidden p-4 w-full gap-4 grid grid-flow-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-4">
      <div className="border border-soft-bg w-full row-span-3 rounded-md p-3">
        <TopDeals />
      </div>
      <div className="border border-soft-bg w-full rounded-md p-2">
        <ChartBox {...ChartBoxUser} />
      </div>
      <div className="border border-soft-bg w-full rounded-md p-2">
        <ChartBox {...ChartBoxProduct} />
      </div>
      <div className="border border-soft-bg w-full row-span-3 rounded-md p-2">
        <PieChartBox />
      </div>
      <div className="border border-soft-bg w-full rounded-md p-2">
        <ChartBox {...ChartBoxRevenue} />
      </div>
      <div className="border border-soft-bg w-full rounded-md p-2">
        <ChartBox {...ChartBoxConversation} />
      </div>
      <div className="hidden sm:block border border-soft-bg w-full row-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2 rounded-md p-2">
        <AreaChartBox />
      </div>
      <div className="border border-soft-bg w-full rounded-md p-2"><BarChartBox {...barChartVisited} /></div>
      <div className="border border-soft-bg w-full rounded-md p-2"><BarChartBox {...barChartRevenue} /></div>
    </div>
  );
};

export default HomePage;
