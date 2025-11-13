import React from 'react';

function PowerParentingStrategy() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="container grid grid-cols-16 min-w-screen mx-auto">
        <div className="col-start-2 col-span-14">  
          <div className="flex flex-row justify-center items-center">
            <div className="w-1/2 p-6">
              <img src="/public/images/hay.jpg" alt="Power Parenting" className="rounded-lg" />
            </div>
            <div className="w-1/2 p-6">
              <h1 className="text-2xl font-bold mb-4 text-black capitalize text-left mb-10">Power Parenting Strategies</h1>
              <p className="text-sm md:text-base leading-relaxed text-left">
                Power Parenting is about raising children who are confident, kind, and capable of thinking for themselves.
                It focuses on building strong family connections, nurturing emotional intelligence, and helping kids 
                develop the tools they need to lead with character and courage. Through everyday choices and 
                intentional parenting, families can shape the next generation of powerful citizens.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container grid grid-cols-16 min-w-screen mx-auto bg-blue-500">
        <div className="col-start-2 col-span-14">
          <h1 className="text-2xl font-bold mb-4 text-black capitalize text-center mb-10">Core Strategies</h1>


        </div>  
      </div>
    </div>
  )
}

export default PowerParentingStrategy;