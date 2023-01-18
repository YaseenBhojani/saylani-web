import { Button } from "antd";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useEffect, useState } from "react";
import { Card as CardAntd } from "antd";
import { useNavigation } from "../../context/NavigationContext";
import { useCourses } from "../../context/CoursesContext";
import { CoursesType } from "../../utils/types";
import LoadingSpinner from "../spinners/LoadingSpinner";

const { Meta } = CardAntd;

const Courses = () => {
  let { courses } = useCourses();
  const [_courses, setCourses] = useState<CoursesType[] | []>([]);
  const { navigateHandler } = useNavigation();

  const cardClickHandler = (course: CoursesType) => {
    navigateHandler(`/saylani-web/courses/${course.name.replaceAll(/\s/g, "")}`);
  };

  useEffect(() => {
    const array: CoursesType[] = [];
    try {
      courses?.forEach((course: CoursesType, index: number) => {
        if (index >= 4) {
          setCourses(array);
          throw course;
        }
        array.push(course);
      });
    } catch (e) { }
  }, [courses]);

  const clickHandler = () => {
    navigateHandler("/saylani-web/courses");
    window.scrollTo(0, 0);
  };

  return (
    <div className="courses">
      <h2>Courses</h2>
      {_courses.length > 0 ? (
        <div className="cards">
          {_courses.map((course: CoursesType) => (
            <CardAntd
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={course.image} />}
              onClick={cardClickHandler.bind(null, course)}
              key={course.id}
            >
              <Meta title={course.name} description="Apply Now" />
            </CardAntd>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
      <Button onClick={clickHandler}>
        More <HiOutlineArrowNarrowRight size={25} />
      </Button>
    </div>
  );
};

export default Courses;
