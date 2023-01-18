import { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import Courses from "../pages/Courses";
import Layout from "../layout/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import News from "../pages/News";
import NoMatchPage from "../pages/NoMatchPage";
import StudentRegister from "../pages/StudentRegister";
import StudentDetail from "../pages/StudentDetail";

const App = () => {
  let routes: RouteObject[] = [
    {
      path: "/saylani-web",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/saylani-web/about", element: <About /> },
        { path: "/saylani-web/news", element: <News /> },
        { path: "/saylani-web/courses", element: <Courses /> },
        { path: "/saylani-web/contact", element: <Contact /> },
        { path: "/saylani-web/studentDetail", element: <StudentDetail /> },
        { path: "/saylani-web/courses/:id", element: <StudentRegister /> },
      ],
    },
    { path: "*", element: <NoMatchPage /> },
  ];

  let element = useRoutes(routes);

  return <>{element}</>;
};

export default App;