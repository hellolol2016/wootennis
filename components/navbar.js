import { Box, HStack, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const NavLink = ({ text, href }) => {
  return (
    <Link href={href}>
      <Box padding={3} color={"gray.100" }shadow="sm" borderRadius={5} bg={"gray.800"}>
        {text}
      </Box>
    </Link>
  );
};

export default function Page({}) {
  return (
    <HStack direction="row-reverse" pt={10}>
      <Spacer />
      <NavLink text="Home" href="/" />
      <NavLink text="About" href="/about" />
      <NavLink text="History" href="/history" />
      <NavLink text="VSP" href="/vsp" />
    </HStack>
  );
}
