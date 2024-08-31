import Contact from "../../components/Contact/contact";
import InfiniteMarquee from "./InfiniteMarquee/InfiniteMarquee";
import NewColection from "./NewColection/newColection";
import NewCatalog from "./NewCatalog/newCatalog";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Baner from "./Baner/baner";

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
