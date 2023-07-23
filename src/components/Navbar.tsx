const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between h-14">
      {/* ----------------------------------- left section ----------------------------------- */}
      <div className="flex items-center space-x-4">
        <img src="logo.svg" alt="logo" />
        <h4 className="text-main-color font-bold">Admin</h4>
      </div>
      {/* ----------------------------------- right section ----------------------------------- */}
      <div className="flex items-center space-x-4">
        {/* action buttons */}
        <img className="hidden md:block cursor-pointer" src="search.svg"/>
        <img className="hidden md:block cursor-pointer" src="app.svg"/>
        <img className="hidden md:block cursor-pointer" src="expand.svg"/>
        <div className="relative cursor-pointer">
          <img src="notifications.svg"/>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[0.5rem] w-3.5 h-3.5 rounded-full grid place-items-center">1</span>
        </div>
        {/* user details */}
        <img className="h-6 w-6 object-cover rounded-full cursor-pointer" src="https://th.bing.com/th/id/OIP.sZLwr_1Ohk_I_OhNkrF2EAHaD4?w=343&h=180&c=7&r=0&o=5&pid=1.7" alt="" />
        <h4 className="text-soft-color font-bold">Rock</h4>
        <img src="settings.svg" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
