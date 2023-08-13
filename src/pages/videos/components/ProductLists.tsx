import { Box, SimpleGrid } from "@chakra-ui/react";
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
  return (
    <SimpleGrid columns={1} spacing="40px" margin={[8, 4, 10]}>
      {products.length > 0 &&
        products.map((product: any) => {
          return (
            <Link
              key={product._id}
              to={{ pathname: `${product.productURL}` }}
              target="_blank"
            >
              <Box bg="tomato" borderRadius={10}>
                {product.title} -- Rp. {product.price}
              </Box>
            </Link>
          );
        })}
    </SimpleGrid>
  );
}

export default ProductLists;