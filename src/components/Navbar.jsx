import React from 'react';
import pic from '../assets/profile-pic.jpg';

const Navbar = () => {
  return (
    <div className="flex flex-row text-center p-4 border-b-2 border-slate-600">
      <div className="basis-1/2 text-left" href="#section0">
        <img className="w-8 h-8 inline-block rounded-full mr-3 grayscale opacity-90" src={pic} alt="marcodalmo.dev" />
        <span className='opacity-90'>marcodalmo.dev</span>
      </div>
      <a className="flex flex-row text-center basis-1/2 ">
        <a className="basis-1/4" href="#about">about</a>
        <a className="basis-1/4" href="#experience">experience</a>
        <a className="basis-1/4" href="#projects">projects</a>
        <a className="basis-1/4" href="#contact">contact</a>
      </a>
    </div>
  );
};

export default Navbar;
