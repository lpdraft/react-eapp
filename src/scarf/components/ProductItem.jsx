import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { currencyFormat } from "../../assets/utilities/currencyFormat";
import { useCartContext } from "../context/CartProvider";

export const ProductItem = ({ id, img, title, price, category }) => {
  const { getQuantity, increaseQuantity, decreaseQuantity, removeCart } =
    useCartContext();

  const quantity = getQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        src={img}
        height="400px"
        alt={title}
        className="img-thumbnail mt-2"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex flex-column align-items-center justify-content-center">
          <span className="fs-2 text-center">{title}</span>
          <span className="my-2 text-success">{currencyFormat(price)}</span>
        </Card.Title>

        <span className="text-muted my-1  text-center">{category}</span>

        <div className="mt-auto">
          {quantity === 0 ? (
            <div className="d-flex justify-content-around">
              <Button onClick={() => increaseQuantity(id)}>Add to Cart</Button>
              <Link to={`/info/${id}`} className="btn btn-outline-info">
                View
              </Link>
            </div>
          ) : (
            <div
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ gap: "0.5rem" }}
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ gap: "0.5rem" }}
              >
                <Button
                  variant="secondary"
                  className="fw-bold btn-sm"
                  onClick={() => decreaseQuantity(id)}
                >
                  -
                </Button>

                <div className="fs-3">
                  <span className="fs-3">{quantity}</span>
                </div>

                <Button
                  variant="secondary"
                  className="fw-bold btn-sm"
                  onClick={() => increaseQuantity(id)}
                >
                  +
                </Button>
              </div>

              <Button
                variant="danger"
                className="fw-bold btn-sm"
                onClick={() => removeCart(id)}
              >
                Clear
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};
