import { Center, Text } from "@chakra-ui/react";

export default function Title({ children, ...rest }) {
  return (
    <Center {...rest}>
      <Text fontSize="6xl">{children}</Text>
    </Center>
  );
}
