import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex bg-blue-600 text-white justify-between pt-10 pb-5 pr-10 pl-10 border-b border-yellow-600">
        <div>
          <h1>States Barbershop</h1>
        </div>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/"> Home </Link>
            <Link to="/aboutus"> About Us</Link>
            <Link to="/pages"> Pages</Link>
            <Link to="/services"> Services</Link>
            {/* <Link to='/shop'> blogs</Link> */}
          </li>
        </ul>
        <div>
          <button className="text-black bg-orange-500 rounded-lg p-2">Book Appointment</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
