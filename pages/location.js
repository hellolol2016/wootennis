import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ACenter from "../components/Acenter";
import Img from "../components/image";
import Title from "../components/title";
import standing from "../public/standing.png";
import { LocationVideo } from "../components/videos";
export default function Location({}) {
  return (
    <ACenter>
      <VStack width={{ base: "100%", xl: "100%" }}>
        <Box width={"70%"} height={"10%"}>
          <LocationVideo />
        </Box>
        <Center>
          <HStack width={"80%"}>
            <Box>
              <Text fontSize={20} fontWeight={500}>
                Veterans Sports Park
              </Text>
              <iframe
                width="520"
                height="363"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=363&amp;hl=en&amp;q=1645%20Valencia%20Ave%20Irvine+(Veterans%20Sports%20Park)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
            </Box>
            <Center>
              <Text width={"40%"}>
                Wow isnt veterans sports park such a cool place theres all sorts
                of things you can do from tennis to pickleball.{" "}
              </Text>
            </Center>
          </HStack>
        </Center>
      </VStack>
    </ACenter>
  );
}
