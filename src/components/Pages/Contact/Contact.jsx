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
      <div className="my-32 flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d817.7826964002752!2d15.944726978412268!3d78.17240918792372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x459c4d3a4c9c22a5%3A0xca0c1ffe6d92c219!2sArctic%20Husky%20Travellers!5e0!3m2!1sen!2seg!4v1687775241316!5m2!1sen!2seg"
          width="600"
          height="450"
          loading="lazy"
        ></iframe>
      </div>
    </motion.section>
  );
}
