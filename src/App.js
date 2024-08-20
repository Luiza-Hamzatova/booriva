//import Button from "./components/button/button";
import CardProduct from "./components/cardProduct/cardProduct";

const App = () => {
  return (
    <div className="App wrapper">
      <CardProduct
        img={"./img/productImg.png"}
        id={0}
        price={"1 099"}
        name={"Cвитшот вставка клетка"}
      />
    </div>
  );
};

export default App;
