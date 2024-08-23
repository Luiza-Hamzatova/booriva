import Button from "./components/button/button";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import InfiniteMarquee from "./layout/InfiniteMarquee/InfiniteMarquee";
import Filter from "./pages/Filter/Filter";

const App = () => {
  return (
    <div>
      <Header />
      <Filter/>
      <InfiniteMarquee/>
      <Footer />
    </div>
  );
};

export default App;
