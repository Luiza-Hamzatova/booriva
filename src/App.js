import Button from "./components/button/button";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";
import InfiniteMarquee from "./layout/InfiniteMarquee/InfiniteMarquee";
import Filter from "./pages/Filter/Filter";
import CardProduct from "./components/cardProduct/cardProduct";
import Contact from "./layout/Contact/contact";
import NewColection from "./layout/NewColection/newColection";
import NewCatalog from "./layout/NewCatalog/newCatalog";
import Baner from './layout/Baner'
const App = () => {
  return (
    <div>
      {/* <Button value={'смотреть все'}/> */}
      {/* <CardProduct  img={"./img/productImg.png"} id={0} price={'1 099'} name={'Cвитшот вставка клетка'}/> */}
       <Header /> 
      <NewColection/> 
      <NewCatalog/>
      <Baner/>
      <InfiniteMarquee/>
      <Contact/>
      <Footer />
    </div>
  );
};

export default App;



