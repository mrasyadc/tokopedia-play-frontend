import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Videos from "./pages/videos/Videos";
import NotFound from "./NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/video/:id" component={Videos}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
    <Footer />
  </ChakraProvider>
);
