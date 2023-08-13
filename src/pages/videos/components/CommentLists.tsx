import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardBody,
  Stack,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function CommentLists({ videoId }: { videoId: string }) {
  const [comments, setComments]: any = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URI}/api/comments/${videoId}`)
      .then((results) => results.json())
      .then((data) => setComments(data.comments))
      .catch((err) => console.error(err));
  }, []);

  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <SimpleGrid columns={1} spacing="40px" marginX={5} marginTop={[5, 5, 0]}>
      <Card
        bg={bg}
        scrollBehavior={"smooth"}
        maxH={["50vh", "full", "80vh"]}
        overflowY={["scroll", "scroll", "auto"]}
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {comments.length > 0 &&
              comments.map((comment: any) => {
                return (
                  <>
                    <Box>
                      <Heading size="xs">{comment.username}</Heading>
                      <Text fontSize="xs" fontWeight={"thin"}>
                        {new Date(comment.createdAt).toLocaleString("id")}
                      </Text>
                      <Text pt="2" fontSize="sm" textAlign="justify">
                        {comment.comment}
                      </Text>
                    </Box>
                  </>
                );
              })}
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default CommentLists;
