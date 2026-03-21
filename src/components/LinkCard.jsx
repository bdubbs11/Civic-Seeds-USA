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
 * @param {string} [imageUrl] - Optional image shown below the text (full width, landscape)
 * @param {'cover'|'contain'} [imageFit] - cover fills frame; contain fits whole image in the same framed strip (letterboxing uses bg-red)
 * @param {'default'|'mid-lower'} [imageObjectPosition] - With cover only: focal point slightly below center on Y
 * @param {string} [className]
 */
function LinkCard({
  title,
  description,
  to,
  href,
  imageUrl,
  imageFit = 'cover',
  imageObjectPosition = 'default',
  className = '',
}) {
  const useContain = imageFit === 'contain';
  const useFill = imageFit === 'fill';

  const baseClass =
    'group relative flex h-full min-h-80 w-full max-w-md flex-col overflow-hidden rounded-2xl border p-6 text-left shadow-lg transition-colors bg-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 ' +
    className;

  // Shared bordered strip: same outer frame for every card. Contain = whole image inside border (letterboxing on bg-red); cover = fills strip.
  const imageFrameClass =
    'relative mt-5 aspect-[16/9] w-full min-w-0 shrink-0 overflow-hidden rounded-xl border border-black bg-red' +
    (useContain ? ' flex items-center justify-center' : '');

  const imageMotionBase =
    'block min-h-0 min-w-0 transition-transform duration-300 ease-out group-hover:scale-[1.02]';
  // Mid-lower crop for cover only; Y% toward 50% = scooted up vs bottom.
  const objectPositionClass =
    !useContain && !useFill && imageObjectPosition === 'mid-lower' ? 'object-[50%_54%]' : 'object-center';

  const imageClassName = useFill
    ? `${imageMotionBase} h-full w-full object-fill`
    : useContain
      ? `${imageMotionBase} max-h-full max-w-full object-contain object-center`
      : `${imageMotionBase} h-full w-full object-cover ${objectPositionClass}`;

  const content = (
    <>
      <div className="flex min-h-0 flex-1 flex-col">
        <h3 className="mb-2 text-xl sm:text-2xl xl:text-3xl font-semibold tracking-tight text-white text-center md:text-left">
          {title}
        </h3>
        <div className="mx-auto max-w-[90%] flex-1 text-base md:text-lg space-y-2 text-center text-white md:text-left md:mx-0">
          {description}
        </div>
      </div>
      {imageUrl && (
        <div className={imageFrameClass}>
          <motion.img
            src={imageUrl}
            alt={`${title} illustration`}
            className={imageClassName}
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
