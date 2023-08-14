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
      <section id="map" className="my-32 flex justify-center">
        <iframe className="sm:w-[600px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.8066764930795!2d178.05489017683487!3d-38.699284785166235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d66790cd3c4c247%3A0xb95f65c1e03ea535!2sSponge%20Bay%20Beach!5e0!3m2!1sen!2seg!4v1687862553877!5m2!1sen!2seg"
          height="450"
          loading="lazy"
        ></iframe>
      </section>
    </motion.section>
  );
}
