import React from 'react';
import pic from '../assets/profile-pic.jpg';

const Navbar = () => {
  return (
    <div className="flex flex-row text-center p-4 border-b-2 border-slate-600">
      <div className="basis-1/2 text-left" href="#section0">
        <img className="w-8 h-8 inline-block rounded-full mr-3 grayscale" src={pic} alt="marcodalmo.dev" />
        <span>marcodalmo.dev</span>
      </div>
      <a className="flex flex-row text-center basis-1/2 ">
        <a className="basis-1/4" href="#section0">about</a>
        <a className="basis-1/4" href="#section1">experience</a>
        <a className="basis-1/4" href="#section2">projects</a>
        <a className="basis-1/4" href="#section3">contact</a>
      </a>
    </div>
  );
};

export default Navbar;
