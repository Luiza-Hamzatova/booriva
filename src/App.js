import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import CatalogPage from "./pages/catalogPage";
import HomePage from "./pages/homePage";
import Wishlist from "./pages/Wishlist";
import CardProductPage from "./pages/cardProductPage";
import Basket from "./layout/Basket/Basket";
import NavigationBar from "./components/NavigationBar";
import SearchBar from "./components/searchBar/searchBar";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SearchResults from "./components/searchBar/SearchResults/SearchResults";

const App = () => {
  const cart = useSelector((state) => state.basket.cart);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <div>
      <Header />
      <Basket />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" element={<CardProductPage />} />
        <Route path="/searchResults" element={<SearchResults />} />
      </Routes>
      <NavigationBar />

      <Footer />
    </div>
  );
};

export default App;
