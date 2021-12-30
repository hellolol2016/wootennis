import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ACenter from "../components/Acenter";
import Img from "../components/image";
import Title from "../components/title";
import standing from "../public/standing.png";
export default function Location({ }) {

  return (
    <ACenter>
      <VStack width={{ base: "100%", xl: "100%" }}>
        <Box width={"100%"} height={"30%"}>
          <Text  color={"white"} fontWeight={"1000"} fontSize={"15vw"} position={"absolute"} zIndex={1} lineHeight={"0.8"}>COME <br></br>LEARN THE PLAYBOOK </Text>
          <Image src={"/video/fly.gif"} width={"90vw"} height={"60%"} layout="responsive" />
        </Box>
      </VStack>
    </ACenter>
  );
}
