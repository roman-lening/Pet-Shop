import "./App.css";
import Header from "./components/Header";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import MainPage from "./pages/mainPage";
import ErrorPage from "./pages/errorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
