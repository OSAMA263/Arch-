import { motion } from "framer-motion";

export default function Protfolio() {
  
  const styles = {
    section:
      "mx-auto my-40 grid w-[90%] gap-4 overflow-x-hidden sm:w-auto sm:grid-cols-2 md:grid-cols-3 lg:gap-6",
    card: "relative h-[37vh] overflow-hidden md:h-full [&>img]:hover:scale-110",
    img: "h-full w-full cursor-pointer object-cover brightness-[.8] transition-all duration-500",
  };

  return (
    <motion.section
      variants={main_variants}
      initial="init"
      animate="animate"
      exit="exit"
      className={styles.section}
    >
      {projects.map(({ img, place, date }, i) => (
        <motion.div
          variants={cards_variants}
          initial="init"
          animate="animate"
          transition={{ delay: 0.4 * i, duration: 0.8 }}
          key={i}
          className={styles.card}
        >
          <img loading="lazy" src={img} alt="" className={styles.img} />
          {/* info */}
          <div className="absolute bottom-4 left-4">
            <h1 className="text-xl font-bold text-white">{place}</h1>
            <p className="text-lg text-white">{date}</p>
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

const projects = [
  {
    img: "protfolio/image-eebox.jpg",
    place: "Eebox Building",
    date: "August 2017",
  },
  {
    img: "protfolio/image-federal.jpg",

    place: "Federal II Tower",
    date: "March 2017",
  },
  {
    img: "protfolio/image-hypers.jpg",
    place: "Hypers",
    date: "January 2012",
  },
  {
    img: "protfolio/image-netcry.jpg",
    place: "Netcry Tower",
    date: "August 2012",
  },
  {
    img: "protfolio/image-del-sol.jpg",
    place: "Project Del So",
    date: "January 2016",
  },
  {
    img: "protfolio/image-paramour.jpg",

    place: "Project Paramour",
    date: "February 2008",
  },
  {
    img: "protfolio/image-prototype.jpg",

    place: "Le Prototype",
    date: "October 2015",
  },
  {
    img: "protfolio/image-seraph.jpg",

    place: "Seraph Station",
    date: "September 2019",
  },
  {
    img: "protfolio/image-sxiv.jpg",

    place: "SXIV Tower",
    date: "March 2011",
  },
  {
    img: "protfolio/image-trinity.jpg",

    place: "Trinity Bank Tower",
    date: "September 2010",
  },
  {
    img: "protfolio/image-228b.jpg",

    place: "228B Tower",
    date: "April 2015",
  },

  {
    img: "protfolio/image-edelweiss.jpg",

    place: "Grand Edelweiss Hotel",
    date: "December 2013",
  },
];

const main_variants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
  },
};

const cards_variants = {
  init: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};
