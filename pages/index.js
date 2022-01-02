import SlideShow from "../components/slideshow";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "../components/article";
import Title from "../components/title";
import { Box, Center, HStack, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import pfp from "../public/woo.png";
import Img from "../components/image";
import courts from "../public/center.jpg";
import ACenter from "../components/Acenter";
import Link from "next/link";
import Navbar from "../components/navbar";
import Video from "../components/video";

const Card = ({ title, desc, img, href }) => {
  return (
    <Link href={href}>
      <Box
        width="20vw"
        position={"relative"}
        boxShadow={"-1px 4px 17px -7px #000000"}
        padding={5}
        borderRadius={5}
        bg={"gray.100"}
      >
        <Image
          src={`/${img}.png`}
          width={"100%"}
          height={"100%"}
          layout="responsive"
          objectFit="contain"
        ></Image>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </Box>
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head></Head>

      <Video />
      <Box position={"absolute"} top={10} left={"3%"}>
        <Image src={"/blogo.png"} width={"100px"} height={"100px"}></Image>
      </Box>
      <Box height={"110%"} display={"block"}>
        <Box
          position={"relative"}
          right={"30px"}
          width={"10%"}
          height={"10%"}
          top={0}
        ></Box>
      </Box>

      <ACenter w={{ base: "90%", xl: "70%" }}>
        <VStack width="100%">
          <Center width={"100vw"}  bg={"gray.400"} p={"10"}>
          <HStack spacing={"20px"} >
            <Card
              title="About"
              desc="More about me"
              img="profile"
              href="/about"
            ></Card>
            <Card
              title="Location"
              desc="Veterans Sports Park"
              img="location"
              href="/location"
            ></Card>
            <Card title="Team" desc="Our team" img="swag" href="/team"></Card>
          </HStack>
</Center>
          <Title>title </Title>

          <HStack w={{ base: "90%", xl: "70%" }}>
            <Box flex={1}>
              <Img src={pfp} />
            </Box>
            <Box flex={2}>
              <Article>
                Hello and thank you for reading! My name is David Woo and I am a
                USPTA certified tennis coach with 20+ years of experience. After
                graduating from UCLA and working in finance for 10 years, I
                decided to pursue my passion of impacting people through the
                sport of tennis. I have been fortunate enough to work with a
                wide variety of students, ranging from beginners to advanced,
                which has helped me become a better communicator and coach. I am
                still learning every day, and I am grateful to anyone willing to
                listen to what I have to say :D
              </Article>
            </Box>
          </HStack>

          <Box height={"200px"}></Box>
          <HStack w={{ base: "90%", xl: "70%" }}>
            <Box flex={2}>
              <Article>
                I believe tennis development encompasses 4 areas: technique,
                athleticism, strategy, and mental. Like any tough task, there
                needs to be systems and processes in place in order to be
                successful, and tennis is no different. If you are interested in
                learning more about my methodology and philosophies, please do
                not hesitate to <Link href="/contact"> contact me here</Link>!
              </Article>
            </Box>

            <Box flex={1}>
              <Img src={courts} />
            </Box>
          </HStack>

          <SlideShow w={{ base: "90%", xl: "70%" }} />

          <VStack maxW="70%" bg={"rgba(0,0,0,0.5)"}>
            <Title mt={10}>Mission</Title>
            <Article>
              THis is the person that the website is for , he's a pretty chill
              guy THis is the person that the website is for , he's a pretty
              chill guyTHis is the person that the website is for , he's a
              pretty chill guyTHis is the person that the website is for , he's
              a pretty chill guyTHis is the person that the website is for ,
              he's a pretty chill guyTHis is the person that the website is for
              , he's a pretty chill guyTHis is the person that the website is
              for , he's a pretty chill guyTHis is the person that the website
              is for , he's a pretty chill guyTHis is the person that the
              website is for , he's a pretty chill guyTHis is the person that
              the website is for , he's a pretty chill guyTHis is the person
              that the website is for , he's a pretty chill guy
            </Article>
          </VStack>
        </VStack>
      </ACenter>
    </>
  );
}
