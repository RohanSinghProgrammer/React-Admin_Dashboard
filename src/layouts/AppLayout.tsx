import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-main-bg flex-column flex flex-col">
      <Navbar />
      <div className="flex">
        <div className="min-w-fit">
        <Sidebar /> 
        </div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
