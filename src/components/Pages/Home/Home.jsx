import Carousel from "./sections/Carousel";
import Welcome from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import FeaturedSection from "./sections/Featured";
import { motion } from "framer-motion";

export default function Home() {
  const indicators = ["01", "02", "03", "04"];

  const info = [
    {
      img: "home/carousel-img1.jpg",
      header: "Project Paramour",
      text: "Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
    },
    {
      img: "home/carousel-img2.jpg",
      header: "Seraph Station",
      text: "The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
    },
    {
      img: "home/carousel-img3.jpg",
      header: "Federal II Tower",
      text: "A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
    },
    {
      img: "home/carousel-img4.jpg",
      header: "Trinity Bank Tower",
      text: "Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
    },
  ];

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
    <>
      <motion.section
        variants={vrainate}
        initial="init"
        animate="animate"
        exit="exit"
        className="mx-auto"
      >
        <Carousel indicators={indicators} info={info} />
        <Welcome />
        <AboutSection />
        <FeaturedSection />
      </motion.section>
    </>
  );
}
