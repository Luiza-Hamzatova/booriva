import NewColection from "./newColection2/newColection2";
import NewCatalog from "./newCatalog2/newCatalog2";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Delivery from "../../components/delivery/delivery";
import Baner from "./baner2/baner2";
import Contact from "../../components/contact/contact";
import InfiniteMarquee from "./infiniteMarquee2/infiniteMarquee2";

const HomePage = () => {
  return (
    <div>
      <NewColection />
      <NewCatalog />
      <Baner />
      <BoorivaStore />
      <InfiniteMarquee />
      <Contact />
    </div>
  );
};

export default HomePage;
