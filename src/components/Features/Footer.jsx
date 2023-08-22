import { NavLink } from "react-router-dom";
import MainBtn from "./MainBtn";

export default function Footer() {
  const styles = {
    footer: "relative flex flex-col justify-center mx-auto md:flex-row ",

    ul: " relative flex w-[60vw] md:w-full flex-col items-center gap-x-8 gap-y-4 bg-[#c5cae0c4] md:px-8 py-20 md:flex-row md:gap-y-0 md:py-0 [&_a.active]:text-[#a5afb9] [&_a:hover]:text-[#838386] [&_a]:text-xl [&_a]:font-bold",
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className="flex justify-center px-6 py-8 mx-auto bg-black w-fit sm:px-12 md:py-14">
          <NavLink to="/">
            <img src="light-logo.svg" className="text-white" alt="logo" />
          </NavLink>
        </div>
        <ul className={styles.ul}>
          <li>
            <NavLink to="/protfolio">Protfolio</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <div className="absolute bottom-0 right-1/2 w-[80%] translate-x-1/2 md:-right-1/2 md:bottom-1/2 md:w-auto md:translate-x-0 md:translate-y-1/2">
              <MainBtn name="home0" text="See Our Protfolio" link="/protfolio" />
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
}
