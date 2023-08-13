import { AspectRatio } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function YoutubeEmbed({ videoId }: { videoId: string }) {
  const [video, setVideo]: any = useState({});
  useEffect(() => {
    fetch(`${BACKEND_URI}/api/products/${videoId}`)
      .then((results) => results.json())
      .then((data) =>
        setVideo({
          url: extractVideoId(data.products[0].url),
          title: data.products[0].title,
        })
      )
      .catch((err) => console.error(err));
  }, []);

  return (
    <AspectRatio w="full" h="full">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${video.url}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
        allowFullScreen
        title={video.title}
      />
    </AspectRatio>
  );
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

export default YoutubeEmbed;
