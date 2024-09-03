import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import CatalogPage from "./pages/catalogPage";
import HomePage from "./pages/homePage";
import Wishlist from "./pages/Wishlist";
import CardProduct from "./components/cardProduct/cardProduct";
import CardProductPage from "./pages/cardProductPage";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cardProductPage" element={<CardProductPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
