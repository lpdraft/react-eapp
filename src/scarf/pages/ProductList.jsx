import { useEffect, useMemo, useState } from "react";
import { AsyncFetch } from "../api";
import { getCategory } from "../helpers";
import { Row } from "react-bootstrap";
import { ProductItem } from "..";
// import { useFetchApi } from "../hooks/useFetchApi";

export const ProductList = ({ category }) => {
  // const [products, setProducts] = useState();

  // const url = "http://localhost:4000/scarfs";

  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await AsyncFetch(url);
  //     setProducts(data);
  //   };
  //   getData();
  // }, []);

  const alpaca = getCategory(category);

  return (
    <>
      <h6>ProductList</h6>
      <Row md={2} lg={3} className="g-3">
        {alpaca.map((data) => (
          // console.log(data)
          <ProductItem key={data.id} {...data} />
        ))}
      </Row>
    </>
  );
};
