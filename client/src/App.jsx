import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import MainPage from "./pages/mainPage";
import ErrorPage from "./pages/errorPage";
import { Routes, Route } from "react-router-dom";
import CategoriesPage from "./pages/categoriesPage";
import SalesPage from "./pages/salesPage";
import ProductsPage from "./pages/productsPage";

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
