import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TfiArrowRight } from "react-icons/tfi";

export default function Carousel({ info, indicators }) {
  const [Index, setIndex] = useState(0);

  const carouselHandler = (i) => {
    setIndex(i);
  };
  // const ii=info.findIndex((obj) => obj === info[Index])
  // const control = useAnimation();

  // const imgVariants = {
  //   init: {
  //     opacity: 0,
  //   },
  //   animate: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //     },
  //   },
  //   exit: {
  //     opacity: 0,
  //   },
  // };
  return (
    <>
      <div className="relative mt-12 bg-gray-200 md:mt-24">
        {/* details */}
        <div className="relative h-[44rem]">
          {info.map(({ img, header, text }, i) => (
            <div
              key={i}
              className={`${
                Index === i ? "z-20 opacity-100 delay-700" : "-z-10 opacity-0"
              } absolute top-1/2 flex h-full -translate-y-1/2 flex-col items-start justify-center font-bold text-white transition-all duration-[1s] ease-in-out`}
            >
              <div className="h-[44rem] w-full">
                <img src={img} className="h-full w-full brightness-50" alt="" />
              </div>
              {/* text */}
              <div
                className={`${
                  Index === i
                    ? "[&>a]:translate-x-0 [&>a]:delay-1000 [&>h1]:translate-y-0 [&>h1]:delay-1000"
                    : "[&>a]:-translate-x-24 [&>h1]:-translate-y-20"
                }  absolute me-[5%] ms-[5%] flex w-[90%] flex-col items-start gap-y-12 sm:gap-y-6 md:me-0 md:ms-[14vw] md:w-[48%]`}
              >
                <h1
                  className={`text-5xl text-white transition-all duration-1000 md:text-7xl`}
                >
                  {header}
                </h1>
                <p className="text-lg text-white sm:font-normal">{text}</p>
                {/* btn link */}
                <NavLink
                  to="/protfolio"
                  className="transition-all duration-1000 flex items-center justify-center gap-4 rounded-sm bg-[#191a1f] px-8 py-4 font-semibold text-white hover:bg-[#ebeced] hover:text-black [&>svg]:hover:translate-x-4"
                >
                  See Our Protfolio
                  <TfiArrowRight className="transition-all duration-500" />
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* indicators */}
        <div className="absolute bottom-0 left-1/2 z-[69] flex -translate-x-1/2 translate-y-full sm:left-0 sm:translate-x-0 sm:translate-y-0 lg:-left-[5.1rem]">
          {indicators.map((text, i) => (
            <button
              onClick={() => {
                carouselHandler(i);
                // control.start("animate");
                // control.set("exit");
              }}
              key={i}
              className={`border-y border-l p-4 font-bold transition-colors duration-700 sm:p-8 ${
                Index === i
                  ? "border-[#191a1f] bg-[#191a1f] text-white hover:bg-[#191a1f]"
                  : "bg-white hover:bg-gray-200 "
              }`}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
