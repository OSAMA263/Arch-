import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import ToggleNavbar from "./ToggleNavbar";
import { RiMenuLine, RiCloseFill } from "react-icons/ri";

export default function Navbar() {
  const { pathname } = useLocation();
  const [Toggle, setToggle] = ToggleNavbar();

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const styles = {
    nav: "relative mx-auto mt-6 w-[95%] items-end md:mt-12 md:flex",

    expand_navlinks_btn: `${
      Toggle
        ? "[&>#close]:rotate-0 [&>#close]:opacity-100"
        : "[&>#open]:rotate-0 [&>#open]:opacity-100"
    } overflow relative mr-4 md:hidden [&>svg]:absolute [&>svg]:left-1/2 [&>svg]:top-1/2 [&>svg]:-translate-x-1/2 [&>svg]:-translate-y-1/2 [&>svg]:-rotate-90 [&>svg]:text-4xl [&>svg]:opacity-0`,

    links_wrapper: `${
      Toggle ? "left-1/2 -translate-x-1/2" : "left-0 -translate-x-[200%]"
    } absolute top-full z-[69] mx-auto w-[60%] bg-white py-12 text-center transition-all duration-500 sm:w-[80%] md:static md:ml-24 md:flex md:w-auto md:translate-x-0 md:py-0 md:text-start`,

    ul: "hover: flex flex-col gap-x-8 gap-y-2 md:flex-row md:gap-y-0 [&>a.active]:text-[#a5afb9] [&>a.active]:after:w-full [&>a:hover]:text-[#838386] [&>a]:relative [&>a]:text-xl [&>a]:font-bold after:[&>a]:absolute after:[&>a]:right-0 after:[&>a]:block after:[&>a]:w-0 after:[&>a]:rounded-2xl after:[&>a]:bg-black after:[&>a]:transition-all after:[&>a]:duration-700 hover:after:[&>a]:left-0 hover:after:[&>a]:w-full md:after:[&>a]:h-[2px]",
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img src="dark-logo.svg" alt="" />
          </NavLink>
          {/* toggle btn */}
          <button
            onClick={() => setToggle((prev) => !prev)}
            className={styles.expand_navlinks_btn}
          >
            <RiCloseFill id="close" />
            <RiMenuLine id="open" />
          </button>
        </div>
        {/* navbar links */}
        <div className={styles.links_wrapper}>
          <ul className={styles.ul}>
            <NavLink to="/protfolio">Protfolio</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
}
