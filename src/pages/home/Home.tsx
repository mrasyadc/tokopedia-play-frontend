import { Box, SimpleGrid } from "@chakra-ui/react";
import Thumbnail from "../../components/Thumbnail";

async function getAllVideosData() {
  const backend_uri = process.env.BACKEND_URI;
}

function Home(): JSX.Element {
  return (
    <SimpleGrid columns={[1, 3, 4]} spacing="40px" margin={[1, 4, 10]}>
      <Box bg="tomato" height="480px">
        <Thumbnail videoUrl={"https://a.com"} />
      </Box>
      <Box bg="tomato" height="480px"></Box>
      <Box bg="tomato" height="480px"></Box>
      <Box bg="tomato" height="480px"></Box>
      <Box bg="tomato" height="480px"></Box>
    </SimpleGrid>
  );
}

export default Home;
