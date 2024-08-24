import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import InfiniteMarquee from "./layout/InfiniteMarquee/InfiniteMarquee";
import Filter from "./pages/Filter/Filter";
import Contact from "./layout/Contact/contact";
import NewColection from "./layout/NewColection/newColection";
import NewCatalog from "./layout/NewCatalog/newCatalog";
import Baner from "./layout/Baner";
import BoorivaStore from "./components/boorivaStore/boorivaStore";
const App = () => {
  return (
    <div>
      <Header />
      <Filter />
      <NewColection />
      <NewCatalog />
      <Baner />
      <BoorivaStore />
      <InfiniteMarquee />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
