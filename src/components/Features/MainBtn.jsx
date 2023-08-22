import { TfiArrowRight } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export default function MainBtn({ text, link }) {
const classes="transition-color flex items-center justify-center gap-4 rounded-sm bg-[#191a1f] px-8 py-4 font-semibold text-white duration-300 hover:bg-[#ebeced] hover:text-black [&>svg]:hover:translate-x-4"


  return (
    <NavLink to={link} aria-label="home" className={classes}>
      <h1 className="text-sm text-white sm:text-xl">{text}</h1> <TfiArrowRight/>
    </NavLink>
  );
}
