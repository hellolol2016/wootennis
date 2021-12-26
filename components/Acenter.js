
import { Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Article({ children, ...rest }) {
  return <motion.div
    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
    initial={{ opacity: 0, y: 30 }}
    exit={{opacity:0}}
    {...rest}
  
  >
    
    <Center >{children}</Center>
    
    </motion.div>
}
