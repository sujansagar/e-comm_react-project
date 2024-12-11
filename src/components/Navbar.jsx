

import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slice/SearchSlice";


const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center py-6 px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg text-white">
      <div className="flex items-center gap-6">
        <h1 className="text-3xl font-extrabold tracking-wide">SHOPIFY</h1>
      </div>

      

      <div className="relative w-full lg:w-[30vw] mt-4 lg:mt-0">
        {/* Icon */}
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
        {/* Input Field */}
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search for products..."
          autoComplete="off"
          onChange={(e)=>dispatch(setSearch(e.target.value))}
          className="pl-10 p-3 border border-gray-300 text-gray-800 text-base rounded-lg w-full outline-none focus:ring-2 focus:ring-pink-300 shadow-md"
        />
      </div>
    </nav>
  );
};

export default Navbar;



