import Courses from "../components/courses/Courses";
import Introduction from "../components/introduction/Introduction";
import News from "../components/news/News";

const Home = () => {
  return (
    <div className="home">
      <Introduction />
      <News />
      <Courses />
    </div>
  );
};

export default Home;
