import CardProductMore from "./cardProductsMore/cardProductMore";
import NewCatalog from "./newCatalog/newCatalog";
import DeliveryTerms from "./deliveryTerms/deliveryTerms";
import Contact from "../../components/Contact/contact";

const CardProductPage = () => {
  return (
    <div>
      <CardProductMore />
      <DeliveryTerms />
      <NewCatalog />
      <Contact />
    </div>
  );
};

export default CardProductPage;
