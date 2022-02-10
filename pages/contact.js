import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
import Link from "next/link";
import Acenter from "../components/Acenter";
export default function Contact({}) {
  return (
    <Acenter>
      <VStack width={"50vw"}>
        <form>
        <Input placeholder="Full Name" bg={'white'}></Input>
        <Input placeholder="Email" bg={"white"}></Input>
          <Textarea placeholder="Message" bg={"white"}></Textarea>
          <Button bg={"gray.400"}> Submit</Button>
</form>
      <Link passHref href="https://mail.google.com/mail/?view=cm&fs=1&to=wootennis@gmail.com">
      <Button>
        Email me!
        </Button></Link>

      </VStack>
    </Acenter>
  );
}
