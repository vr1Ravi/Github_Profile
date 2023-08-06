import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
const Header = () => {
  return (
    <div className="header">
      <div className="header_Left">
        <div className="header_LeftUpper">
          <RxHamburgerMenu />
          <AiFillGithub />
          <h2>vr1Ravi</h2>
        </div>
        <div className="header_LeftLower"></div>
      </div>
      <div className="header_Right"></div>
    </div>
  );
};

export default Header;
