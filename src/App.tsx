import * as React from "react";
import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  Button,
  ButtonGroup,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Videos from "./pages/videos/Videos";
import NotFound from "./NotFound";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex minWidth="max-content" alignItems="center" gap="2" p="8">
      <Box p="2">
        <Heading size="md">Tokopedia Play</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <ColorModeSwitcher />
      </ButtonGroup>
    </Flex>
    <Router>
      <Switch>
        <Route exact path="/video/:id">
          <Videos />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ChakraProvider>
);
