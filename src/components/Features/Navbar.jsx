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
    nav: "fixed top-0 left-0 w-screen bg-white z-[6969]",
    header:
      "flex items-center mx-auto border-b border-gray-400 py-4 sm:py-10  w-[80%] sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[69%] 2xl:w-[60%]",
    expand_navlinks_btn: `${
      Toggle
        ? "[&>#close]:rotate-0 [&>#close]:opacity-100"
        : "[&>#open]:rotate-0 [&>#open]:opacity-100"
    } overflow relative mr-4 md:hidden [&>svg]:absolute [&>svg]:left-1/2 [&>svg]:top-1/2 [&>svg]:-translate-x-1/2 [&>svg]:-translate-y-1/2 [&>svg]:-rotate-90 [&>svg]:text-4xl [&>svg]:opacity-0`,

    links_wrapper: `${
      Toggle ? "left-1/2 -translate-x-1/2" : "left-0 -translate-x-[200%]"
    } absolute top-full z-[69] mx-auto w-[60%] bg-white py-12 text-center transition-all duration-500 sm:w-[80%] md:static md:ml-24 md:flex md:w-auto md:translate-x-0 md:py-0 md:text-start`,

    ul: "hover: flex flex-col gap-x-8 gap-y-2 md:flex-row md:gap-y-0 [&_a.active]:text-[#a5afb9] [&_a.active]:after:w-full [&_a:hover]:text-[#838386] [&_a]:relative [&_a]:text-xl [&_a]:font-bold after:[&_a]:absolute after:[&_a]:right-0 after:[&_a]:block after:[&_a]:w-0 after:[&_a]:rounded-2xl after:[&_a]:bg-black after:[&_a]:transition-all after:[&_a]:duration-700 hover:after:[&_a]:left-0 hover:after:[&_a]:w-full md:after:[&_a]:h-[2px]",
  };

  return (
    <>
      <nav className={styles.nav}>
        <header className={styles.header}>
          <div className="justify-between flex w-full md:w-fit ">
            <NavLink to="/">
              <img src="dark-logo.svg" alt="logo" />
            </NavLink>
            {/* toggle btn */}
            <button
              aria-label="menu"
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
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </header>
      </nav>
    </>
  );
}
