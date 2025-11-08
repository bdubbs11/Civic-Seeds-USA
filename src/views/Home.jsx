import React from 'react';


function Home() {
return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <div className="container grid grid-cols-16 min-w-screen mx-auto">
        <div className="col-start-2 col-span-14">  
        {/* <h1 className="text-4xl font-bold my-10 text-black -mb-10 capitalize">A Parents guide to growing powerful citizens</h1> */}
        <div className="flex flex-row justify-center items-center min-h-screen ">

          <div className="flex flex-col w-full h-full text-left mr-20 py-12">
            <h1 className="text-2xl mb-4 italic ">A Parents guide to growing powerful citizens</h1>
            <h1 className="text-4xl font-bold mb-8 leading-[1.2]"> Inspiring the next generation to <span className='text-blue-500 font-bold inline-block transition-transform duration-300 hover:scale-[1.1] cursor-pointer'>dream big,</span> <span className='text-red-500 font-bold inline-block transition-transform duration-300 hover:scale-[1.1] cursor-pointer'>work hard,</span> and <span className='text-violet-500 font-bold inline-block transition-transform duration-300 hover:scale-[1.1] cursor-pointer'>believe in America's story.</span></h1>
            <p className="text-lg mb-6 leading-relaxed">In this book, we share what we've learned as parents striving to raise children who will be strong, responsible citizens—children who help America live up to its ideals. We explore how the power of family, community, democracy, and faith can protect our children, our country, and our future. We've got the POWER!</p>
            <button className="bg-violet-700 text-white px-2 py-4 rounded-full w-1/2 mt-12 hover:bg-violet-800 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">Learn More</button>
          </div> 

          <div className="w-full h-full items-center justify-center ml-20">
            <img src="/public/images/home.webp" alt="PA4REAL Logo" className="w-auto h-full w-full object-cover rounded-lg"/>
          </div>
          
        </div>
        </div>
      </div>  

      {/* who we are section */}
      <div className="container grid grid-cols-16 min-w-screen mx-auto bg-violet-700">
        <div className="col-start-2 col-span-14">
          <div className="flex flex-row justify-center items-center text-white py-10">
            <div className="w-full h-full flex items-start justify-start ml-20">
              <img src="/public/images/tree.jpeg" alt="PA4REAL Logo" className="h-3/4 w-3/4 object-cover rounded-lg"/>
            </div>
  
            <div className="flex flex-col w-full h-full text-left mr-20">
              <h1 className="text-4xl font-bold mb-4"> Who We Are</h1>
              <p className="text-lg">We’re a community of parents committed to raising children who lead with character, kindness, and courage. By sharing what we’ve learned — from family to faith to civic life — we hope to inspire others to strengthen their homes, their neighborhoods, and our nation.</p>
              <button className="bg-white text-violet-700 px-2 py-4 rounded-full w-1/2 mt-10 hover:bg-slate-100 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">Learn More</button>
            </div> 
          </div>
        </div>
      </div>

      {/* Work with section */}
      <div className="container grid grid-cols-16 min-w-screen mx-auto">
        <div className="col-start-2 col-span-14">
        <h1 className="text-4xl font-bold mb-4 text-black capitalize my-10"> Working with Deitra Scott</h1>
          <div className="flex flex-row justify-center items-center py-10 gap-5">

            <div className="flex flex-col w-full h-full text-center hover:bg-slate-100 p-4 rounded-lg ease-in-out duration-300">
              <h1 className="text-2xl font-bold mb-4">Coaching</h1>
              <p className="text-lg">I help parents create a strong foundation for their children to grow into powerful citizens. I offer one-on-one coaching sessions to help parents develop the skills they need to raise their children to be strong, responsible citizens. </p>
            </div>

            <div className="flex flex-col w-full h-full text-center hover:bg-slate-100 p-4 rounded-lg ease-in-out duration-300">
              <h1 className="text-2xl font-bold mb-4">Workshops</h1>
              <p className="text-lg">I help parents create a strong foundation for their children to grow into powerful citizens. I offer one-on-one coaching sessions to help parents develop the skills they need to raise their children to be strong, responsible citizens. </p>
            </div>

            <div className="flex flex-col w-full h-full text-center hover:bg-slate-100 p-4 rounded-lg ease-in-out duration-300">
              <h1 className="text-2xl font-bold mb-4">Speaking Engagements</h1>
              <p className="text-lg">I help parents create a strong foundation for their children to grow into powerful citizens. I offer one-on-one coaching sessions to help parents develop the skills they need to raise their children to be strong, responsible citizens. </p>
            </div>

          </div>
        </div>
      </div>
      {/* Quote Section */}
      <div className="w-full bg-violet-700 text-white py-16 px-8 m-10">
        <div className="max-w-5xl mx-auto flex items-center justify-center text-center">
          <h2 className="text-4xl font-bold italic leading-relaxed">
            “History has shown us that courage can be contagious, and hope can take on a life of its own.”
            <span className="block mt-4 text-lg font-semibold not-italic">— Michelle Obama</span>
          </h2>
        </div>
      </div>

      {/* civic seeds section section */}

      <div className="container grid grid-cols-16 min-w-screen mx-auto min-h-screen">
        <div className="col-start-2 col-span-14">
          <h1 className="text-4xl font-bold mb-4 text-black capitalize my-10"> Civic Seeds</h1>


          <div className="grid md:grid-cols-2 gap-10 py-10">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Why Civics Matter</h2>
              <p className="text-gray-600 mb-4">Explore the roots of democracy, why community matters, and how division and unity shape our nation.</p>
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800">Learn More</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Power Parenting</h2>
              <p className="text-gray-600 mb-4">Explore the roots of democracy, why community matters, and how division and unity shape our nation.</p>
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800">Learn More</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Democracy for Kids</h2>
              <p className="text-gray-600 mb-4">Explore the roots of democracy, why community matters, and how division and unity shape our nation.</p>
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800">Learn More</button>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <h2 className="text-2xl font-bold text-violet-700 mb-4">Act Together</h2>
              <p className="text-gray-600 mb-4">Explore the roots of democracy, why community matters, and how division and unity shape our nation.</p>
              <button className="bg-violet-700 text-white px-4 py-2 rounded-full hover:bg-violet-800">Learn More</button>
            </div>
            {/* repeat for other three cards */}
          </div>


        </div>
      </div>

      {/* power parenting sections of the month */}
      <div className="container grid grid-cols-16 min-w-screen mx-auto bg-violet-700 text-white py-10">
        <div className="col-start-2 col-span-14">
          <h1 className="text-4xl font-bold mb-4 capitalize my-10"> Power Parenting Sections of the Month</h1>
        </div>
      </div>
    </div>
)
}
export default Home;