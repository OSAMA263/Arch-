import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MainBtn from "../../../Features/MainBtn";
export default function Carousel({ info, indicators }) {
  const [Index, setIndex] = useState(0);

  const carouselHandler = (i) => {
    setIndex(i);
  };

  const styles = {
    parent:
      "flex flex-col items-start justify-center h-full font-bold text-white",
    text_wrapper:
      "absolute me-[5%] ms-[5%] flex w-[90%] flex-col items-start gap-y-12 sm:gap-y-6 md:me-0 md:ms-[14vw] md:w-[48%]",
    indicators_wrapper:
      "absolute bottom-0 left-1/2 z-[69] flex -translate-x-1/2 translate-y-full sm:left-0 sm:translate-x-0 sm:translate-y-0 lg:-left-[5.2rem]",
  };

  return (
    <>
      <section className="relative mt-12 bg-gray-200 md:mt-24">
        {/* details */}
        <AnimatePresence mode="wait">
          {/* parent div */}
          <motion.div
            variants={parent_variants}
            initial="init"
            animate="animate"
            exit="exit"
            key={info[Index].img}
            className={styles.parent}
          >
            <div className="h-[44rem] w-full">
              <motion.img
                initial="init"
                animate="animate"
                exit="exit"
                src={info[Index].img}
                className="w-full h-full brightness-50"
              />
            </div>
            {/* text */}
            <div className={styles.text_wrapper}>
              <motion.h1
                variants={h1_variants}
                initial="init"
                animate="animate"
                exit="exit"
                key={info[Index].header}
                className={`text-5xl text-white md:text-7xl`}
              >
                {info[Index].header}
              </motion.h1>
              <motion.p
                key={info[Index].text}
                variants={p_variants}
                initial="init"
                animate="animate"
                exit="exit"
                className="text-lg text-white sm:font-normal"
              >
                {info[Index].text}
              </motion.p>
              {/* btn link */}
              <motion.button
                variants={btn_variants}
                initial="init"
                animate="animate"
                exit="exit"
                className="border-0 transition-color"
              >
                <MainBtn text="See Our Protfolio" link="/protfolio" />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* indicators */}
        <div className={styles.indicators_wrapper}>
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
      </section>
    </>
  );
}


const parent_variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

const h1_variants = {
  init: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      stiffness: 70,
      type: "spring",
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const btn_variants = {
  init: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      stiffness: 70,
      type: "spring",
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const p_variants = {
  init: {
    scale: 1.1,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      stiffness: 70,
      type: "spring",
    },
  },
  exit: {
    scale: 1.1,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
