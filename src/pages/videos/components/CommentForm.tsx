import { useState } from "react";
import {
  Box,
  Input,
  Textarea,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { METHODS } from "http";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function CommentForm({
  comments,
  setComments,
  videoId,
}: {
  comments: any;
  setComments: any;
  videoId: any;
}) {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handleCommentChange = (event: any) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("username:", username);
    console.log("comment:", comment);
    // You can perform further actions like sending the data to a server here

    const data = {
      username: username,
      comment: comment,
      videoId: videoId,
    };

    try {
      const response = await fetch(`${BACKEND_URI}/api/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("Response:", responseData);
        // Handle successful response data here
      } else {
        console.error("Error:", response.statusText);
        // Handle response error here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle fetch error here
    }

    setComments([]);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
          fontSize={"xs"}
          fontWeight={"bold"}
          mb={2}
          padding={2}
          focusBorderColor={useColorModeValue("gray", "white")}
          required
        />
        <Textarea
          placeholder="comment"
          value={comment}
          onChange={handleCommentChange}
          resize="vertical"
          padding={2}
          mb={4}
          fontSize={"sm"}
          focusBorderColor={useColorModeValue("gray", "white")}
          required
        />
        <Button
          fontSize={"sm"}
          type="submit"
          variant={"outline"}
          colorScheme="gray"
        >
          submit
        </Button>
      </form>
    </Box>
  );
}

export default CommentForm;
