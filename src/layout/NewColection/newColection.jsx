import Button from "../../components/button/button";
const newColection = () => {
  return (
    <div className="newColection wrapper">
      <div className="newColectionUp">
        <div className="newColection__tshirts">
          <img src="./img/newColection/футболки.png" alt="" />
          <div className="newColection__tshirts_button">
            <Button value={"футболки"} />
          </div>
        </div>

        <div className="newColection_flex">
          <div className="newColection__downclothes ">
            <img src="./img/newColection/низ.png" alt="" />
            <div className="newColection__downclothes_button">
              <Button value={"низ"} />{" "}
            </div>
          </div>
          <div className="newColection__upclothes">
            <img src="./img/newColection/верх.png" alt="" />
            <div className="newColection__upclothes_button">
              <Button value={"верх"} />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="newColectionDown">
        <div className="newColection_flex ">
          <div className="newColection__dresses ">
            <img src="./img/newColection/платья.png" alt="" />
            <div className="newColection__dresses_button">
              <Button value={"платья"} />
            </div>
          </div>
          <div className="newColection__suits ">
            <img src="./img/newColection/костюмы.png" alt="" />
            <div className="newColection__suits_button">
              <Button value={"костюмы"} />
            </div>
          </div>
        </div>
        <div className="newColection__hoodies ">
          <img src="./img/newColection/худи.png" alt="" />
          <div className="newColection__hoodies_button">
            <Button value={"худи"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default newColection;
