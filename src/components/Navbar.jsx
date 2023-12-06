import React from 'react';

const Navbar = () => {
  return (
    <div className="flex flex-row text-center m-4">
      <a className="basis-1/2 text-left" href="#section0">marcodalmo.dev</a>
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
