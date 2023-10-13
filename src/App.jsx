import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import ScrollTopBtn from "./components/Features/ScrollTopBtn";
import HomePage from "./components/Pages/Home/Home";
import Navbar from "./components/Features/Navbar";
import Footer from "./components/Features/Footer";
import Loader from "./components/Features/Loader";
import { AnimatePresence, motion } from "framer-motion";

const AboutUs = lazy(() => import("./components/Pages/About us/AboutUs"));
const Protfolio = lazy(() => import("./components/Pages/Protfolio/Protfolio"));
const Contact = lazy(() => import("./components/Pages/Contact/Contact"));

function App() {
  const location = useLocation();

  // acroll to top between routes
  useEffect(() => {
    window.scroll({ top: 0, bottom: 0, behavior: "smooth" });
  }, [location.pathname]);

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
  };

  const styles =
    "mx-auto flex flex-col h-full w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[69%] 2xl:w-[60%]";

  return (
    <>
      <motion.div
        variants={vrainate}
        initial="init"
        animate="animate"
        className={styles}
      >
        <Navbar />
        <Suspense fallback={<Loader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route element={<HomePage />} path="/" />
              <Route element={<AboutUs />} path="/about-us" />
              <Route element={<Protfolio />} path="/portfolio" />
              <Route element={<Contact />} path="/contact" />
            </Routes>
          </AnimatePresence>
        </Suspense>
        <Footer />
        <ScrollTopBtn />
      </motion.div>
    </>
  );
}

export default App;
