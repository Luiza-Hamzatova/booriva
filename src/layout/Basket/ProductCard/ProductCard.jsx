import { useDispatch, useSelector } from "react-redux";
import DeleteBtn from "../../../assets/svg/DeleteBtn";
import { setCart } from "../../../redux/basketSlice/basketSlice";
import styles from "./ProductCard.module.sass";

const ProductCard = ({ id, images, name, size, price }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.basket.cart);
  const deleteItemFromCart = () => {
    dispatch(
      setCart(
        cart.filter((item) => !(item.product.id === id && item.size === size))
      )
    );
  };
  return (
    <div className={styles.productCard}>
      <div className={styles.productImg}>
        <img src={images} alt="" />
      </div>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{name}</h2>
        <p className={styles.productSize}>{size}</p>
        <p className={styles.productPrice}>{price};</p>
      </div>
      <div className={styles.deleteProductBtn} onClick={deleteItemFromCart}>
        <DeleteBtn />
      </div>
    </div>
  );
};

export default ProductCard;
