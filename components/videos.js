import { Box, Center } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const Vid = styled.video`
  width: auto;
  height: 100%;
  @media (min-width: 1900px) {
    height: 100%;
    width: 100%;
  }
`;

export const HomeVideo = ({ ...rest }) => {
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 100);
  }, []);

  return (
    <Center zIndex={-1} overflow={"hidden"} bg={"black"}>
      <Vid maxWidth={"none"} ref={videoRef} loop muted style={{ ...rest }}>
        <source src={"/video/home.mp4"} type="video/mp4"></source>
      </Vid>
    </Center>
  );
};
export const LocationVideo = ({ ...rest }) => {
    const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      videoRef.current.play();
    }, 100);
  }, []);
  return (
    <Center zIndex={-1} overflow={"hidden"} bg={"black"}>
      <Vid maxWidth={"none"} ref={videoRef} loop muted style={{ ...rest }}>
        <source src={"/video/location.mp4"} type="video/mp4"></source>
      </Vid>
    </Center>
  );
}