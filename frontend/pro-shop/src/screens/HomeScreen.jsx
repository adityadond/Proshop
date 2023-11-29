import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";

function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const productss = response.data;
        console.log(productss);
        setProducts(productss);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Handle error: setProducts([]) or display an error message
      }
    };

    fetchProducts();
  }, []);

  console.log(products, "products");
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
