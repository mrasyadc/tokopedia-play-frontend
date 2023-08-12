import { AspectRatio, Image, Text, Flex } from "@chakra-ui/react";
import { Fragment } from "react";

function Thumbnail({ videoUrl, title }: { videoUrl: string; title: string }) {
  return (
    <AspectRatio ratio={9 / 16}>
      <Flex position="relative">
        <Image
          border={0}
          borderRadius={10}
          src={getYoutubeThumbnail(videoUrl)}
          alt="Image"
          objectFit="cover"
          height={"full"}
        />
        <Text
          border={0}
          borderRadius={10}
          backgroundImage={
            "linear-gradient(rgba(25, 27, 28, 0) 0%, rgba(25, 27, 28, 0.8) 100%)"
          }
          position="absolute"
          bottom="0"
          zIndex="1"
          width="100%"
          textAlign="justify"
          padding={3}
          color={"white"}
          fontWeight={"medium"}
        >
          {title}
        </Text>
      </Flex>
    </AspectRatio>
  );
}

function getYoutubeThumbnail(videoUrl: string): string {
  const videoId = extractVideoId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return thumbnailUrl;
}

function extractVideoId(url: string): string | null {
  let regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  let match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return null;
    //error
  }
}

// function getRandomThumbhnail(): string {
//   const number = getRandomNumber();
//   if (number === 4) {
//     return "hqdefault";
//   } else {
//     return `hq${number}`;
//   }
// }

// function getRandomNumber(): number {
//   return Math.floor(Math.random() * 4) + 1;
// }

export default Thumbnail;
