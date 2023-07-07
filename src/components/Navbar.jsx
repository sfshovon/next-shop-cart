"use client"
import Link from "next/link";
import { FaUserCircle } from 'react-icons/fa';
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const menuItems = (
    <>
      <li><Link href="/">Sign In</Link></li>
    </>
  );

  return (
    <div className="navbar flex justify-between top-0 z-50 px-4 md:px-10">
      <div className="flex justify-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FiMenu className="h-5 w-5" />
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box font-bold">
            <div className="flex justify-center items-center">
              <FaUserCircle size={20}/>
              {menuItems}
            </div>
          </ul>
       
        </div>
        <div className="flex items-center">
          <Link href="/" className="btn btn-ghost normal-case">
            <h3 className="text-xl"> <span className="font-extrabold">shop</span>cart</h3>
          </Link>
        </div>
      </div>
     
      <div className="flex-none justify-end items-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <div className="flex justify-center items-center">
            <FaUserCircle size={20}/>
            {menuItems}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
