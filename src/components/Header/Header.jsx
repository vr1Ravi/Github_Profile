import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState, useEffect } from "react";
const Header = () => {
  const [inputVal, setInputVal] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleChange = (e) => {
    // setInputVal(e.target.value);
    const name = e.target.value;
    setInputVal(name);
  };
  useEffect(() => {
    if (inputVal === "") return;
    console.log(inputVal);
    const timer = setTimeout(async () => {
      const res = await fetch(`https://api.github.com/users/${inputVal}`);
      const data = await res.json();
      console.log(data);
    }, 1000);

    return () => clearTimeout(timer);
  }, [inputVal]);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
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
      <div className="header_Right">
        {windowWidth > 900 ? (
          <>
            <BiSearchAlt2 />
            <input
              type="text"
              // value={inputVal}
              onChange={(e) => handleChange(e)}
            />
          </>
        ) : (
          <div className="inutBox">
            {" "}
            <BiSearchAlt2 />
          </div>
        )}

        <div className="prifile_img">
          <img
            src="https://avatars.githubusercontent.com/u/103517405?v=4"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
