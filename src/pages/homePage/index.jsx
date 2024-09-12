import NewColection from "./NewColection/NewColection";
import NewCatalog from "./NewCatalog/NewCatalog";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Delivery from "../../components/delivery/delivery";
import Baner from "./Baner/Baner";
import Contact from "../../components/contact/contact";
import InfiniteMarquee from "./InfiniteMarquee/InfiniteMarquee";

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
