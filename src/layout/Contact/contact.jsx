const Contact = () => {
  return (
    <div className="contact">
      <div className="flex">
        <div className="contactLeft">
          <div className="contact_title">
            <h1>Instagram</h1>
            <p>Мы в экстазе, когда ты нас отмечаешь) Отмечай плз чаще</p>
          </div>
          <div className="flex flexL">
            <img
              className="contactBig_img"
              src="./img/contact/instaLeftBig.png"
              alt=""
            />
            <img
              className="contactSmall_img "
              src="./img/contact/instaLeftSmal.png"
              alt=""
            />
          </div>
        </div>
        <div className="contactCenter_img">
          <img src="./img/contact/instaCenter.png" alt="" />
        </div>
      </div>
      <div className="contactRight">
        <div className="flex">
          <img
            className="contactSmall_img "
            src="./img/contact/instaRightSmall.png"
            alt=""
          />
          <img
            className="contactBig_img"
            src="./img/contact/instaRightBig.png"
            alt=""
          />
        </div>
        <div className="contact_text">
          <h2>#boorivagirls </h2>
          <p>Ставь тэг чтобы быть в нашей тусовке.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
