const Basket = () => {
  return (
    <div className="basket">
      <div className="flex">
        <div className="basketLeft">
          <div className="basket_title">
            <h1>Instagram</h1>
            <p>Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще</p>
          </div>
          <div className="flex flexL">
            <img
              className="basketBig_img"
              src="./img/instaLeftBig.png"
              alt=""
            />
            <img
              className="basketSmall_img "
              src="./img/instaLeftSmal.png"
              alt=""
            />
          </div>
        </div>
        <div className="basketCenter_img">
          <img src="./img/instaCenter.png" alt="" />
        </div>
      </div>
      <div className="basketRight">
        <div className="flex">
          <img
            className="basketSmall_img "
            src="./img/instaRightSmall.png"
            alt=""
          />
          <img className="basketBig_img" src="./img/instaRightBig.png" alt="" />
        </div>
        <div className="basket_text">
          <h2>#boorivagirls </h2>
          <p>Ставь тэг чтобы быть в нашей тусовке.</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
