import type { MenuProps } from "antd";
import { Menu } from "antd";
import items from "./Items";
import { useNavigation } from "../../context/NavigationContext";

const Navbar = () => {
  const { current, navigateHandler } = useNavigation();
  const onClick: MenuProps["onClick"] = (e) => navigateHandler(e.key);

  return (
    <div className="navbar">
      <img src={require("../../img/navbarLogo.png")} alt="logo" onClick={() => navigateHandler("home")} />
      <Menu className="menu" onClick={onClick} defaultSelectedKeys={[window.location.pathname]} selectedKeys={[current]} mode="horizontal" items={items} />
    </div>
  );
};

export default Navbar;
