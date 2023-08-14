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
import { useEffect, useState, Fragment } from "react";
import CommentForm from "./CommentForm";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function CommentLists({ videoId }: { videoId: string }) {
  const [comments, setComments]: any = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URI}/api/comments/${videoId}`)
      .then((results) => results.json())
      .then((data) => setComments(data.comments))
      .catch((err) => console.error(err));
  }, [comments]);

  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <SimpleGrid columns={1} spacing="10px" marginX={5} marginTop={[5, 5, 0]}>
      <Card
        bg={bg}
        scrollBehavior={"smooth"}
        maxH={["50dvh", "full", "50dvh"]}
        overflowY={["scroll", "scroll", "auto"]}
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {comments.length === 0 && (
              <Box>
                <Heading size="xs">no comments yet!</Heading>
              </Box>
            )}
            {comments.length > 0 &&
              comments.map((comment: any) => {
                return (
                  <Fragment key={comment._id}>
                    <Box>
                      <Heading size="xs">{comment.username}</Heading>
                      <Text fontSize="xs" fontWeight={"thin"}>
                        {new Date(comment.createdAt).toLocaleString("id")}
                      </Text>
                      <Text pt="2" fontSize="sm" textAlign="justify">
                        {comment.comment}
                      </Text>
                    </Box>
                  </Fragment>
                );
              })}
          </Stack>
        </CardBody>
      </Card>
      <Card
        bg={bg}
        scrollBehavior={"smooth"}
        maxH={["40dvh", "full", "40dvh"]}
        overflowY={["scroll", "scroll", "auto"]}
      >
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <CommentForm
              comments={comments}
              setComments={setComments}
              videoId={videoId}
            />
          </Stack>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
}

export default CommentLists;
