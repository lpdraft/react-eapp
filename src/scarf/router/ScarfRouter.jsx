import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar, Error } from "../../nav";
import { ChalFular, AlpacaWool } from "../components";
import { Home, ScarfInfo, Search, Checkout } from "../";
import { CartProvider } from "../context/CartProvider";
import { Container } from "react-bootstrap";

export const ScarfRouter = () => {
  return (
    <CartProvider>
      <NavBar />

      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/alpaca" element={<AlpacaWool />} />

          <Route path="/chal" element={<ChalFular />} />

          <Route path="/info/:scarfId" element={<ScarfInfo />} />

          <Route path="/search" element={<Search />} />

          <Route path="/error" element={<Error />} />

          <Route path="/check" element={<Checkout />} />

          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </Container>
    </CartProvider>
  );
};
