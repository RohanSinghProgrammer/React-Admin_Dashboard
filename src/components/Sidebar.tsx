import { Link } from "react-router-dom";
import { SidebarData } from "../constants/SidebarData";

const Sidebar = () => {
  return (
    <div id="sidebar" className="w-24 xl:w-56 p-4 overflow-y-scroll scroll-smooth border-r border-soft-bg">
      {SidebarData.map((item, index) => (
        <div key={index}>
          <p className="mb-2.5 mx-2 text-sm text-gray-400 hidden xl:block">{item.heading}</p>
          <div className="px-2 pb-2">
            {item.children.map((item, index) => (
              <Link to={item.path}
                className="cursor-pointer flex items-center justify-center lg:justify-start space-x-2 hover:bg-soft-bg p-2.5 rounded-md"
                key={index}
              >
                <img src={item.icon} />
                <p className="text-soft-color hidden xl:block">{item.title}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
