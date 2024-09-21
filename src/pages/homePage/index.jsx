import NewColection from "./newColection2/newColection2";
import NewCatalog from "./newCatalog2/newCatalog2";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Delivery from "../../components/delivery/delivery";
import Baner from "./baner/baner";
import Contact from "../../components/contact/contact";
import InfiniteMarquee from "./infiniteMarquee/InfiniteMarquee";

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
