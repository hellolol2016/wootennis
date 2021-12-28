import SlideShow from "../components/slideshow";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "../components/article";
import Title from "../components/title";
import { Box, Center, HStack, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import pfp from "../public/woo.png";
import Img from "../components/image";
import courts from "../public/center.jpg";
import ACenter from "../components/Acenter";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head></Head>

      <ACenter w={{ base: "90%", xl: "70%" }}>
        <VStack width="100%">
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
                not hesitate to <Link href="/contact">  contact me here</Link>!
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
