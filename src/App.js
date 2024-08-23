import Button from "./components/button/button";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import InfiniteMarquee from "./layout/InfiniteMarquee/InfiniteMarquee";

const App = () => {
  return (
    <div>
      <Header />
      <Button value="смотреть все" />
      <InfiniteMarquee/>
      <Footer />
    </div>
  );
};

export default App;
