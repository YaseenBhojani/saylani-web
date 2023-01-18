import CoursesProvider from "./context/CoursesContext";
import NavigationContextProvider from "./context/NavigationContext";
import Routes from "./routes/Routs";
import "./styles/style.scss";

const App = () => (
  <NavigationContextProvider>
    <CoursesProvider> <Routes /> </CoursesProvider>
  </NavigationContextProvider>
);

export default App;
