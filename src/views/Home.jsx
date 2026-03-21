import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import TextRotator from '../components/TextRotator';
import LinkCard from '../components/LinkCard';

function Home() {
  const whyMattersScrollRef = useRef(null);
  const [whyMattersBottomFade, setWhyMattersBottomFade] = useState(false);

  const updateWhyMattersScrollFade = useCallback(() => {
    const el = whyMattersScrollRef.current;
    if (!el) return;
    const epsilon = 4;
    const canScroll = el.scrollHeight > el.clientHeight + epsilon;
    const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - epsilon;
    setWhyMattersBottomFade(canScroll && !atBottom);
  }, []);

  useLayoutEffect(() => {
    const el = whyMattersScrollRef.current;
    if (!el) return;
    updateWhyMattersScrollFade();
    el.addEventListener('scroll', updateWhyMattersScrollFade, { passive: true });
    window.addEventListener('resize', updateWhyMattersScrollFade);
    const ro = new ResizeObserver(updateWhyMattersScrollFade);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateWhyMattersScrollFade);
      window.removeEventListener('resize', updateWhyMattersScrollFade);
      ro.disconnect();
    };
  }, [updateWhyMattersScrollFade]);

// for busy parents

// imgs in unit framework page and parent in action page
// mailling list signup

// try and see if i can set up database to track interested in preorder
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {/* Hero section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-16">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            {/* <h1 className="text-4xl font-bold my-10 text-black -mb-10 capitalize">A Parents guide to growing powerful citizens</h1> */}
            <div className="flex md:flex-row flex-col justify-center items-center min-h-screen gap-6 md:gap-10">
              <div className="flex flex-col w-full max-w-2xl lg:max-w-4xl px-4 sm:px-6 md:px-0 text-center md:text-left md:mr-12 py-8 order-2 md:order-1">
                <h1 className="text-xl md:text-2xl 2xl:text-3xl mb-2 italic text-gray-700">Raising Powerful Citizens Starts at Home</h1>
                <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 leading-snug text-navy font-cantata">
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
                    className="text-darkgreen font-bold text-[1.1em] md:text-[1.15em]"
                  />
                </h1>
                <div className="space-y-3 text-base md:text-lg leading-relaxed text-gray-700 font-nunito">
                  <p>Every day as parents shape their children, they are shaping the future of our communities, our country, and our democracy.</p>
                  <p>Civic Seeds USA creates educational resources, programs, and family engagement tools that help parents grow powerful citizens by translating civic values into everyday parenting practices.</p> 
                  <p>Civic Seeds’ curricula, workshops, and resources cultivate children with strong character and family values, who have the tools and desire to help their communities and our country flourish.</p>
                  <p>Together we can help families grow the next generation of thoughtful, powerful citizens who have the caring, the courage, and the knowledge to make a difference.</p>
                </div>

                {/* <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
                  <Link
                    to="/frameworks"
                    className="bg-2red text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium whitespace-nowrap hover:bg-darkgreen/80 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    Explore the Frameworks
                  </Link>
                  <Link
                    to="/schedule-services"
                    className="bg-2red text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium whitespace-nowrap hover:bg-darkgreen/80 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    Book a Workshop
                  </Link>
                </div> */}
              </div> 

              <div className="md:min-w-[320px] md:max-w-lg h-64 md:h-auto w-4/5 max-w-sm items-center justify-center mt-4 md:mt-0 md:ml-8 order-1 md:order-2 flex-shrink-0">
                <img src="/images/home.webp" alt="PA4REAL Logo" className="w-full h-full object-cover rounded-lg"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curve divider into blue section — nudge down on small screens to close hairline above blue */}
      <div className="w-full -mt-1 translate-y-1 md:translate-y-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
          className="w-full h-auto"
        >
          <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#3664F2" />
        </svg>
      </div>

      {/* why this matters section */}
      <div className="w-full bg-blue">
        <div className="grid grid-cols-1 md:grid-cols-16">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            <div className="flex md:flex-row flex-col md:items-start justify-center gap-6 md:gap-6 lg:gap-8 py-12 md:py-16">
              <div className="w-4/5 max-w-sm md:max-w-md md:w-[clamp(20rem,38vw,28rem)] flex-shrink-0 aspect-[3/4] mx-auto md:mx-0 overflow-hidden rounded-lg order-2 md:order-1 md:mr-8 lg:mr-12 self-center md:self-start">
                <img
                  src="/images/pillars.jpeg"
                  alt="Community and growth"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1 px-4 sm:px-6 md:px-0 text-center md:text-left order-1 md:order-2 font-nunito gap-3 md:gap-3">
                <h2 className="text-3xl xl:text-4xl font-bold text-white font-cantata shrink-0 mb-2">Why this Matters</h2>
                <div className="relative min-w-0">
                  <div
                    ref={whyMattersScrollRef}
                    className="flex flex-col gap-2.5 md:gap-3 min-w-0 pb-0.5 md:max-h-[calc(clamp(20rem,38vw,28rem)*4/3-4.25rem)] md:overflow-y-auto md:overflow-x-hidden md:overscroll-y-contain md:pr-2 [scrollbar-gutter:stable]"
                  >
                  <div className="rounded-2xl border shadow-lg bg-red p-3.5 md:p-4 flex flex-col text-left">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata mb-1.5">The Problem:</h3>
                    <p className="text-base md:text-lg text-white">
                      There is so much division among us and it’s increasing. We have lower trust in our institutions, and we’re seeing a decline in civic knowledge – the understanding of how and why our government works.
                    </p>
                  </div>
                  <div className="rounded-2xl border shadow-lg bg-red p-3.5 md:p-4 flex flex-col text-left">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata mb-1.5">Insights:</h3>
                    <p className="text-base md:text-lg  text-white">
                      Research shows that the skills that make civic life possible, characteristics like responsibility, empathy, and critical thinking, are developed early through relationships with caregivers. Many parents care deeply about raising thoughtful, responsible kids, but don’t have simple, practical tools to do that intentionally. So, there’s a disconnect: we expect strong civic participation later in life, but we’re not intentionally building those skills where they begin… in families.
                    </p>
                  </div>
                  <div className="rounded-2xl border shadow-lg bg-red p-3.5 md:p-4 flex flex-col text-left">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata mb-1.5">Solution:</h3>
                    <p className="text-base md:text-lg  text-white">
                      Civic Seeds connects everyday parenting with civic development through practical frameworks with simple, 15-minute activities that families can do together to build these skills over time. Not abstract ideas, but activities incorporated into everyday life. That’s how busy people can begin to strengthen our communities from the ground up!
                    </p>
                  </div>
                  <div className="rounded-2xl border shadow-lg bg-red p-3.5 md:p-4 flex flex-col text-left">
                    <h3 className="text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata mb-1.5">Civic Seeds is for you if:</h3>
                    <div className="space-y-2 text-base md:text-lg  text-white">
                      <p>The tools taught in Power Parenting and Parent in Action help make your life easier in the home and in your community.</p>
                      <ul className="list-disc list-outside pl-4 space-y-1">
                        <li>You’re feeling overwhelmed or unsure in your parenting</li>
                        <li>You’re struggling with your kids’ behavior, screens, or motivation</li>
                        <li>You feel disconnected from your kids or your community</li>
                        <li>You want to make a difference, but don’t know where to start</li>
                        <li>You just want to raise good humans</li>
                      </ul>
                      <p>This guide isn’t about doing more; it’s about doing what matters. It helps you feel calmer and more connected, teach values that last, and raise children ready to lead, love, and contribute.</p>
                      <p>Every lesson is designed to remind you that you have power and you’re already building a better future… one child, one home, one community, one moment at a time.</p>
                    </div>
                  </div>
                  </div>
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 hidden h-12 bg-[linear-gradient(to_top,var(--color-blue),transparent)] transition-opacity duration-300 md:block ${whyMattersBottomFade ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curve divider out of blue section */}
      <div className="w-full -mt-1 overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: 'scaleX(-1)' }}
          className="w-full h-auto"
        >
          <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#3664F2" />
        </svg>
      </div>

         {/* Frameworks section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-16 font-nunito">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            <div className="text-center md:text-left mt-12">
              <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 text-navy capitalize font-cantata">
                The Frameworks
              </h1>
              <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-700">
                Our work centers around three practical frameworks designed to help families connect
                everyday parenting with civic learning.
              </p>
            </div>

          <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 py-5 md:py-10 px-4 sm:px-6 md:px-0">
            <div className="flex h-full justify-center">
              <LinkCard
                // to="/frameworks"
                title="The UNIT Framework"
                imageUrl="/images/gardening.jpg"
                imageFit="fill"
                description={
                  <>
                    <p>
                      Families are the first place children experience cooperation, shared responsibility,
                      and the pursuit of the common good and common goals.
                    </p>
                    <p>
                      The UNIT Framework shows how family life connects to broader communities and civic
                      participation. UNIT invites families to see themselves not as separate from the world
                      around them, but as active participants in it—growing power together, from home to
                      community to country.
                    </p>
                  </>
                }
              />
            </div>

            <div className="flex justify-center">
              <LinkCard
                // to="/frameworks"
                title="Power Parenting"
                description={
                  <>
                    <p>
                      Power Parenting focuses on 12 strategies within 4 pillars that help children develop the
                      skills and character needed to be thoughtful, powerful citizens.
                    </p>
                    <p>
                      The Power Parenting Pillars balance inner development with outer engagement. The four
                      pillars are:
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-1">
                      <li>Character &amp; Core Values</li>
                      <li>Thinking Skills &amp; Understanding the World</li>
                      <li>Connection, Communication, &amp; Relationships</li>
                      <li>Capability, Accountability, &amp; Leadership</li>
                    </ul>
                    <p className="mt-2">
                      There are 3 power parenting strategies under each pillar and each strategy builds both
                      personal strength and civic readiness. Together, they form a practical foundation that
                      supports children’s wellbeing at home and prepares them to participate meaningfully in
                      their communities and in our democracy.
                    </p>
                  </>
                }
              />
            </div>

            <div className="flex h-full justify-center">
              <LinkCard
                // to="/frameworks"
                title="Parents in Action"
                imageUrl="/images/capital.jpg"
                description={
                  <>
                    <p>
                      Parents in Action helps families turn their values into meaningful community involvement,
                      showing children that even small actions can strengthen their communities.
                    </p>
                    <p>
                      Parents in Action teaches how power works in our country, what policies affect our
                      children the most, how we can make a difference, and why and how to connect with each
                      other in community.
                    </p>
                    <p>
                      The world is hard and we are tired. We don’t have time to save the world, but we do have
                      time to take small actions that add up to a big difference.
                    </p>
                  </>
                }
              />
            </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-lg md:text-xl 2xl:text-2xl mb-6 leading-relaxed italic text-gray-700">
                Power Parenting and Parents in Action are two halves of one circle. What begins in the heart
                of the home ripples outward into the heart of the community. And the lessons children learn
                through teamwork, community service, and advocacy circle back home, reinforcing their sense of
                purpose and belonging.
              </p>
              <img
                src="/cslogo_revised.png"
                alt="Civic Seeds logo"
                className="w-40 h-40  md:w-64 md:h-64 mx-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* work with deitra section */}
      <div className="w-full -mt-1 translate-y-1 md:translate-y-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
          className="w-full h-auto"
        >
          <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#3664F2" />
        </svg>
      </div>
      <div className="w-full bg-blue py-16 px-4 md:px-8 mt-0">
        <div className="grid grid-cols-1 md:grid-cols-16 w-full md:min-w-screen max-w-6xl mx-auto">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            <div className="flex flex-col gap-10 md:gap-12 lg:gap-14 font-nunito">
              {/* Row 1: text | image */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-10">
                <div className="flex min-w-0 flex-1 flex-col gap-4 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold leading-snug text-white font-cantata">
                    Work with Deitra
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed text-white">
                    Civic Seeds offers interactive workshops and presentations designed for parents, educators,
                    faith communities, civic organizations, and anyone invested in the youth.
                  </p>
                  <div className="space-y-3">
                    <p className="text-base md:text-lg font-semibold text-white">
                      Examples of Speaking Topics Include:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-white text-sm md:text-base">
                      <li>Power Parenting: Raising Kids Ready for Democracy</li>
                      <li>Parents in Action: Turning Family Values into Civic Engagement</li>
                      <li>The UNIT Framework for Families and Communities</li>
                    </ul>
                  </div>
                </div>
                <div className="mx-auto w-full max-w-lg shrink-0 md:mx-0 md:w-[min(100%,22rem)] lg:w-[min(100%,26rem)]">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/25 shadow-md">
                    <img
                      src="/images/nurse.JPG"
                      alt="Deitra in a nursing and community health context"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: image | text — order must live on direct flex children, not nested wrappers */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 lg:gap-10">
                <div className="order-2 md:order-1 mx-auto w-full max-w-lg shrink-0 md:mx-0 md:w-[min(100%,22rem)] lg:w-[min(100%,26rem)]">
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/25 shadow-md">
                    <img
                      src="/images/present.JPG"
                      alt="Deitra leading a workshop or presentation"
                      className="h-full w-full object-cover"
                      style={{ objectPosition: 'center top' }}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col gap-4 text-center md:text-left order-1 md:order-2">
                  <div className="space-y-3">
                    <p className="text-base md:text-lg font-semibold text-white">
                      Examples of Workshop Topics Include:
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 text-white text-sm md:text-base">
                      <li>Quarter Hour of Power: Civic Learning in Everyday Life</li>
                      <li>
                        Choosing Your Family Values: Creating Standards, Rules, and Traditions that Match Them
                      </li>
                    </ul>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-white">
                    These sessions provide practical strategies participants can start using immediately.
                  </p>
                </div>
              </div>

              {/* <div className="mt-2 flex justify-center md:justify-start">
                <Link
                  to="/schedule-services"
                  className="inline-flex items-center justify-center rounded-full bg-red text-white px-6 py-2.5 text-sm md:text-base font-medium shadow-sm transition-transform duration-200 hover:bg-darkgreen/80 hover:scale-[1.03]"
                >
                  Invite Deitra to Speak
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Curve divider out of blue section */}
      <div className="w-full -mt-1 overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: 'scaleX(-1)' }}
          className="w-full h-auto"
        >
          <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#3664F2" />
        </svg>
      </div>

      {/* a note from deitra section */}
      <div className="grid grid-cols-1 md:grid-cols-16 min-w-screen mx-auto py-12">
        <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
          <div className="flex flex-col md:flex-row items-stretch rounded-2xl border shadow-lg bg-red p-6 md:p-8">
            <div className="flex-1 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold mb-4 text-white capitalize font-cantata">
                A Note from Deitra
              </h1>
              <div className="space-y-3 text-base md:text-lg leading-relaxed text-white italic font-nunito">
                <p>As a community health nurse, family and community policy analyst, educator, and parent of four children, I’ve spent years thinking about what helps families and communities thrive.</p>
                <p>I believe parents have more influence than they realize. The everyday conversations, decisions, and values we share with our children shape not only their futures, but the future of our communities.</p> 
                <p>Civic Seeds was created to help parents recognize that power and to offer practical ways to nurture the next generation of thoughtful, engaged citizens.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* resources for families section */}
      <div className="w-full text-white py-16 px-4 md:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-16 w-full md:min-w-screen mx-auto">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            <div className="flex flex-col gap-4 text-center md:text-left">
              <h2 className="text-2xl md:text-4xl font-bold leading-snug text-navy font-cantata">
                Resouces for Families
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Explore tools designed to help families grow together while raising engaged citizens.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-4 items-center">
                <div className="space-y-3">
                <p className="text-lg md:text-xl font-semibold text-gray-700">
                    Resources available for pre-order:
                  </p>
                  <div className="space-y-2 text-gray-700 text-base md:text-lg">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-darkgreen">✓</span>
                      <span>Parenting guidebook</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-darkgreen">✓</span>
                      <span>Family workbooks and activities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 text-darkgreen">✓</span>
                      <span>Children’s books</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center md:justify-center">
                  <div className="w-full max-w-md h-56 md:h-90 rounded-xl bg-violet-300/30 flex items-center justify-center text-violet-100 text-sm md:text-base">
                    <img
                      src="/images/farm.jpg"
                      alt="Family at farm"
                      className="h-full w-full rounded-lg object-cover object-top md:object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 w-full max-w-2xl mx-auto md:mx-0">
                {/* <form
                  className="flex flex-row flex-wrap gap-3 items-center justify-center sm:justify-start"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    id="resources-preorder-email"
                    placeholder="Your email"
                    aria-label="Email for pre-order updates"
                    className="flex-1 min-w-[160px] sm:min-w-0 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:border-darkgreen"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 rounded-full bg-red text-white px-6 py-2.5 text-sm md:text-base font-medium whitespace-nowrap transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
                  >
                    Interested in pre-order
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stay Connected - email signup section */}
      <div className="w-full -mt-1 translate-y-1 md:translate-y-0 overflow-hidden leading-none" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{ transform: 'scaleY(-1)' }}
          className="w-full h-auto"
        >
          <path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="#3664F2" />
        </svg>
      </div>
      <div className="w-full py-12 md:py-16 bg-blue">
        <div className="grid grid-cols-1 md:grid-cols-16 w-full max-w-6xl mx-auto px-4 md:px-0 items-center">
          <div className="col-span-1 md:col-span-6 flex justify-center md:justify-start">
            <img
              src="/cslogo_revised.png"
              alt="Civic Seeds logo"
              className="w-40 h-40 md:w-56 md:h-56 object-contain"
            />
          </div>

          <div className="col-span-1 md:col-span-10 my-10 md:my-0">
            <div className="flex flex-col gap-4 text-center md:text-left max-w-2xl">
              <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold leading-snug text-white   font-cantata">
                Stay Connected
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-white">
                Join our community of parents, educators, and community leaders exploring how family
                life shapes civic life.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white">
                Sign up for insights, family activities, and ideas you can use right away.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-white font-bold">
                Check back later for updates. Thanks for your interest!
              </p>
              {/* <form
                className="flex flex-row flex-wrap gap-3 mt-2 items-center justify-center sm:justify-start px-6 md:px-0"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  aria-label="Email for signup"
                  className="flex-1 min-w-[160px] sm:min-w-0 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:border-darkgreen"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-full bg-red text-white px-6 py-2.5 text-sm md:text-base font-medium whitespace-nowrap transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
                >
                  Sign up
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;