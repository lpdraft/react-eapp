import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "../../nav";
import { ChalFular, AlpacaWool } from "../components";
import { Home, ScarfInfo, Search } from "..";
import { CartProvider } from "../context/CartProvider";
import { Container } from "react-bootstrap";

export const ScarfRouter = () => {
  return (
    <CartProvider>
      {/* We only want to see navbar once we have logged */}
      <NavBar />

      <Container>
        <Routes>
          <Route path="/home" element={<Home />} />

          <Route path="/alpaca" element={<AlpacaWool />} />

          <Route path="/chal" element={<ChalFular />} />

          <Route path="/info/:scarfId" element={<ScarfInfo />} />

          <Route path="/search" element={<Search />} />
          {/* <Route path="/checkout" element={<CheckOut />} /> */}

          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Container>
    </CartProvider>
  );
};
