import { useState, useContext, useEffect } from "react";
import { CartSlider } from "../components/CartSlider";
import { CartContext } from "./CartContext";

// export it as a react hook
export const useCartContext = () => {
  return useContext(CartContext);
};

// define global context methods
export function CartProvider({ children }) {
  const [isShown, setCartSlider] = useState(false);

  const showCartSlider = () => setCartSlider(true);
  const hideCartSlider = () => setCartSlider(false);

  const cart = JSON.parse(localStorage.getItem("myCart")) ?? [];
  const [cartItems, setCartItems] = useState(cart);

  //   handeling cart items in localStorage

  //   Every time we add items into cart, it will set it in localStorage
  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cartItems));
  }, [cartItems]);

  //   Sum the cart items
  const cartTotalQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  // Storing ProductObj [id + config quantity in useState()]
  function getQuantity(id) {
    // if items id match, then give quantity, otherwise, give default 0 quantity
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id) {
    // currItem -> whatever list of product you click on
    setCartItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        // if you find the id, that means the item exists, if not then add to the arr
        // And, add quantity of 1 to that id found/new inserted item
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            // Now to that item give quantity of +1
            return { ...item, quantity: item.quantity + 1 };
          } else {
            // If not just return item as it is
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id) {
    setCartItems((currItem) => {
      // if the quantity is igual to 1 then we need to find that id and decrease the quantity
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        // new list filtering that item
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeCart(id) {
    setCartItems((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }
  return (
    <CartContext.Provider
      value={{
        getQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeCart,
        cartItems,
        isShown,
        showCartSlider,
        hideCartSlider,
        cartTotalQuantity,
      }}
    >
      {children}
      <CartSlider toggleSliderCart={isShown} />
    </CartContext.Provider>
  );
}
