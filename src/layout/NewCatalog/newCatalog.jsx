import CardProduct from "../../components/cardProduct/cardProduct";
import Title from "../../components/title/title";
import Button from "../../components/button/button";
const NewCatalog = () => {
  return (
    <div>
      <div className="newCatalog">
        <div className="newCatalog__title wrapper">
          <Title valueh1="новинки" valueh2="новинки" />
        </div>
        <div className="newCatalog_products">
          <CardProduct
            img={"./img/productImg.png"}
            id={0}
            price={"1 099"}
            name={"Cвитшот вставка клетка"}
            class={"catalog"}
            isFavorite={false}
          />
          <CardProduct
            img={"./img/productImg.png"}
            id={0}
            price={"1 099"}
            name={"Cвитшот вставка клетка"}
            class={"catalog"}
            isFavorite={false}
          />
          <CardProduct
            img={"./img/productImg.png"}
            id={0}
            price={"1 099"}
            name={"Cвитшот вставка клетка"}
            class={"catalog"}
            isFavorite={false}
          />
          <CardProduct
            img={"./img/productImg.png"}
            id={0}
            price={"1 099"}
            name={"Cвитшот вставка клетка"}
            class={"catalog"}
            isFavorite={false}
          />
        </div>
        <div className="newCatalog_button ">
          <Button value={"смотреть все"} />
        </div>
      </div>
    </div>
  );
};

export default NewCatalog;
