import { TfiArrowRight } from "react-icons/tfi";
import { NavLink } from "react-router-dom";

export default function MainBtn({ text="", link, name }) {
  const classes =
    "transition-color flex items-center justify-center gap-4 rounded-sm bg-[#191a1f] px-8 py-4 font-semibold text-white duration-300 hover:bg-[#bbbbbb] [&>h1]:hover:text-black [&>svg]:hover:translate-x-4";

  return (
    <NavLink to={link} aria-label={name} className={classes} >
      <h1 className="flex items-center justify-center text-sm text-white gap-x-4 sm:text-xl">
        {text} <TfiArrowRight />
      </h1>
    </NavLink>
  );
}
