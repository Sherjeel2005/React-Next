import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatCounter = ({ end, suffix = '', prefix = '', decimal = null, labelLines = [] }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className='text-black pb-4 border-b border-black/20 last:border-b-0'>
      <span className='text-4xl sm:text-5xl xl:text-[59px] font-normal block'>
        {inView ? (
          <CountUp
            start={0}
            end={end}
            duration={3}
            decimals={decimal ? 1 : 0}
            prefix={prefix}
            suffix={suffix}
            separator=","
          />
        ) : (
          `${prefix}0${suffix}`
        )}
      </span>
      {labelLines.map((line, index) => (
        <p key={index} className='text-lg sm:text-xl mt-2'>
          {line}
        </p>
      ))}
    </div>
  );
};

export default StatCounter;
