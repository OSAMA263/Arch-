import { useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

export default function ScrollTopBtn() {
  const [Show, setShow] = useState(false);

  const scrollHandler = () => {
    window.scroll({ top: 0, bottom: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", () => {
    window.scrollY > 200 ? setShow(true) : setShow(false);
  });

  const classes = `${
    !Show ? "invisible opacity-0" : "opacity-75"
  } fixed sm:bottom-14 sm:right-8 bottom-2 right-2 flex bg-red-500 hover:bg-red-400 sm:bg-[#494a4e] p-3 text-2xl text-white transition-all duration-500 sm:hover:bg-[#626368]`;

  return (
    <>
      <button
        className={classes}
        aria-label="scroll top"
        onClick={scrollHandler}
      >
        <AiOutlineArrowUp />
      </button>
    </>
  );
}
