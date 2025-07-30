import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

const TypeWriter = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const el = headingRef.current;
    const text = el.innerText;
    el.innerHTML = text
      .split('')
      .map(char => `<span class="char">${char}</span>`)
      .join('');

    const chars = el.querySelectorAll('.char');

    anime({
      targets: chars,
      y: [
        { value: '-2.75rem', easing: 'easeOutExpo', duration: 600 },
        { value: 0, easing: 'easeOutBounce', duration: 800, delay: 100 }
      ],
      rotate: {
        value: '-1turn',
        delay: 0,
      },
      delay: anime.stagger(50),
      easing: 'easeInOutCirc',
      loopDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <h2
      ref={headingRef}
      className="text-4xl sm:text-6xl font-bold text-center text-white"
    >
      Welcome Studio
    </h2>
  );
};

export default TypeWriter;
