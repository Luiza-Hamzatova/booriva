import DeleteBtn from "../../../assets/svg/DeleteBtn";

import styles from "./ProductCard.module.sass";

const ProductCard = ({ id,images, name, size, price, removeFromCart }) => {
  const deleteCart = () => {
    deleteCart(id, size);
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
      <div className={styles.deleteProductBtn} onClick={deleteCart}>
        <DeleteBtn />
      </div>
    </div>
  );
};

export default ProductCard;
