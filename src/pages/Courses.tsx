import { Card, Card as CardAntd } from "antd";
import LoadingSpinner from "../components/spinners/LoadingSpinner";
import { useCourses } from "../context/CoursesContext";
import { useNavigation } from "../context/NavigationContext";
import { CoursesType } from "../utils/types";
const { Meta } = Card;

const Courses = () => {
  const { courses } = useCourses(), { navigateHandler } = useNavigation();

  const clickHandler = (course: CoursesType) => navigateHandler(`/saylani-web/courses/${course.name.replaceAll(/\s/g, "")}`);

  const cards = courses?.map((course: CoursesType) => (
    <CardAntd onClick={clickHandler.bind(null, course)} key={course.name} hoverable style={{ width: 240 }} cover={<img src={course.image} alt={course.name + " Image"} />}>
      <Meta title={course.name} description="Apply Now" />
    </CardAntd>));

  return (
    <>
      {!courses ? <LoadingSpinner /> :
        <div className="courses-page">
          <h2><span>Courses</span></h2>
          <div className="cards">{cards}</div>
        </div>
      }
    </>
  );
};

export default Courses;
