import { NavLink } from "react-router-dom";
import MainBtn from "./MainBtn";

export default function Footer() {
  return (
    <>
      <div className="relative mx-auto  flex flex-col justify-center md:flex-row">
        <div className="mx-auto w-fit bg-black px-12 py-14">
          <NavLink to="/">
            <img src="light-logo.svg" className="text-white" alt="" />
          </NavLink>
        </div>
        <ul className="relative flex w-full flex-col items-center gap-x-8 gap-y-4 bg-[#c5cae0c4] px-8 py-20 md:flex-row md:gap-y-0 md:py-0 [&>a.active]:text-[#a5afb9] [&>a:hover]:text-[#838386] [&>a]:text-xl [&>a]:font-bold">
          <NavLink className="transition-all duration-500" to="/protfolio">
            Protfolio
          </NavLink>
          <NavLink className="transition-all duration-500" to="/about-us">
            About Us
          </NavLink>
          <NavLink className="transition-all duration-500" to="/contact">
            Contact
          </NavLink>
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 translate-y-1/2 md:bottom-1/2 md:right-0 md:translate-y-1/2">
            <MainBtn text="See Our Protfolio" link="/protfolio" />
          </div>
        </ul>
      </div>
    </>
  );
}
