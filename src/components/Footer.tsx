import { Flex, Text, Center, Container } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Container marginBottom={10} marginTop={20}>
      <Center>
        <Text align={"center"}>
          Proudly made in 🇮🇩 by Muhammad Rasyad Caesarardhi
        </Text>
      </Center>
      <Flex gap={5} marginTop={5} justifyContent={"center"}>
        <ChakraLink href="https://github.com/mrasyadc">
          <FaGithub />
        </ChakraLink>
        <ChakraLink href="http://linkedin.com/in/muhammad-rasyad-c-50879814a">
          <FaLinkedin />
        </ChakraLink>
      </Flex>
    </Container>
  );
}

export default Footer;
