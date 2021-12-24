import { Box } from "@chakra-ui/react";

export default function Article({ children, ...rest }) {
  return <Box padding={10}{...rest}>{children}</Box>;
}
