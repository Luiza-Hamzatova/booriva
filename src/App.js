import Button from "./components/button/button";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import InfiniteMarquee from "./layout/InfiniteMarquee/InfiniteMarquee";
import Filter from "./pages/Filter/Filter";
import CardProduct from "./components/cardProduct/cardProduct";
import Basket from "./layout/basket/basket";

const App = () => {
  return (
    <div>
      {/* <Button value={'смотреть все'}/> */}
      {/* <CardProduct  img={"./img/productImg.png"} id={0} price={'1 099'} name={'Cвитшот вставка клетка'}/> */}
      <Basket/>

      <Header />
      <Filter/>
      <InfiniteMarquee/>
      <Footer />
    </div>
  );
};

export default App;



