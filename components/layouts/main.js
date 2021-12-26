import Navbar from "../navbar";
import Footer from "../footer";
import { motion } from "framer-motion";
export default function Layout({ children, router }) {



  return (
    <>
      <motion.div          //TODO MAKE THESE FREAKING THINGS WORK WHEN CHANGIN PAGES
    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
    initial={{ opacity: 0, y: 30 }}
    exit={{opacity:0}}
      >

      <Navbar router={router} />
        {children}
      </motion.div>
      <Footer />
    </>
  );
}
