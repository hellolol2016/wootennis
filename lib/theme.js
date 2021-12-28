import { extendTheme } from "@chakra-ui/react"; 

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#edf2f4",
        color: "#2b2d42",
      },

      ".footer svg": {
        margin:"20px"
      }
    },
  },
});
export default theme