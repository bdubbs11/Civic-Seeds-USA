import React from 'react';

function PowerParentingStrategy() {
  return (

    
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="w-full bg-blue-500 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Power Parenting Strategies</h1>
          <p className="text-base md:text-xl text-white max-w-3xl mx-auto">
          Curated educational tools, justice resources, and family-friendly learning guides.
          </p>
        </div>
      </section>
      
      {/* Curve Divider */}
      <div className="w-full -mt-1">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' className="w-full h-auto" preserveAspectRatio="none" style={{ transform: 'scaleX(-1)' }}>
          <path d='M1000 100C500 100 500 4 0 4V0h1000v100Z' fill='#2B7FFF'></path>
        </svg>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto min-h-screen">

        
        <div className="col-start-2 col-span-14">  
          <div className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-5 md:gap-8">
            <div className="md:w-full md:h-full h-3/4 w-3/4 flex items-start justify-start mt-10 order-1 md:mr-10">
              <img src="/images/hay.jpg" alt="Power Parenting" className="rounded-lg w-full h-auto" />
            </div>
            <div className="w-full md:w-full flex flex-col justify-center order-2 px-10 md:px-0 md:ml-10 mb-10">
              <h1 className="text-xl md:text-2xl font-bold mb-4 text-black capitalize text-center md:text-left mb-10">Power Parenting Strategies</h1>
              <p className="text-base md:text-lg leading-relaxed text-center md:text-left">
                Power Parenting is about raising children who are confident, kind, and capable of thinking for themselves.
                It focuses on building strong family connections, nurturing emotional intelligence, and helping kids 
                develop the tools they need to lead with character and courage. Through everyday choices and 
                intentional parenting, families can shape the next generation of powerful citizens.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full -mt-1">
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 100' className="w-full h-auto" preserveAspectRatio="none" style={{ transform: 'scaleY(-1)' }}>
          <path d='M1000 100C500 100 500 4 0 4V0h1000v100Z' fill='#2B7FFF'></path>
        </svg>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto bg-blue-500 min-h-screen">
        <div className="md:col-start-2 col-span-14 flex flex-col justify-center py-16 mx-10 md:mx-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white capitalize text-center mb-10">Our Core Strategies</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
            <div className="bg-white rounded-xl text-blue-500 p-6 flex flex-col gap-4">
                <div className="space-y-4 flex-1">
                  <h2 className="text-lg md:text-2xl font-bold">Character and Core Values</h2>
                  <p className="text-sm md:text-base leading-relaxed">
                   <ul>
                    <li>Family Values</li>
                    <li>Rules vs. Principles</li>
                    <li>Faith and Hope</li>
                    <li>Cheer for Them / Acceptance</li>
                   </ul>
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-full mx-auto text-sm md:text-basehover:bg-blue-700 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                  Learn More
                </button>
              </div>

              <div className="bg-white rounded-xl text-blue-500 p-6 flex flex-col gap-4">
                <div className="space-y-4 flex-1">
                  <h2 className="text-lg md:text-2xl font-bold">Thinking Skills & Curiosity</h2>
                  <p className="text-sm md:text-base leading-relaxed">
                  <ul>
                    <li>Encourage Curiosity</li>
                    <li>Cause and Effect</li>
                    <li>Critical Thinking</li>
                    <li>Media Literacy</li>
                  </ul>
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-full mx-auto text-sm md:text-base hover:bg-blue-700 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                  Learn More
                </button>
              </div>

              <div className="bg-white rounded-xl text-blue-500 p-6 flex flex-col gap-4">
                <div className="space-y-4 flex-1">
                  <h2 className="text-lg md:text-2xl font-bold">Connection & Communication</h2>
                  <p className="text-sm md:text-base leading-relaxed">
                  <ul>
                    <li>Family Meetings</li>
                    <li>Disagreeing Appropriately: Make Your Case</li>
                    <li>Relationship Repair</li>
                    <li>Self-Love, Self-Regulation, Self-Care</li>
                  </ul>
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-full mx-auto text-sm md:text-base hover:bg-blue-700 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                  Learn More
                </button>
              </div>

              <div className="bg-white rounded-xl text-blue-500 p-6 flex flex-col gap-4">
                <div className="space-y-4 flex-1">
                  <h2 className="text-lg md:text-2xl font-bold">Capability & Responsibility</h2>
                  <p className="text-sm md:text-base leading-relaxed">
                  <ul>
                    <li>Roles and Responsibilities</li>
                    <li>Rewards and Consequences</li>
                    <li>Teaching Leadership</li>
                    <li>Encourage Expertise</li>
                  </ul>
                  </p>
                </div>
                <button className="bg-blue-500 text-white px-8 py-2 rounded-full mx-auto text-sm md:text-base hover:bg-blue-700 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>  
      </div>
  );
}

export default PowerParentingStrategy;