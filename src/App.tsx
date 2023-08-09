import * as React from "react";
import { ChakraProvider, theme, Flex } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/home/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex flexDirection={"row"}>
      <ColorModeSwitcher />
    </Flex>
    <Home />
  </ChakraProvider>
);
