import { Routes, Route } from "react-router-dom";
// import { PrivateRouter, PublicRouter } from "../routers";
import { Login } from "../auth";
import { ScarfRouter } from "../scarf";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        {/* Login Router-Logic */}
        <Route
          path="/login"
          element={
            <PublicRouter>
              <Login path="/*" element={<Login />} />
            </PublicRouter>
          }
        />

        {/* Scarf Router-Logic */}
        <Route
          path="/*"
          element={
            <PrivateRouter>
              <ScarfRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </>
  );
};
