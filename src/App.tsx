import * as React from "react";
import {
  ChakraProvider,
  theme,
  Flex,
  Box,
  ButtonGroup,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink as RouterLink,
} from "react-router-dom";
import Videos from "./pages/videos/Videos";
import NotFound from "./NotFound";
import Footer from "./components/Footer";

import Header from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <RouterLink to="/video/1">A</RouterLink>
      <RouterLink to="/">A</RouterLink>
      <Switch>
        <Route exact path="/video/:id" component={Videos}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </ChakraProvider>
);
