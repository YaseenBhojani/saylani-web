import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { useNavigation } from "../../context/NavigationContext";

const Footer = () => {
  const { navigateHandler } = useNavigation();
  const clickHandler = (key: string) => {
    navigateHandler(key);
  };

  return (
    <footer className="footer">
      <ul className="cloumn">
        <li className="first-item">
          <div className="logoBox">
            <img
              src={require("../../img/footerLogo.png")}
              alt=""
              width={200}
              onClick={clickHandler.bind(null, "/saylani-web")}
            />
          </div>
          <div className="mediaBox">
            <a
              href="https://www.facebook.com/SaylaniWelfareInternationalTrust"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook className="mediaItem" />
            </a>
            <a
              href="https://twitter.com/OfficialSwit"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter className="mediaItem" />
            </a>
            <a
              href="https://www.youtube.com/c/SaylaniWelfareInternationalTrust"
              target="_blank"
              rel="noreferrer"
            >
              <BsYoutube className="mediaItem red" />
            </a>
          </div>
        </li>
        <li className="explore">
          <h4>Explore</h4>
          <ul>
            <li onClick={clickHandler.bind(this, "/saylani-web")}>Introduction</li>
            <li onClick={clickHandler.bind(this, "/saylani-web/about")}>About</li>
            <li onClick={clickHandler.bind(this, "/saylani-web/news")}>News</li>
            <li onClick={clickHandler.bind(this, "/saylani-web/courses")}>Courses</li>
            <li onClick={clickHandler.bind(this, "/saylani-web/contact")}>Contact</li>
          </ul>
        </li>
        <li className="contact">
          <h4>Contact</h4>
          <ul>
            <li>A-25, Bahadurabad Chowrangi Karachi, Pakistan</li>
            <li>UAN: 111-729-526 (+0092-213)4130786-90</li>
            <li>CELL: 92-311-1729526</li>
            <li>USA NO +1(716)941 7792</li>
            <li>UK NO (+44)115 970 6256</li>
          </ul>
        </li>
      </ul>
      <p>Copyright &copy; 2023 Saylani Mass IT Training</p>
    </footer>
  );
};

export default Footer;
