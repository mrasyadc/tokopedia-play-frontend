import { AspectRatio, Image, Text } from "@chakra-ui/react";

function Thumbnail({ videoUrl, title }: { videoUrl: string; title: string }) {
  return (
    <div>
      <AspectRatio ratio={9 / 16}>
        <Image src={getYoutubeThumbnail(videoUrl)} alt={title} />
      </AspectRatio>

      <Text>{title}</Text>
    </div>
  );
}

function getYoutubeThumbnail(videoUrl: string): string {
  const videoId = extractVideoId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  return thumbnailUrl;
}

function extractVideoId(url: string): string | null {
  let regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
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
