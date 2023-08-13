import { Flex, Center, Square, Box, Text, SimpleGrid } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import ProductLists from "./components/ProductLists";
import CommentLists from "./components/CommentLists";
import YoutubeEmbed from "./components/YoutubeEmbed";

function Videos() {
  type IdParams = {
    id: string;
  };
  const { id } = useParams<IdParams>();
  console.log(id);
  return (
    <Flex color="white" direction={["column", "column", "row"]} maxH={"80vh"}>
      <Box flex={[null, null, 1]}>
        <ProductLists videoId={id} />
      </Box>
      <Box flex={[null, null, 2]}>
        <YoutubeEmbed videoId={id} />
      </Box>
      <Box flex={[null, null, 1]} maxH={"full"}>
        <CommentLists videoId={id} />
      </Box>
    </Flex>
  );
}

export default Videos;
