import { Button, Input, Textarea, VStack } from "@chakra-ui/react";
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
      </VStack>
    </Acenter>
  );
}
