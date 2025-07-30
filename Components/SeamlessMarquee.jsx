
import Marquee from "react-fast-marquee";

const VerticalMarquee = ({ images, direction = "down", speed = 40 }) => {
  return (
    <div className="h-[400px] w-[160px] overflow-hidden">
      <Marquee
        direction={direction}
        speed={speed}
        gradient={false}
        pauseOnHover={false}
        play={true}
        vertical={true}
      >
        <div className="flex flex-col gap-6">
          {[...images, ...images].map((item, idx) => (
            <img
              key={idx}
              src={item.image}
              alt=""
              className="w-[140px] object-contain opacity-90 mb-2"
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
};
