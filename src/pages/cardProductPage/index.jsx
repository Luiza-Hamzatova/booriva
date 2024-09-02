// nth-child(-n + 3 of .noted)
import Contact from "../../components/Contact/contact";
import CardProductMore from "./cardProductsMore/cardProductMore";
import NewCatalog from "./newCatalog/newCatalog";
import DeliveryTerms from "./deliveryTerms/deliveryTerms";

const cardProductPage = () => {
  return (
    <div>
      <CardProductMore />
      <DeliveryTerms />
      <NewCatalog />
      <Contact />
    </div>
  );
};

export default cardProductPage;
