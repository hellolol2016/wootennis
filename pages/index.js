import SlideShow from '../components/slideshow'
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "../components/article";
import Title from "../components/title";
import { Box, Center, HStack, Spacer, VStack } from "@chakra-ui/react";
import React from "react";
import pfp from "../public/profile.png";
import Img from '../components/image' 

import ACenter from '../components/Acenter' 
export default function Home() {
  return (
    <>
      <Head></Head>

      <ACenter>
        <VStack width="100%">
          <Title>title </Title>

          <HStack maxW="70%">
            <Image src={pfp} height={2000} width={2000} />
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
          </HStack>

          <Box height={"200px"}></Box>
          <HStack maxW="70%">
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

            <Image src={pfp} height={2000} width={2000} />
          </HStack>

<SlideShow />
      </VStack>
      </ACenter>
    </>
  );
}
