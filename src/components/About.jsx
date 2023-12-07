import React from 'react';
import profile_pic from '../assets/profile-pic.jpg';

const About = () => {
  return (
    <>
        <div className="flex flex-row m-12">
            <div>
                <img className="w-64 rounded-full mr-3 grayscale opacity-90" src={profile_pic} alt="marcodalmo.dev" />
            </div>
            <div className="align-middle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
    </>
  );
};

export default About;