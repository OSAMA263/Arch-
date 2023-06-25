import About_Contact_Section from "../../Features/About_Contact_Section";
import ContactDetails from "./sections/ContactDetails";
import { motion } from "framer-motion";

export default function Contact() {
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
    exit: {
      opacity: 0,
    },
  };

  return (
    <motion.section
      variants={vrainate}
      initial="init"
      animate="animate"
      exit="exit"
      className="mx-auto"
    >
      <About_Contact_Section
        img="contact/hero-img.jpg"
        header="Contact"
        title="Tell us about your project"
        text="We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!"
      />
      <ContactDetails />
    </motion.section>
  );
}
