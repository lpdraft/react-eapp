import { useCartContext } from "../context/CartProvider";
import { scarfsData } from "../../data/dbData";
import { Stack, Button } from "react-bootstrap";
import { currencyFormat } from "../../assets/utilities/currencyFormat";

export const CartItems = ({ id, quantity }) => {
  const { removeCart } = useCartContext();
  const item = scarfsData.find((i) => i.id === id);

  //   If you cant find item the return null
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.img}
        style={{ width: "125px", objectFit: "cover" }}
        alt={item.title}
      />

      <div className="me-auto">
        <div>
          {item.title}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.9rem" }}>
              x{quantity}
            </span>
          )}
        </div>

        <div className="text-muted" style={{ fontSize: "1.15rem" }}>
          {currencyFormat(item.price)}
        </div>

        <div style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
          {currencyFormat(item.price * quantity)}
        </div>

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => removeCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};
