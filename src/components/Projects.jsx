import { getProjects } from '../data';
import React from 'react';

const Projects = () => {
  const projects = JSON.parse(getProjects());
  console.log(projects);

  return (
    <div className="flex flex-row text-center p-4 m-6">
      <div className="basis-1/3 p-2 m-3 border-2 border-black rounded-2xl">
        <div className="text-xl text-center">{projects.project1.name}</div>
        <div className="text-md text-center">{projects.project1.description}</div>
      </div>
      <div className="basis-1/3 p-2 m-3 border-2 border-black rounded-2xl">
        <div className="text-xl text-center">{projects.project2.name}</div>
        <div className="text-md text-center">{projects.project2.description}</div>
      </div>
      <div className="basis-1/3 p-2 m-3 border-2 border-black rounded-2xl">
        <div className="text-xl text-center">{projects.project3.name}</div>
        <div className="text-md text-center">{projects.project3.description}</div>
      </div>
    </div>
  );
};
  
export default Projects;