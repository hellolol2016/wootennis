import SlideShow from "../components/slideshow";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Article from "../components/article";
import Title from "../components/title";
import { Box, Button, Center, HStack, Spacer, Stack, Text, VStack } from "@chakra-ui/react";
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
    <Link href={href} passHref >
      <Box
        width={{base:"80vw", xl:"20vw"}}
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

const NavButton = ({name, href,...rest})=>{
  return (<Link passHref href={href} flex={2} ><Button {...rest}>
    {name}
  </Button></Link>)
}

export default function Home({router}) {
  return (
    <>
      <Head>
            <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
    <title>WooTennis</title>
      </Head>

      <HStack position={"sticky"} zIndex={10} mr="20px" top={"95%"} height="0">
        <Spacer  width={"70vw"}/>
        <NavButton name="Home" href="/"/> 
        <NavButton name="About" href="/about"/> 
        <NavButton name="Location" href="/location"/> 
        </HStack> 
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
            <Stack spacing={"20px"} flexDir={{base:"column",xl:"row"}}>
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
            </Stack>
          </Center>
        </VStack>
      </ACenter>
    </>
  );
}
