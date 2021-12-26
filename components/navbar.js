import { Box, HStack, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const NavLink = ({ text, href , path}) => {
  const cur  = href===path 
  return (
    <Link target="" href={href}>
      <Box padding={3} color={"gray.100" }shadow="sm" borderRadius={5} bg={cur?"gray.600":"gray.800"}>
        {text}
      </Box>
    </Link>
  );
};

export default function Navbar({router}) {
  return (
    <motion.div
    
    animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
    initial={{ opacity: 0, y: 30 }}
    exit={{opacity:0}}
    
    >
    <HStack direction="row-reverse" pt={10} mr={10} paddingBottom={"10px"}>
      <Spacer />
      <NavLink text="Home" href="/" path={router.route}/>
      <NavLink text="About" href="/about" 
      path={router.route}
      />
      <NavLink text="History" href="/history"          path={router.route}/>
      <NavLink text="VSP" href="/vsp"       path={router.route}/>
      </HStack>
      

</motion.div>
  );
}
