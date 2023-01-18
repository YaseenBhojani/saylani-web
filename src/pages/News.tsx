import { Card, Card as CardAntd } from "antd";

const { Meta } = Card;

const News = () => {
  return (
    <div className="news-page">
      <h2><span>News</span></h2>

      <div className="cards">
        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>

        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>

        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>

        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>

        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>

        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>

        <CardAntd hoverable style={{ width: 240 }} cover={<img alt="example" src={require("../img/img2.jpg")} />}>
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </CardAntd>
      </div>
    </div>
  );
};

export default News;
