import { ReactNode, createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NavigationContextType } from "../utils/types";

type Props = { children: ReactNode; };

export const NavigationContext = createContext<NavigationContextType>({ current: "/saylani-web", navigateHandler: (key: string) => { } });

export const useNavigation = () => useContext(NavigationContext);

const NavigationContextProvider = ({ children }: Props) => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState(window.location.pathname);

  const navigateHandler = (key: string) => {
    navigate(key);
    setCurrent(key);
    window.scrollTo(0, 0);
  };

  const value = { current, navigateHandler };

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;

};

export default NavigationContextProvider;
