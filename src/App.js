import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import CatalogPage from "./pages/catalogPage";
import HomePage from "./pages/homePage";
import Wishlist from "./pages/Wishlist";
import CardProductPage from "./pages/cardProductPage";
import Basket from "./layout/Basket/Basket";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <div>
      <Header />
      <Basket />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<CardProductPage />} />
      </Routes>
      <NavigationBar />
      <Footer />
    </div>
  );
};

export default App;
