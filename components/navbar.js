import { Box, Center, HStack, Spacer } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaYelp } from "react-icons/fa";
import Title from "../components/title";
const NavLink = ({ text, href, path }) => {
  const cur = href === path;
  return (
    <Link target="" href={href}>
      <Box
        padding={3}
        color={"gray.100"}
        shadow="sm"
        borderRadius={5}
        bg={cur ? "gray.600" : "gray.800"}
      >
        {text}
      </Box>
    </Link>
  );
};

export default function Navbar({ router }) {
  console.log(router);
  if (router.route !== "/") {
    return (
      <Box background>
        <motion.div
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
          initial={{ opacity: 0, y: 30 }}
          exit={{ opacity: 0 }}
        >
          <HStack
            fontSize={"30px"}
            justify={"flex-end"}
            className="nav-soc"
            padding={"10px"}
          >
            <Link href="https://www.yelp.com/biz/woo-tennis-lessons-irvine">
              <FaYelp />
            </Link>
            <Link href="https://www.facebook.com/dwootennis">
              <AiFillFacebook />
            </Link>
            <Link href="https://www.linkedin.com/in/davidwoo/">
              <AiFillLinkedin />
            </Link>
            <Link href="https://www.instagram.com/wootennis/?hl=en">
              <AiFillInstagram />
            </Link>
          </HStack>
          <Box width={"10%"}>
            <Image
              src={"/blogo.png"}
              width={"10%"}
              height={"10%"}
              layout="responsive"
                zIndex={0}

            />
            </Box>
          <HStack direction="row-reverse" mr={10} paddingBottom={"10px"}>
            <Spacer />
            <NavLink text="Home" href="/" path={router.route} />
            <NavLink text="About" href="/about" path={router.route} />
            <NavLink text="Work" href="/work" path={router.route} />
            <NavLink text="Location" href="/location" path={router.route} />
            <NavLink text="Team" href="/team" path={router.route} />
            <NavLink text="Contact" href="/contact" path={router.route} />
          </HStack>
        </motion.div>
      </Box>
    );
  } else {
    return <Box></Box>;
  }
}
