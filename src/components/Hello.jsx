
import React from 'react';
import {getTitle, getContacts} from '../data.js';

const Hello = () => {
  return (
    <>
      <div className="m-40">
        <div className="text-5xl text-center">{JSON.parse(getTitle()).title}</div>
        <div className="text-center">{JSON.parse(getTitle()).subtitle}</div>
      </div>
      <div className='text-center text-xl'>
        Contact:
      </div>
      <div className="flex flex-row mb-4 m-2">
        <a className="basis-1/3 text-center underline"></a>
        <a className="flex flex-row text-center basis-1/3 ">
          <a href="mailto:{JSON.parse(getContacts()).mail}" className="basis-1/3 text-lg text-center underline">email</a>
          <a href={JSON.parse(getContacts()).linkedin} className="basis-1/3 text-lg text-center underline">linkedin</a>
          <a href={JSON.parse(getContacts()).github} className="basis-1/3 text-lg text-center underline">github</a>
        </a>
        <a className="basis-1/3 text-center underline"></a>
      </div>
    </>
  );
};

export default Hello;
