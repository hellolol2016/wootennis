import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import ACenter from "../components/Acenter";
import Img from "../components/image";
import Title from "../components/title";
import standing from "../public/standing.png";

const Timeslot = ({ year, children, ...rest }) => {
  return (
    <HStack {...rest}>
      <Box>
        <Text padding={"5px"} bg={"gray.400"} borderRadius={5} fontSize={"20px"} fontWeight={"500"}>{year}</Text>
      </Box>
      <Box>
        <Text fontSize={"20px"} width={"200%"}>{children}</Text>
      </Box>
    </HStack>
  );
};

export default function Page({}) {
  return (
    <ACenter>
      <VStack width={{ base: "80%", xl: "60%" }}>
        <HStack>
          <Box flex={2}>
            <Title>About</Title>
            <Text fontSize={{ base: "14px", md: "20px" }}>
              Hello and thank you for reading! My name is David Woo and I am a
              USPTA certified tennis coach with 20+ years of experience. After
              graduating from UCLA and working in finance for 10 years, I
              decided to pursue my passion of impacting people through the sport
              of tennis. I have been fortunate enough to work with a wide
              variety of students, ranging from beginners to advanced, which has
              helped me become a better communicator and coach. I am still
              learning every day, and I am grateful to anyone willing to listen
              to what I have to say :D.
              <br></br> <br></br>I believe tennis development encompasses 4
              areas: technique, athleticism, strategy, and mental. Like any
              tough task, there needs to be systems and processes in place in
              order to be successful, and tennis is no different. If you are
              interested in learning more about my methodology and philosophies,
              please do not hesitate to contact me here [hyperlink to contact
              page]!
            </Text>
          </Box>

          <Box flex={1} textAlign={"right"} alignContent={"right"}>
            <Img src={standing}></Img>
          </Box>
        </HStack>

          <Box background={"gray.300"} padding={"20px"} >
            <Title>Track Record</Title>
            <VStack  width={"60%"} alignItems={"left"}>
              <Timeslot year={"1900"}>Born in </Timeslot>
              <Timeslot year={"2000"}>Goes to UCLA</Timeslot>
              <Timeslot year={"2100"}>Gets bored doing finance, making too much money </Timeslot>
              <Timeslot year={"2200"}>Starts coaching tennis </Timeslot>

            </VStack>
          </Box>
      </VStack>
    </ACenter>
  );
}
