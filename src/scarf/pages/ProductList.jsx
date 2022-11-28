import { getCategory } from "../helpers";
import { Row } from "react-bootstrap";
import { ProductItem } from "..";
import { Footer } from "../components/Footer";
// import { useFetchApi } from "../hooks/useFetchApi";

export const ProductList = ({ category }) => {
  const alpaca = getCategory(category);

  return (
    <>
      <Row md={2} lg={3} className="g-3">
        {alpaca.map((data) => (
          // console.log(data)
          <ProductItem key={data.id} {...data} />
        ))}
      </Row>
      <Footer />
    </>
  );
};
