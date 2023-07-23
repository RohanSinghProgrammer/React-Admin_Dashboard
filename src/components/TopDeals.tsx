import { Users } from "../helpers/Users";

const TopDeals = () => {
  return (
    <div className="h-full overflow-y-scroll hide-scrollbar">
        <div className="sticky top-0 bg-main-bg pb-2 mx-1.5 w-full">
      <h4 className="text-white font-bold text-xl">Top Deals</h4>
      </div>
      <div className="flex flex-col space-y-1 ml-1.5">
        {Users.map((item, index) => (
          <div key={index} className="flex items-center justify-between hover:bg-soft-bg p-2 rounded-lg cursor-pointer">
            <img className="h-6 w-6 object-cover rounded-full md:hidden lg:block" src={item.img} />
            <div className="w-full pl-2">
              <p className="text-xs font-bold text-soft-color">{item.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">{item.email}</p>
            </div>
            <div className="text-sm flex items-center space-x-1 text-white font-bold">
              <span>$</span> <span>{item.payment.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDeals;
