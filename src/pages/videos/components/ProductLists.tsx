import {
  Card,
  Image,
  AspectRatio,
  CardHeader,
  Heading,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BACKEND_URI = process.env.REACT_APP_BACKEND_URI;

function ProductLists({ videoId }: { videoId: string }) {
  const [products, setProducts]: any = useState([]);
  useEffect(() => {
    fetch(`${BACKEND_URI}/api/products/${videoId}`)
      .then((results) => results.json())
      .then((data) => setProducts(data.products[0].products))
      .catch((err) => console.error(err));
  }, []);

  const bg = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex
      direction={["row", "column", "column"]}
      gap={5}
      overflowX={[null, "auto", "auto"]}
      marginX={5}
      maxH={["full", "full", "80vh"]}
      overflowY={["auto", null, null]}
    >
      {products.length > 0 &&
        products.map((product: any) => {
          return (
            <Link
              key={product._id}
              to={{ pathname: `${product.productURL}` }}
              target="_blank"
            >
              <Card bg={bg}>
                <CardHeader>
                  <Heading size="md" textAlign={"justify"}>
                    {product.title}
                  </Heading>
                  <AspectRatio ratio={1}>
                    <Image src={product.imageURL} />
                  </AspectRatio>
                  <i>
                    <Text textAlign={"center"}>
                      {Intl.NumberFormat("id", {
                        currency: "IDR",
                        style: "currency",
                      }).format(product.price)}
                    </Text>
                  </i>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
    </Flex>
  );
}

export default ProductLists;
