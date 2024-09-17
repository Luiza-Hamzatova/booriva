import NewColection from "./NewColection/newColection";
import NewCatalog from "./NewCatalog/newCatalog";
import BoorivaStore from "./../../components/boorivaStore/boorivaStore";
import Baner from "./Baner/baner";
import Contact from "../../components/contact/contact";
import InfiniteMarquee from "./InfiniteMarquee/InfiniteMarquee";
import SearchBar from "../../components/searchBar/searchBar";

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
