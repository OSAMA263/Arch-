import { NavLink } from "react-router-dom";
import MainBtn from "./MainBtn";

export default function Footer() {
  const styles = {
    footer: "relative w-full flex flex-col justify-center mx-auto md:flex-row ",
    ul: "relative flex mx-auto w-[60vw] md:w-full flex-col items-center gap-x-8 gap-y-4 bg-[#c5cae0c4] md:px-8 sm:py-20 md:pt-auto pt-20 md:flex-row md:gap-y-0 md:py-0 [&_a.active]:text-[#a5afb9] [&_a:hover]:text-[#838386] [&_a]:text-xl [&_a]:font-bold",
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className="mx-auto flex w-fit justify-center bg-black px-6 py-8 sm:px-12 md:py-14">
          <NavLink to="/">
            <img src="light-logo.svg" className="text-white" alt="logo" />
          </NavLink>
        </div>
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
          <li>
            <div className={styles.Portfolio}>
              <MainBtn
                name="home0"
                text="See Our Portfolio"
                link="/portfolio"
              />
            </div>
          </li>
        </ul>
      </footer>
    </>
  );
}
