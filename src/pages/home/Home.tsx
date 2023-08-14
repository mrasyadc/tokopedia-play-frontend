import { Box, SimpleGrid } from "@chakra-ui/react";
import Thumbnail from "./components/Thumbnail";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function Home(): JSX.Element {
  const [videos, setVideos]: any = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URI}/api`)
      .then((results) => results.json())
      .then((data) => setVideos(data.videos))
      .catch((err) => console.error(err));
  }, []);

  return (
    <SimpleGrid columns={[1, 2, 4]} spacing="40px" margin={[8, 4, 10]}>
      {videos.length > 0 &&
        videos.map((video: any) => {
          return (
            <Link key={video._id} to={`video/${video._id}`}>
              <Box bg="tomato" borderRadius={10}>
                <Thumbnail title={video.title} videoUrl={video.url} />
              </Box>
            </Link>
          );
        })}
    </SimpleGrid>
  );
}

export default Home;
