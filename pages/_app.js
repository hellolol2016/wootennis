import { extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
import Layout from "../components/layouts/main";
import { ChakraProvider } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

//TODO MOVE THEME TO DIFFERENT FILE THEMEJS
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.700",
        color: "gray.100",
      },
    },
  },
});


function MyApp({ Component, pageProps, router }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence initial={true} exitBeforeEnter>
            <Component {...pageProps} router={router} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
