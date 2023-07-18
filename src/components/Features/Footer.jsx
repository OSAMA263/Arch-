import { NavLink } from "react-router-dom";
import MainBtn from "./MainBtn";

export default function Footer() {
  const styles = {
    footer: "relative flex flex-col justify-center mx-auto md:flex-row",

    ul: "relative flex w-full flex-col items-center gap-x-8 gap-y-4 bg-[#c5cae0c4] px-8 py-20 md:flex-row md:gap-y-0 md:py-0 [&>a.active]:text-[#a5afb9] [&>a:hover]:text-[#838386] [&>a]:text-xl [&>a]:font-bold",
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className="px-12 mx-auto bg-black w-fit py-14">
          <NavLink to="/">
            <img src="light-logo.svg" className="text-white" alt="" />
          </NavLink>
        </div>
        <ul className={styles.ul}>
          <NavLink to="/protfolio">Protfolio</NavLink>
          <NavLink to="/about-us">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <div className="absolute bottom-0 translate-x-1/2 translate-y-1/2 right-1/2 md:bottom-1/2 md:right-0 md:translate-y-1/2">
            <MainBtn text="See Our Protfolio" link="/protfolio" />
          </div>
        </ul>
      </footer>
    </>
  );
}
