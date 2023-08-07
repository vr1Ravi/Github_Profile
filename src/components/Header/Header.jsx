import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
const Header = () => {
  return (
    <div className="header">
      {/* Header Left Part */}
      <div className="header_Left">
        <div className="header_LeftUpper">
          <RxHamburgerMenu />
          <AiFillGithub />
          <p>vr1Ravi</p>
        </div>
        <div className="header_LeftLower">
          <div className="overview">
            <BsBook /> <p>Overview</p>
          </div>
          <div className="repos">
            <RiGitRepositoryLine /> <p>Repositories</p> <span>12</span>
          </div>
        </div>
      </div>
      {/* Header Right Part */}
      <div className="header_Right"></div>
    </div>
  );
};

export default Header;
