import About_Contact_Section from "../../Features/About_Contact_Section";
import Heritage from "./sections/Heritage";
import Leaders from "./sections/Leaders";
import { motion } from "framer-motion";

export default function AboutUs() {
  const vrainate = {
    init: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1,
      },
    },
    exit:{
      opacity:0
    }
  };

  return (
    <>
      <motion.section
        variants={vrainate}
        initial="init"
        animate="animate"
        exit="exit"
        className="mx-auto"
      >
        <About_Contact_Section
          img="about/hero-img.jpg"
          header="About"
          text="Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings."
          title="Your team of professionals"
        />
        <Heritage />
        <Leaders />
      </motion.section>
    </>
  );
}
