import { Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../context/CartProvider";
import { CartItems } from "./CartItems";
import { currencyFormat } from "../../assets/utilities/currencyFormat";
import { scarfsData } from "../../data/dbData";

export const CartSlider = ({ toggleSliderCart }) => {
  const { hideCartSlider, cartItems } = useCartContext({});

  return (
    <Offcanvas placement="end" show={toggleSliderCart} onHide={hideCartSlider}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart Items</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItems key={item.id} {...item} />
          ))}

          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {currencyFormat(
              cartItems.reduce((total, cartItem) => {
                const item = scarfsData.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
