
import React from 'react';
import {getTitle} from '../data.js';

const Hello = () => {
  return (
    <div className="bg-hero-img brightness-50 bg-contain">
      <div className="text-5xl text-center m-40">{JSON.parse(getTitle()).title}</div>
      <div className="text-center">{JSON.parse(getTitle()).subtitle}</div>
    </div>
  );
};

export default Hello;
