import { MainRouter } from "./routers";
import { AuthProvider } from "./auth";

export const ScarfApp = () => {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
};
