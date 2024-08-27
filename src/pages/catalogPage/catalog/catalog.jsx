import { useState } from "react";
import CardProduct from "../../../components/cardProduct/cardProduct";
import Title from "../../../components/title/title";

import Filter from "../filter/filter";
const Catalog = () => {
  const [products, setProducts] = useState([{img: "./img/productImg.png", id: 0, price: 1099. }])
  return (
    <div className="wrapper">
      <div className="catalog">
        <div className="catalogUp">
          <Title valueh1="верх" valueh2="топы" />
          <img
            className="catalogUp_img"
            src="./img/catalog/catalog.png"
            alt=""
          />
        </div>
        <div className="catalogDown">
          <Filter />
          <div className="catalog_products">
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
            <CardProduct
              img={"./img/productImg.png"}
              id={0}
              price={"1 099"}
              name={"Cвитшот вставка клетка"}
              isFavorite={false}
              type={"catalog"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
