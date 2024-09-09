import Contact from "../../components/contact/contact";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Catalog from "./catalog/catalog";

const CatalogPage = () => {
  return (
    <div>
      <Catalog />
      <Contact />
    </div>
  );
};

export default CatalogPage;
