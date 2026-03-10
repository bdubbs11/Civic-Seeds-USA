import React from 'react';
import { Link } from 'react-router-dom';
import TextRotator from '../components/TextRotator';
import LinkCard from '../components/LinkCard';

function Home() {
return (
    <div className="flex flex-col flex-1 min-h-screen justify-center items-center">
      <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto ">
        <div className="col-start-2 col-span-14">  
        {/* <h1 className="text-4xl font-bold my-10 text-black -mb-10 capitalize">A Parents guide to growing powerful citizens</h1> */}
        <div className="flex md:flex-row flex-col justify-center items-center min-h-screen gap-6 md:gap-10">
          {/* notes for now. too much space vertically on main home page. doesnt look right at all on bigger screens.  */}

          <div className="flex flex-col w-full max-w-2xl px-6 md:px-0 text-center md:text-left md:mr-12 py-8 order-2 md:order-1">
            <h1 className="text-lg md:text-xl mb-2 italic text-gray-700">Raising Powerful Citizens Starts at Home</h1>
            <h2 className="text-xl md:text-2xl font-bold mb-4 leading-snug">
              Inspiring the next generation to{" "}
              <TextRotator
                words={[
                  "dream big",
                  "work hard",
                  "lead with courage",
                  "serve their community",
                  "believe in America's story",
                ]}
                interval={2500}
                className="text-violet-700 font-bold"
              />
            </h2>
            <div className="space-y-3 text-sm md:text-base leading-relaxed text-gray-700">
              <p>Every day as parents shape their children, they are shaping the future of our communities, our country, and our democracy.</p>
              <p>Civic Seeds USA creates educational resources, programs, and family engagement tools that help parents grow powerful citizens by translating civic values into everyday parenting practices.</p> 
              <p>Civic Seeds’ curricula, workshops, and resources cultivate children with strong character and family values, who have the tools and desire to help their communities and our country flourish.</p>
              <p>Together we can help families grow the next generation of thoughtful, powerful citizens who have the caring, the courage, and the knowledge to make a difference.</p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
              <button className="bg-violet-700 text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-violet-800 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">Explore the Frameworks</button>
              <button className="bg-violet-700 text-white px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap hover:bg-violet-800 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">Book a Workshop</button>
            </div>
          </div> 

          <div className="md:min-w-[320px] md:max-w-md h-64 md:h-auto w-4/5 max-w-sm items-center justify-center mt-4 md:mt-0 md:ml-8 order-1 md:order-2 flex-shrink-0">
            <img src="/images/home.webp" alt="PA4REAL Logo" className="w-full h-full object-cover rounded-lg"/>
          </div>
          
        </div>
        </div>
      </div>  

      {/* who we are section */}
      <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto bg-violet-400">
        <div className="col-start-2 col-span-14">
          <div className="flex md:flex-row flex-col justify-center items-center text-white py-10">
            <div className="md:w-full md:h-full h-3/4 w-3/4 flex items-start justify-start ml-20 order-1">
              <img src="/images/tree.jpeg" alt="PA4REAL Logo" className="h-3/4 w-3/4 object-cover rounded-lg"/>
            </div>
  
            <div className="flex flex-col w-full h-full px-10 md:px-0 text-center md:text-left mt-10 md:mt-0 md:mr-20 order-2">
              <h1 className="text-2xl md:text-4xl font-bold mb-4"> Who We Are</h1>
              <p className="text-base md:text-lg">We’re a community of parents committed to raising children who lead with character, kindness, and courage. By sharing what we’ve learned — from family to faith to civic life — we hope to inspire others to strengthen their homes, their neighborhoods, and our nation.</p>
              <button className="bg-white text-violet-400 px-2 py-4 rounded-full w-1/2 mt-10 mx-auto md:mx-0 hover:bg-slate-100 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">Learn More</button>
            </div> 
          </div>
        </div>
      </div>

      {/* Work with section */}
      <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto">
        <div className="col-start-2 col-span-14">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black capitalize my-10">Working with Deitra</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 py-5 md:py-10 px-10 md:px-0">
            <LinkCard
              to="/schedule-services"
              title="Coaching"
              description="I help parents create a strong foundation for their children to grow into powerful citizens. I offer one-on-one coaching sessions to help parents develop the skills they need to raise their children to be strong, responsible citizens."
            />
            <LinkCard
              to="/schedule-services"
              title="Workshops"
              description="I lead interactive workshops that give parents concrete tools for nurturing character, leadership, and civic awareness at home. These group sessions offer hands-on learning, real-life examples, and a supportive community of parents working toward the same goal."
            />
            <LinkCard
              to="/schedule-services"
              title="Speaking Engagements"
              description="I speak to schools, faith communities, nonprofits, and parent groups about the power families hold in shaping strong children and strong communities. My talks blend storytelling, research, and practical guidance—offering audiences inspiration and clear next steps they can use right away."
            />
          </div>
        </div>
      </div>
      {/* Quote Section */}
      <div className="w-full bg-violet-400 text-white py-12 px-8 mt-12">
        <div className="max-w-5xl mx-auto flex items-center justify-center text-center">
          <h2 className="text-2xl md:text-4xl font-bold italic leading-relaxed">
            “History has shown us that courage can be contagious, and hope can take on a life of its own.”
            <span className="block mt-4 text-base md:text-lg font-semibold not-italic">— Michelle Obama</span>
          </h2>
        </div>
      </div>

      {/* civic seeds section section */}

      <div className="container grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto py-12" id="civic-seeds">
        <div className="col-start-2 col-span-14">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-black capitalize "> Civic Seeds</h1>


          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 py-8 px-10 md:px-0">
            <div className="bg-violet-400 rounded-xl text-white p-6 flex flex-col gap-4 box-shadow-lg">
              <img
                src="/images/vote.jpg"
                alt="Why Civics Matter"
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="space-y-4 flex-1">
                <h2 className="text-xl md:text-2xl font-bold">Why Civics Matter</h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Explore the roots of democracy, why community matters, and how division and unity shape our nation.
                </p>
              </div>
              <button className="bg-white text-black px-8 py-2 text-sm md:text-base rounded-full mx-auto hover:bg-slate-100 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                Learn More
              </button>
            </div>

            <div className="bg-violet-700 rounded-xl text-white p-6 flex flex-col gap-4">
              <img
                src="/images/hay.jpg"
                alt="Power Parenting"
                className="w-full h-60 object-cover object-top rounded-lg"
              />
              <div className="space-y-4 flex-1">
                <h2 className="text-2xl font-bold">Power Parenting</h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Explore the roots of democracy, why community matters, and how division and unity shape our nation.
                </p>
              </div>
              <button className="bg-white text-black px-8 py-2 text-sm md:text-base rounded-full mx-auto hover:bg-slate-100 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                Learn More
              </button>
            </div>

            <div className="bg-violet-700 rounded-xl text-white p-6 flex flex-col gap-4">
              <img
                src="/images/kidblm.jpg"
                alt="Democracy for Kids"
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="space-y-4 flex-1">
                <h2 className="text-xl md:text-2xl font-bold">Democracy for Kids</h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Explore the roots of democracy, why community matters, and how division and unity shape our nation.
                </p>
              </div>
              <button className="bg-white text-black px-8 py-2 text-sm md:text-base rounded-full mx-auto hover:bg-slate-100 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                Learn More
              </button>
            </div>

            <div className="bg-violet-700 rounded-xl text-white p-6 flex flex-col gap-4">
              <img
                src="/images/together.jpg"
                alt="Act Together"
                className="w-full h-60 object-cover rounded-lg"
              />
              <div className="space-y-4 flex-1">
                <h2 className="text-xl md:text-2xl font-bold">Act Together</h2>
                <p className="text-sm md:text-base leading-relaxed">
                  Explore the roots of democracy, why community matters, and how division and unity shape our nation.
                </p>
              </div>
              <button className="bg-white text-black px-8 py-2 text-sm md:text-base rounded-full mx-auto hover:bg-slate-100 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]">
                Learn More
              </button>
            </div>
            {/* repeat for other three cards */}
          </div>


        </div>
      </div>

      {/* Power Parenting Strategies of the Month */}
      <section className="w-full bg-violet-700 py-16 px-6">
        <div className="max-w-5xl mx-auto text-white">
          <h2 className="text-2xl md:text-4xl font-bold capitalize text-center mb-6">
            Power Parenting Strategies of the Month
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-violet-100 text-center max-w-3xl mx-auto">
            November’s Civic Seed encourages families and communities to reflect on what it means to belong—not
            just to a nation, but to a global community. It’s a time to cultivate gratitude for the freedoms,
            responsibilities, and shared values that connect us across cultures.
          </p>

          <div className="grid gap-5 md:gap-8 mt-12 grid-cols-1 md:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-6 text-violet-700 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Learning Goals</h3>
              <ul className="text-left list-disc list-inside space-y-2 text-violet-600">
                <li>Understand what it means to be a global citizen.</li>
                <li>Recognize shared human values and responsibilities.</li>
                <li>Practice gratitude as a civic habit that builds empathy and understanding.</li>
                <li>Explore how giving thanks can lead to giving back.</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-violet-700 flex flex-col">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Discussion Prompts</h3>
              <ul className="text-left list-disc list-inside space-y-2 text-violet-600">
                <li>What are you thankful for in your community or country?</li>
                <li>How can small acts of kindness make a difference globally?</li>
                <li>What responsibilities do we have to others beyond our borders?</li>
                <li>How can gratitude make us better citizens?</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-violet-700 flex flex-col md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Family & Classroom Activities</h3>
              <ul className="text-left list-disc list-inside space-y-3 text-violet-600">
                <li>
                  <span className="font-semibold">Gratitude Wall:</span> Write one thing you’re thankful for in your
                  community and one from another culture.
                </li>
                <li>
                  <span className="font-semibold">Global Dinner Night:</span> Try food from another country and learn
                  about their civic traditions.
                </li>
                <li>
                  <span className="font-semibold">Thank You Notes:</span> Send appreciation to community helpers like
                  teachers or volunteers.
                </li>
              </ul>
            </div>
          </div>

          <blockquote className="italic text-lg md:text-xl text-center text-violet-100 mt-12">
            “The best way to find yourself is to lose yourself in the service of others.”
            <br /> <span className="font-semibold not-italic text-base md:text-lg">— Mahatma Gandhi</span>
          </blockquote>
        </div>
      </section>

    </div>
)
}
export default Home;