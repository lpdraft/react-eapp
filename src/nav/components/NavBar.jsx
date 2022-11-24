import { NavLink, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { BsCartFill as CartIcon } from "react-icons/bs";
import { useCartContext } from "../../scarf/context/CartProvider";
import logo from "../../assets/imgs/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../auth";
import { SearchBar } from "./SearchBar";

export const NavBar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogOut = () => {
    logout();
    navigate("/login", {
      // now u cant go back to previous page
      replace: true,
    });
  };

  const { showCartSlider, cartTotalQuantity } = useCartContext();

  return (
    <Navbar
      sticky="top"
      className="navbar-dark bg-dark p-2 rounded-2"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <NavLink to="/">
        <img src={logo} alt="Logo" width="80" />
      </NavLink>
      <div>
        <NavLink
          to="/alpaca"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "1rem",
            fontWeight: "bold",
          }}
        >
          AlpacaWool
        </NavLink>

        <NavLink
          to="/chal"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "1rem",
            fontWeight: "bold",
          }}
        >
          ChalFular
        </NavLink>

        <NavLink
          to="/search"
          style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
        >
          {<SearchBar />}
        </NavLink>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <span className="d-block text-danger mx-1">
          {user ? `${user.name}` : "Guest"}
        </span>
        <button
          onClick={onLogOut}
          className="btn btn-sm btn-outline-danger text-white"
          style={{ width: "4rem", height: "2rem", position: "relative" }}
        >
          LogOut
        </button>
        <button
          onClick={showCartSlider}
          className="btn btn-sm btn-outline-success text-white mx-1 rounded-circle"
          style={{ width: "3rem", height: "3rem", position: "relative" }}
        >
          <CartIcon style={{ width: "1.2rem", height: "1.2rem" }} />
          {
            <div
              className="rounded-circle bg-success"
              style={{
                color: "white",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
                width: "1.4rem",
                height: "1.4rem",
              }}
            >
              {cartTotalQuantity}
            </div>
          }
        </button>
      </div>
    </Navbar>
  );
};
