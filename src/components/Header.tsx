import {
  Flex,
  Heading,
  Spacer,
  ButtonGroup,
  Box,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import { Link as RouterLink } from "react-router-dom";

function Header() {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" p="8">
      <Box p="2">
        <ChakraLink as={RouterLink} to="/">
          <Heading size="md">Tokopedia Play</Heading>
        </ChakraLink>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <ColorModeSwitcher />
      </ButtonGroup>
    </Flex>
  );
}
export default Header;
