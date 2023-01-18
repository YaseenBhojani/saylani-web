import type { MenuProps } from "antd";
import { HiOutlineBookOpen, HiOutlineHome, HiOutlineNewspaper, HiOutlinePhone, } from "react-icons/hi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

const items: MenuProps["items"] = [
  { label: "Home", key: "/saylani-web", icon: <HiOutlineHome size={18} /> },
  { label: "About", key: "/saylani-web/about", icon: <AiOutlineExclamationCircle size={18} /> },
  { label: "News", key: "/saylani-web/news", icon: <HiOutlineNewspaper size={18} /> },
  { label: "Courses", key: "/saylani-web/courses", icon: <HiOutlineBookOpen size={18} /> },
  { label: "Student Detail", key: "/saylani-web/studentDetail", icon: <FiUser size={18} /> },
  { label: "Contact", key: "/saylani-web/contact", icon: <HiOutlinePhone size={18} /> },
];

export default items;
