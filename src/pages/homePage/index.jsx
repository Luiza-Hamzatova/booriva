import InfiniteMarquee from "./../../layout/InfiniteMarquee/InfiniteMarquee";
import Contact from "./../../layout/Contact/contact";
import NewColection from "./NewColection/newColection";
import NewCatalog from "./../../layout/NewCatalog/newCatalog";
import Baner from "./../../layout/Baner";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Delivery from "../../components/delivery/delivery";

const HomePage = () => {
  return (
    <div>
      <NewColection />
      <NewCatalog />
      <Baner />
      <BoorivaStore />
      <InfiniteMarquee />
      <Delivery />
      <Contact />
    </div>
  );
};

export default HomePage;
