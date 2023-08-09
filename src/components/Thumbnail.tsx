import { Box, Image } from "@chakra-ui/react";

function Thumbnail({ videoUrl }: { videoUrl: string }) {
  return (
    <>
      <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
    </>
  );
}

function getRandomThumbnail() {
  // https://img.youtube.com/vi/<insert-youtube-video-id-here>/0.jpg
  // https://img.youtube.com/vi/<insert-youtube-video-id-here>/1.jpg
  // https://img.youtube.com/vi/<insert-youtube-video-id-here>/2.jpg
  // https://img.youtube.com/vi/<insert-youtube-video-id-here>/3.jpg
}

export default Thumbnail;
