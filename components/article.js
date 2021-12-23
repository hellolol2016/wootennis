import { Box } from "@chakra-ui/react";

export default function Article({ children, ...rest }) {
  return <Box {...rest}>{children}</Box>;
}
