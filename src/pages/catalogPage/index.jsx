import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import Catalog from "./catalog/catalog";
import Contact from "../../components/contact/contact";

const CatalogPage = () => {
  return (
    <div>
      <Catalog />
      <Contact />
    </div>
  );
};

export default CatalogPage;
