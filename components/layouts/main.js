import Navbar from "../navbar";
import Footer from "../footer";
import { motion } from "framer-motion";
export default function Layout({ children, router }) {


const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

  return (
    <>
      <Navbar router={router} />
      <motion.div          //TODO MAKE THESE FREAKING THINGS WORK WHEN CHANGIN PAGES
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.4, type: "easeInOut" }}
        style={{ position: "relative" }}
      >
        {children}
      </motion.div>
      <Footer />
    </>
  );
}
