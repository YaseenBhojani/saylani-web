import { ReactNode, createContext, useState, useEffect, useContext } from "react";
import { CoursesContextType, CoursesType } from "../utils/types";
import { collection, DocumentData, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const CoursesContext = createContext<CoursesContextType>({ courses: null, loadingSpinner: false, });

export const useCourses = () => useContext(CoursesContext);

const CoursesProvider = ({ children }: { children: ReactNode; }) => {
  const [courses, setCourses] = useState<CoursesType[] | DocumentData | null>(null);
  const [loadingSpinner, setLoadingSpinner] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      setLoadingSpinner(true);
      try {
        const querySnapshot = await getDocs(collection(db, "courses"));
        const coursesArray: CoursesType[] | DocumentData = [];
        querySnapshot.forEach((doc) => coursesArray.push(doc.data()));
        setCourses(
          coursesArray.sort((a: CoursesType, b: CoursesType) => a.id - b.id)
        );
      } catch (err) {
        console.log(err);
      } finally {
        setLoadingSpinner(false);
      }
    })();
  }, []);

  const value = { courses, loadingSpinner };

  return <CoursesContext.Provider value={value}>{children}</CoursesContext.Provider>;

};

export default CoursesProvider;
