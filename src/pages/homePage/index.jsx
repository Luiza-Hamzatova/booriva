import NewColection from "./newColection/newColection";
import NewCatalog from "./newCatalog/newCatalog";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Delivery from "../../components/delivery/delivery";
import Baner from "./baner/baner";
import Contact from "../../components/contact/contact";
import InfiniteMarquee from "./infiniteMarquee/infiniteMarquee";

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
