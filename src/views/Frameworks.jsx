import React from 'react';

function Frameworks() {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto py-16">
      <div className="col-start-2 col-span-14">
        <div className="space-y-4 text-left">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-darkpurple">
            The Frameworks
          </h1>
          <p className="text-base md:text-lg leading-relaxed">
            The UNIT Framework
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Power Parenting
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Parents in Action
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frameworks;

