import { Flex, Box } from "@chakra-ui/react";

import ProductLists from "./components/ProductLists";
import CommentLists from "./components/CommentLists";
import YoutubeEmbed from "./components/YoutubeEmbed";
import { useParams } from "react-router-dom";

function Videos() {
  type IdParams = {
    id: string;
  };
  const { id } = useParams<IdParams>();
  console.log(id);
  return (
    <Flex color="white" direction={["column", "column", "row"]}>
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
