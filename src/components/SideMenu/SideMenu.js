import React from "react";

const SideMenu = ({isOpen}) => {
  return (
    <>
      <div className={`fixed h-full top-16 left-0 bg-black p-4 rounded-md cursor-pointer translate duration-150 ${isOpen ? "translate-x-0": "-translate-x-32"} w-20`}>
        <ul className=" flex flex-col space-y-2 text-white ">
          <li className="p-2 border-b ">Models</li>
          <li className="p-2 border-b ">Images</li>
          <li className="p-2 border-b ">Articles</li>
          <li className="p-2 border-b ">Tutorials</li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
