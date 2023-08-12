import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./components/Header";

const NotFound: React.FC = () => {
  return (
    <Box textAlign="center" mt={20}>
      <Heading as="h1" size="xl">
        404 - Not Found
      </Heading>
      <Text mt={4}>The page you're looking for does not exist.</Text>
    </Box>
  );
};

export default NotFound;
