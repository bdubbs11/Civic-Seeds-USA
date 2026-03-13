import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);
const MotionAnchor = motion.a;

const cardVariants = {
  initial: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 15,
    },
  },
};

/**
 * LinkCard – card with hover animation. Use `to` for internal (React Router) links, `href` for external.
 * @param {string} title
 * @param {React.ReactNode|string} description
 * @param {string} [to] - React Router path (e.g. "/schedule-services")
 * @param {string} [href] - External URL (opens in new tab)
 * @param {string} [imageUrl] - Optional image URL
 * @param {string} [className]
 */
function LinkCard({ title, description, to, href, imageUrl, className = '' }) {
  const baseClass =
    'group relative flex min-h-80 w-full max-w-sm flex-col justify-between overflow-hidden rounded-2xl border p-6 text-left shadow-lg transition-colors bg-lightgreen  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ' +
    className;

  const content = (
    <>
      <div className="z-10">
        <h3 className="mb-2 font-serif text-2xl font-semibold tracking-tight text-gray-900">
          {title}
        </h3>
        <div className="max-w-[90%] text-base text-gray-600 space-y-2">
          {description}
        </div>
      </div>
      {imageUrl && (
        <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-1/4 translate-y-1/4 transform">
          <motion.img
            src={imageUrl}
            alt={`${title} illustration`}
            className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
      )}
    </>
  );

  if (to) {
    return (
      <MotionLink
        to={to}
        className={baseClass}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
        aria-label={`Link to ${title}`}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionAnchor
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={baseClass}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      aria-label={`Link to ${title}`}
    >
      {content}
    </MotionAnchor>
  );
}

export default LinkCard;
