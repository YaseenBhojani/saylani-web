import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StudentForm from "../components/forms/StudentForm";
import LoadingSpinner from "../components/spinners/LoadingSpinner";
import { useCourses } from "../context/CoursesContext";
import { CoursesType } from "../utils/types";
import { Alert, Image, Space } from "antd";

const StudentRegister = () => {
  const { courses } = useCourses();
  const location = useLocation();
  const [course, setCourse] = useState<CoursesType | null>(null);
  const [pageNotFound, setPageNotFound] = useState<boolean>(false);
  const [message, setMessage] = useState<null | true | false>(null);

  const param = location.pathname.slice(location.pathname.lastIndexOf("/") + 1);

  useEffect(() => {
    try {
      courses?.forEach((course: CoursesType, index: number) => {
        const condition = course.name.replaceAll(/\s/g, "") === param;
        if (condition) {
          setCourse(course);
          throw course;
        }
        if (index === courses.length - 1 && !condition) setPageNotFound(true);
      });
    } catch (e) { }
  }, [courses, location.pathname, param]);

  return (
    <div className="studentPage">
      <Space direction="vertical" className="message">
        {message === true && <Alert message="Details sent successfully" type="success" />}
        {message === false && <Alert message="Something went wrong!" type="error" />}
      </Space>

      {course ? (
        <>
          <div className="courseIntro">
            <h2>Registration For {course.name}</h2>
            <Image src={course.image} width="100%" height="100%" alt="" />
          </div>
          <StudentForm databaseRef={param} func={setMessage} />
        </>
      ) : pageNotFound ? <h2 className="pageNotFound">Page Not Found: try again!</h2> : <LoadingSpinner />}
    </div>
  );
};

export default StudentRegister;
