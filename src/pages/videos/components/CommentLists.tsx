import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Card,
  CardHeader,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function CommentLists({ videoId }: { videoId: string }) {
  const [comments, setComments]: any = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URI}/api/comments/${videoId}`)
      .then((results) => results.json())
      .then((data) => setComments(data.comments))
      .catch((err) => console.error(err));
  }, []);
  return (
    <SimpleGrid columns={1} spacing="40px" marginX={5} marginTop={[5, 5, 0]}>
      <Card
        shadow={"dark-lg"}
        scrollBehavior={"smooth"}
        maxH={"90vh"}
        overflowY={"auto"}
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {comments.length > 0 &&
              comments.map((comment: any) => {
                return (
                  <>
                    <Box>
                      <Heading size="xs">{comment.username}</Heading>
                      <Text pt="2" fontSize="sm">
                        {comment.comment}
                      </Text>
                    </Box>
                  </>
                );
              })}
            {comments.length > 0 &&
              comments.map((comment: any) => {
                return (
                  <>
                    <Box>
                      <Heading size="xs">{comment.username}</Heading>
                      <Text pt="2" fontSize="sm">
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
