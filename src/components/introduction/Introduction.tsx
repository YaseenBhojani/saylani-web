import { Button } from "antd";
import { useNavigation } from "../../context/NavigationContext";

const Introduction = () => {
  const { navigateHandler } = useNavigation();
  const clickHandler = () => navigateHandler("/saylani-web/about");

  return (
    <div className="introduction">
      <div className="textBox">
        <h1>Introduction To Our <span className="text-red"> S.M.I.T</span></h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, libero?</h2>
        <br />
        <p>Saylani Welfare is on the ground and already working with local communities to assess how best to support affected families, who urgently need food, Ration, shelter, bedding, Medical Facility and hygiene items.</p>
        <Button onClick={clickHandler}>Read More</Button>
      </div>
      <div className="imgBox">
        <img src={require("../../img/introImage.png")} alt="" />
      </div>
    </div>
  );
};

export default Introduction;
