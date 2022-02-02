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
import {HomeVideo} from "../components/videos";

const Card = ({ title, desc, img, href }) => {
  return (
    <Link href={href} passHref>
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
          priority
          alt={title}
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

      <HomeVideo />
      <Box position={"absolute"} top={10} left={"3%"}>
        <Image
          src={"/blogo.png"}
          width={"100px"}
          height={"100px"}
          priority
          alt="logo"
        ></Image>
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
          <Center width={"100%"} bg={"gray.400"} p={"10"}>
            <HStack spacing={"20px"}>
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
          <Center>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/HcT_iOc8Ym0?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Center>
        </VStack>
      </ACenter>
    </>
  );
}
