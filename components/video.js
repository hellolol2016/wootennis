import { Box, Center } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';

export default ({...rest }) => {
    const videoRef = useRef();

    useEffect(() => {
        setTimeout(()=>{
            videoRef.current.play()
        },100)
    }, []);

  return (
   <Center  zIndex={-1} overflow={"hidden"}>
    <video
            ref={videoRef}
            height="100%"
            loop
            muted
            style={{...rest}}>
               <source src={"/video/home.mp4"} type="video/mp4"></source>
      </video>
</Center>     
      )
}