import { Box, SimpleGrid } from "@chakra-ui/react";
import Thumbnail from "../../components/Thumbnail";
import Header from "../../components/Header";

async function getAllVideosData() {
  const backend_uri = process.env.BACKEND_URI;
}

function Home(): JSX.Element {
  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="40px" margin={[8, 4, 10]}>
      <Box bg="tomato" borderRadius={10}>
        <Thumbnail
          title="contoh title panjang sekali ini adalah title yang panjang sekali ya"
          videoUrl={"https://www.youtube.com/watch?v=txtKTTb3U8g"}
        />
      </Box>
      <Box bg="tomato" borderRadius={10}>
        <Thumbnail
          title="contoh title panjang sekali ini adalah title yang panjang sekali ya"
          videoUrl={"https://www.youtube.com/watch?v=JpTqSzm4JOk"}
        />
      </Box>
      <Box bg="tomato" borderRadius={10}>
        <Thumbnail
          title="contoh title panjang sekali ini adalah title yang panjang sekali ya"
          videoUrl={"https://www.youtube.com/watch?v=3iM_06QeZi8"}
        />
      </Box>
      <Box bg="tomato" borderRadius={10}>
        <Thumbnail
          title="contoh title panjang sekali ini adalah title yang panjang sekali ya"
          videoUrl={"https://www.youtube.com/watch?v=txtKTTb3U8g"}
        />
      </Box>
      <Box bg="tomato" borderRadius={10}>
        <Thumbnail
          title="contoh title panjang sekali ini adalah title yang panjang sekali ya"
          videoUrl={"https://www.youtube.com/watch?v=txtKTTb3U8g"}
        />
      </Box>
    </SimpleGrid>
  );
}

export default Home;
