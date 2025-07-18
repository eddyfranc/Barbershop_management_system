import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


//  const navigate= useNavigate();
const handleClick =()=>{
  //  navigate('/appointment');

}

function Navbar() {
    
  return (
    <>
      <div className="flex bg-white text-black justify-between pt-10 pb-5 pr-10 pl-10 border-b border-yellow-600">
        <div>
          <h1><span className="text-orange-700 font-semibold">States</span>Barber</h1>
        </div>
        <ul className="flex items-end gap-8 justify-end">
          <li className="flex gap-8 items-end">
            <Link to="/"> Home </Link>
            <Link to="/aboutus"> About Us</Link>
            <Link to="/pages"> Pages</Link>
            <Link to="/services"> Services</Link>
            <Link to="/blog"> Blog</Link>
          </li>
        </ul>
        <div>
          <button className="text-black bg-orange-700 rounded-lg p-2" onClick={handleClick}> Book Appointment</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
