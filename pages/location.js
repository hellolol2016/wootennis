import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ACenter from "../components/Acenter";
import Img from "../components/image";
import Title from "../components/title";
import standing from "../public/standing.png";
import { LocationVideo } from "../components/videos";
export default function Location({ }) {

  return (
    <ACenter>
      <VStack width={{ base: "100%", xl: "100%" }}>
        <Box width={"50%"} height={"10%"}>
          <LocationVideo />
        </Box>
      </VStack>
    </ACenter>
  );
}
