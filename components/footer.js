import { Box, Center, HStack } from "@chakra-ui/react";
import Link from "next/link";
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';
import { BsMailbox, BsTwitter } from 'react-icons/bs';
import { FaYelp} from 'react-icons/fa';
export default function Page({ }) {
  return (
    <Center fontSize={"60px"} spacing={"10px"} className="footer">
     
      
      <Link href="https://www.yelp.com/biz/woo-tennis-lessons-irvine" >
        <FaYelp />
      </Link>
<Link href="https://www.facebook.com/dwootennis">
       <AiFillFacebook /> 
      </Link>
      <Link href="https://www.linkedin.com/in/davidwoo/">
       <AiFillLinkedin /> 
      </Link>
<Link href="https://www.instagram.com/wootennis/?hl=en">
        <AiFillInstagram />
</Link>
    </Center> 
  
  
    )
}