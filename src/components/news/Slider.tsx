import React from "react";
import { Carousel } from "antd";

const Slider: React.FC = () => (
  <Carousel autoplay className="slider">
    <div>
      <img src={require("../../img/img1.jpg")} alt="" />
      <h3>This is a heading...</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ratione</p>
    </div>

    <div>
      <img src={require("../../img/img2.jpg")} alt="" />
      <h3>This is a heading...</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ratione</p>
    </div>

    <div>
      <img src={require("../../img/img3.jpg")} alt="" />
      <h3>This is a heading...</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ratione</p>
    </div>

    <div>
      <img src={require("../../img/img4.jpg")} alt="" />
      <h3>This is a heading...</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ratione</p>
    </div>
  </Carousel>
);

export default Slider;
