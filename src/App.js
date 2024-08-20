import Button from "./components/button/button";
import CardProduct from "./components/cardProduct/cardProduct";
import Basket from "./layout/basket/basket";

const App = () => {
  return (
    <div className="App wrapper">
      {/* <Button value={'смотреть все'}/> */}
      {/* <CardProduct  img={"./img/productImg.png"} id={0} price={'1 099'} name={'Cвитшот вставка клетка'}/> */}
      <Basket/>
    </div>
  );
};

export default App;
