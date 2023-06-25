import { NavLink } from "react-router-dom";
import MainBtn from "../../../Features/MainBtn";

export default function FeaturedSection() {
  const cards = [
    {
      img: "/public/home/featured-img1.jpg",
      number: "1",
      slider: {
        h1: "Project Del So",
        link: "",
      },
    },
    {
      img: "/public/home/featured-img2.jpg",
      number: "2",
      slider: {
        h1: "Le Prototype",
        link: "",
      },
    },
    {
      img: "/public/home/featured-img3.jpg",
      number: "3",
      slider: {
        h1: "228B Tower",
        link: "",
      },
    },
  ];

  return (
    <>
      <div className="my-44 md:w-auto w-[90%] mx-auto">
        {/* header */}
        <div className="mb-16 flex justify-between font-bold">
          <h1 className="text-5xl">Featured</h1>
          <MainBtn text="See All" link="/protfolio" />
        </div>
        {/* Projects in cards */}
        <div className="grid md:grid-cols-3 grid-cols-1 justify-between grid-rows-3 gap-x-6 md:gap-y-0 gap-y-6 md:grid-rows-1 overflow-hidden">
          {cards.map(({ img, number, slider }, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-sm [&>div]:hover:-translate-y-full [&>div]:hover:bg-[#33404e] [&>h1]:hover:opacity-0 [&>img]:hover:brightness-50 "
            >
              <img
                loading="lazy"
                src={img}
                alt=""
                className="w-full md:h-full h-[25vh] transition-all duration-700 object-cover"
              />
              <h1 className=" translate-x-1/5 absolute -right-2 top-0 -translate-y-[40%] text-[11rem] font-bold text-[#8dbec46c] transition-all duration-700">
                {number}
              </h1>
              {/* slider */}
              <div
                className={`absolute flex h-full w-full translate-y-0 flex-col items-center justify-center gap-y-6 overflow-hidden rounded-sm bg-[#33404e38] text-white transition-all duration-700`}
              >
                <h1 className="text-2xl font-bold  text-white">{slider.h1}</h1>
                <div>
                  <NavLink
                    to="/protfolio"
                    className="flex items-center justify-center gap-4 px-8 py-2 text-gray-300 transition-all hover:text-white [&>svg]:hover:translate-x-4 [&~#span1]:hover:w-[50%] [&~#span2]:hover:w-[70%] [&~span]:hover:bg-gray-400"
                  >
                    View All Projects
                  </NavLink>
                  <span
                    id="span1"
                    className="mb-1 ml-8 flex h-[1px] w-[20%] bg-white transition-all duration-500"
                  ></span>
                  <span
                    id="span2"
                    className="ml-8 flex h-[1px] w-[10%] bg-white transition-all duration-500"
                  ></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
