import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PurchasesPage from "./pages/PurchasesPage";
import ProductDetail from "./pages/ProductDetail";
import AppNav from "./components/AppNav";
import ProtectedRoutes from "./components/ProtectedRoutes";
function App() {
  return (
    <>
      <AppNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
