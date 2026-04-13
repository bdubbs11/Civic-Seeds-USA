import React, { useState } from 'react';
// import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
// const MotionDiv = motion.div;
import { Link } from 'react-router-dom';
import TextRotator from '../components/TextRotator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { db } from '../../firebase';
import { collection, query, where, getDocs, addDoc, Timestamp } from 'firebase/firestore';

function Home() {
  // email
  const [stayConnectedEmail, setStayConnectedEmail] = useState('');
  const [preorderResourcesEmail, setPreorderResourcesEmail] = useState('');

  // Deitra note — re-enable with MotionDiv when adding site-wide motion
  // const deitraNoteMotion = {
  //   initial: { opacity: 0, y: 30 },
  //   whileInView: { opacity: 1, y: 0 },
  //   viewport: { once: true },
  //   transition: { duration: 0.6 },
  // };

  // handle form submit for email signup
  const handleSubmitEmailSignup = async (e) => {
    e.preventDefault();

    if (!stayConnectedEmail) return;
    const emailLower = stayConnectedEmail.toLowerCase().trim();

    try  { 
      const q = query(
        collection(db, 'email-signup-list'),
        where('email', '==', emailLower)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert("You're already signed up!");
        return;
      }

      await addDoc(collection(db, 'email-signup-list'), {
        email: emailLower,
        createdAt: Timestamp.now(),
      });
      // await sendUniversalSubmission({
      //   type: 'Newsletter Signup',
      //   user_email: emailLower,
      //   first_name: '',
      //   last_name: '',
      //   subject: '',
      //   message: 'User subscribed to updates',
      // });

      setStayConnectedEmail('');
      alert('Thank you for signing up!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Something went wrong. Please try again.');
    }
  };

  // handle form submit for email signup
  const handleSubmitPreorderResources = async (e) => {
    e.preventDefault();

    if (!preorderResourcesEmail) return;
    const emailLower = preorderResourcesEmail.toLowerCase().trim();

    try  { 
      const q = query(
        collection(db, 'preorder-resources'),
        where('email', '==', emailLower)
      );
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        alert("You're already signed up!");
        return;
      }

      await addDoc(collection(db, 'preorder-resources'), {
        email: emailLower,
        createdAt: Timestamp.now(),
      });
      // await sendUniversalSubmission({
      //   type: 'Preorder Resource',
      //   user_email: emailLower,
      //   first_name: '',
      //   last_name: '',
      //   subject: 'Preorder Request',
      //   message: 'User requested preorder resource',
      // });

      setPreorderResourcesEmail('');
      alert('Thank you for signing up!');
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('Something went wrong. Please try again.');
    }
  };

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

                 <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-8">
                  {/* <Link
                    to="/frameworks"
                    className="bg-2red text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium whitespace-nowrap hover:bg-darkgreen/80 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    Explore the Frameworks
                  </Link> */}
                  <Link
                    to="/schedule-services"
                    className="bg-dred text-white px-5 py-2.5 rounded-full text-sm md:text-base font-medium whitespace-nowrap hover:bg-dred/80 ease-in-out duration-300 cursor-pointer transition-transform hover:scale-[1.02]"
                  >
                    Book a Workshop
                  </Link>
                </div>
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

      {/* can make this into an accordian */}
      {/* why this matters section */}
      <div className="w-full bg-blue">
        <div className="grid grid-cols-1 md:grid-cols-16">
          <div className="col-start-1 md:col-start-2 col-span-1 md:col-span-14 px-4 md:px-0">
            <div className="flex md:flex-row flex-col md:items-start justify-center gap-6 md:gap-6 lg:gap-8 py-12 md:py-16">
              <div className="w-4/5 md:w-[clamp(20rem,38vw,28rem)] flex-shrink-0 aspect-[3/4] mx-auto md:mx-0 overflow-hidden rounded-lg order-2 md:order-1 md:mr-8 lg:mr-12 self-center md:self-start">
                <img
                  src="/images/pillars.jpeg"
                  alt="Community and growth"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1 px-4 sm:px-6 md:px-0 text-center md:text-left order-1 md:order-2 font-nunito gap-3 md:gap-3">
                <h2 className="text-3xl xl:text-4xl font-bold text-white font-cantata shrink-0 mb-2">Why this Matters</h2>
                <Accordion type="single" collapsible defaultValue="problem" className="w-full space-y-2.5 md:space-y-3">
                  <AccordionItem
                    value="problem"
                    className="rounded-2xl border border-white/15 shadow-lg bg-dred px-3.5 md:px-4 data-[state=open]:pb-1"
                  >
                    <AccordionTrigger className="py-3 md:py-3.5 text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata hover:no-underline">
                      The Problem:
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 md:pb-4 pt-0 text-base md:text-lg text-white">
                      There is so much division among us and it’s increasing. We have lower trust in our institutions, and we’re seeing a decline in civic knowledge - the understanding of how and why our government works.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="insights"
                    className="rounded-2xl border border-white/15 shadow-lg bg-dred px-3.5 md:px-4 data-[state=open]:pb-1"
                  >
                    <AccordionTrigger className="py-3 md:py-3.5 text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata hover:no-underline">
                      Insights:
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 md:pb-4 pt-0 text-base md:text-lg text-white">
                      Research shows that the skills that make civic life possible, characteristics like responsibility, empathy, and critical thinking, are developed early through relationships with caregivers. Many parents care deeply about raising thoughtful, responsible kids, but don’t have simple, practical tools to do that intentionally. So, there’s a disconnect: we expect strong civic participation later in life, but we’re not intentionally building those skills where they begin... in families.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="solution"
                    className="rounded-2xl border border-white/15 shadow-lg bg-dred px-3.5 md:px-4 data-[state=open]:pb-1"
                  >
                    <AccordionTrigger className="py-3 md:py-3.5 text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata hover:no-underline">
                      Solution:
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 md:pb-4 pt-0 text-base md:text-lg text-white">
                      Civic Seeds connects everyday parenting with civic development through practical frameworks with simple, 15-minute activities that families can do together to build these skills over time. Not abstract ideas, but activities incorporated into everyday life. That’s how busy people can begin to strengthen our communities from the ground up!
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="for-you"
                    className="rounded-2xl border border-white/15 shadow-lg bg-dred px-3.5 md:px-4 data-[state=open]:pb-1"
                  >
                    <AccordionTrigger className="py-3 md:py-3.5 text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata hover:no-underline">
                      Civic Seeds is for you if:
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 md:pb-4 pt-0 text-base md:text-lg text-white">
                      <div className="space-y-2 text-base md:text-lg text-white">
                        <p>The tools taught in Power Parenting and Parent in Action help make your life easier in the home and in your community.</p>
                        <ul className="list-disc list-outside pl-4 space-y-1">
                          <li>You’re feeling overwhelmed or unsure in your parenting</li>
                          <li>You’re struggling with your kids’ behavior, screens, or motivation</li>
                          <li>You feel disconnected from your kids or your community</li>
                          <li>You want to make a difference, but don’t know where to start</li>
                          <li>You just want to raise good humans</li>
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="why-this-guide-matters"
                    className="rounded-2xl border border-white/15 shadow-lg bg-dred px-3.5 md:px-4 data-[state=open]:pb-1"
                  >
                    <AccordionTrigger className="py-3 md:py-3.5 text-xl sm:text-2xl xl:text-3xl font-bold text-white font-cantata hover:no-underline">
                      Why This Guide Matters:
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 md:pb-4 pt-0 text-base md:text-lg text-white">
                      <div className="space-y-2 text-base md:text-lg text-white">
                        <p>This guide isn’t about doing more; it’s about doing what matters. It helps you feel calmer and more connected, teach values that last, and raise children ready to lead, love, and contribute.</p>
                        <p>Every lesson is designed to remind you that you have power and you’re already building a better future... one child, one home, one community, one moment at a time.</p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
            <div className="text-center md:text-left mt-12 mb-10 md:mb-12">
              <h1 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4 text-navy capitalize font-cantata">
                The Frameworks
              </h1>
              <p className="text-lg md:text-xl mb-0 leading-relaxed text-gray-700">
                Our work centers around three practical frameworks designed to help families connect
                everyday parenting with civic learning.
              </p>
            </div>

            {/* Stacked cards: generous outer gap, ~⅔ text / ~⅓ image on 1 & 3, centered column on 2 */}
            <div className="mx-auto flex max-w-5xl flex-col gap-8 px-1 py-6 sm:gap-10 sm:px-3 sm:py-8 md:gap-12 md:px-6 md:py-10 lg:max-w-6xl lg:px-8">
              {/* Card 1: UNIT — image on the right (~⅓ width), portrait strip on md */}
              <div className="flex min-h-[30vh] flex-col items-stretch overflow-hidden text-left px-0 md:pl-14 rounded-2xl bg-dred shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] transition-transform duration-300 hover:-translate-y-1 md:h-[55vh] md:flex-row">
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-7 lg:p-9">
                  <h3 className="mb-1 font-cantata text-xl font-normal leading-tight text-white md:text-2xl">
                    The UNIT Framework
                  </h3>
                  <div className="space-y-3 text-sm leading-relaxed text-white/85 md:text-lg">
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
                  </div>
                </div>
                <div className="relative min-h-[14rem] w-full shrink-0 overflow-hidden sm:min-h-[15rem] md:w-[45%] p-6">
                  <img
                    src="/images/gardening.jpg"
                    alt="Gardening together"
                    className="h-full w-full md:min-h-full rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Card 2: Power Parenting — text inset for balance like mock */}
              <div className="flex min-h-[30vh] flex-col items-stretch overflow-hidden text-left px-0 md:px-14 rounded-2xl bg-dred shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] transition-transform duration-300 hover:-translate-y-1 md:h-[55vh]">
                <div className=" flex w-full flex-1 flex-col text-left justify-center gap-1.5 px-7 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-6">
                  <h3 className="mb-1 font-cantata text-xl font-normal leading-tight text-white md:text-2xl">
                    Power Parenting
                  </h3>
                  <div className="space-y-2.5 text-sm leading-relaxed text-white/85 md:text-lg">
                    <p>
                      Power Parenting focuses on 12 strategies within 4 pillars that help children develop the
                      skills and character needed to be thoughtful, powerful citizens.
                    </p>
                    <p>
                      The Power Parenting Pillars balance inner development with outer engagement. The four
                      pillars are:
                    </p>
                    <ul className="mt-1 list-inside list-disc space-y-1">
                      <li>Character &amp; Core Values</li>
                      <li>Thinking Skills &amp; Understanding the World</li>
                      <li>Connection, Communication, &amp; Relationships</li>
                      <li>Capability, Accountability, &amp; Leadership</li>
                    </ul>
                    <p>
                      There are 3 power parenting strategies under each pillar and each strategy builds both
                      personal strength and civic readiness—forming a practical foundation that supports
                      children’s wellbeing at home and prepares them to participate meaningfully in democracy.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Parents in Action — image on the left (~⅓), mirrors card 1 */}
              <div className="flex min-h-[30vh] flex-col items-stretch overflow-hidden text-left px-0 md:pr-14 rounded-2xl bg-dred shadow-[inset_0_1px_0_0_rgba(255,255,255,0.18)] transition-transform duration-300 hover:-translate-y-1 md:h-[55vh] md:flex-row">
                <div className="relative min-h-[14rem] w-full shrink-0 overflow-hidden sm:min-h-[15rem] md:min-h-0 md:w-[35%] p-6 order-2 md:order-1">
                  <img
                    src="/images/capital.jpg"
                    alt="Capital Building"
                    className="h-full w-full rounded-lg"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-7 lg:p-9 order-1 md:order-2">
                  <h3 className="mb-1 font-cantata text-xl font-normal leading-tight text-white md:text-2xl">
                    Parents in Action
                  </h3>
                  <div className="space-y-2.5 text-sm leading-relaxed text-white/85 md:text-lg">
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
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center md:mt-12">
              <p className="mb-6 text-lg leading-relaxed italic text-gray-700 md:text-xl 2xl:text-2xl">
                Power Parenting and Parents in Action are two halves of one circle. What begins in the heart
                of the home ripples outward into the heart of the community. And the lessons children learn
                through teamwork, community service, and advocacy circle back home, reinforcing their sense of
                purpose and belonging.
              </p>
              <img
                src="/cslogo_revised.png"
                alt="Civic Seeds logo"
                className="mx-auto h-20 w-20 rounded-lg object-contain md:h-24 md:w-24"
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
                  <div className=" w-full h-[55vh] overflow-hidden rounded-xl border border-white/25 shadow-md">
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
                <div className="flex min-w-0 flex-1 flex-col gap-4 mt-8 md:mt-38 text-center md:text-left order-1 md:order-2">
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
                  <div className="mt-8 hidden justify-center md:mt-20 md:flex md:justify-start">
                    <Link
                      to="/schedule-services"
                      className="inline-flex items-center justify-center rounded-full bg-dred text-white px-6 py-2.5 text-sm md:text-base font-medium shadow-sm transition-transform duration-200 hover:bg-dred/80 hover:scale-[1.02]"
                    >
                      Invite Deitra to Speak
                    </Link>
                  </div>
                </div>
                <div className="order-3 flex mt-4 justify-center md:hidden">
                  <Link
                    to="/schedule-services"
                    className="inline-flex items-center justify-center rounded-full bg-dred text-white px-6 py-2.5 text-sm font-medium shadow-sm transition-transform duration-200 hover:bg-dred/80 hover:scale-[1.02]"
                  >
                    Invite Deitra to Speak
                  </Link>
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

      {/* a note from deitra section */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-700 p-8 shadow-2xl md:p-12">
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative z-10 text-left">
              <Quote className="mb-6 h-12 w-12 text-white/30" aria-hidden="true" />
              <h2 className="mb-6 font-cantata text-3xl font-bold capitalize text-white md:text-4xl">
                A Note from Deitra
              </h2>
              <div className="space-y-4 font-nunito text-lg italic leading-relaxed text-white/95 md:text-xl">
                <p>
                  As a community health nurse, family and community policy analyst, educator, and parent of four
                  children, I’ve spent years thinking about what helps families and communities thrive.
                </p>
                <p>
                  I believe parents have more influence than they realize. The everyday conversations,
                  decisions, and values we share with our children shape not only their futures, but the future of
                  our communities.
                </p>
                <p>
                  Civic Seeds was created to help parents recognize that power and to offer practical ways to
                  nurture the next generation of thoughtful, engaged citizens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                <form
                  className="flex flex-row flex-wrap gap-3 items-center justify-center sm:justify-start"
                  onSubmit={handleSubmitPreorderResources}
                >
                  <input
                    type="email"
                    id="resources-preorder-email"
                    placeholder="Your email"
                    aria-label="Email for pre-order updates"
                    className="flex-1 min-w-[160px] sm:min-w-0 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:border-darkgreen"
                    value={preorderResourcesEmail}
                    onChange={(e) => setPreorderResourcesEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 rounded-full bg-dred text-white px-6 py-2.5 text-sm md:text-base font-medium whitespace-nowrap transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
                  >
                    Interested in pre-order
                  </button>
                </form>
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

              {/* <p className="text-base md:text-lg leading-relaxed text-white font-bold">
                Check back later for updates. Thanks for your interest!
              </p> */}
              <form id="stay-connected-form"
                className="flex flex-row flex-wrap gap-3 mt-2 items-center justify-center sm:justify-start px-6 md:px-0"
                onSubmit={handleSubmitEmailSignup}
              >
                <input
                  type="email"
                  placeholder="Your email"
                  value={stayConnectedEmail}
                  onChange={(e) => setStayConnectedEmail(e.target.value)}
                  aria-label="Email for signup"
                  className="flex-1 min-w-[160px] sm:min-w-0 rounded-md border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:border-darkgreen"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-full bg-dred text-white px-6 py-2.5 text-sm md:text-base font-medium whitespace-nowrap transition-colors hover:bg-darkgreen/80 focus:outline-none focus:ring-2 focus:ring-darkgreen focus:ring-offset-2"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;