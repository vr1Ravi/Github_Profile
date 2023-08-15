import "./Header.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillGithub } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../userSlice";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const [inputVal, setInputVal] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);
  const handleChange = (e) => {
    const name = e.target.value;
    setInputVal(name);
  };
  useEffect(() => {
    if (inputVal === "") return;
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${inputVal}`);
        const data = await res.json();
        console.log(data);
        data.login && dispatch(setUser(data));
      } catch (error) {
        dispatch(setUser(null));
      }
    }, 1000);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <RiGitRepositoryLine /> <p>Repositories</p>{" "}
            <span>{user ? user.public_repos : 0}</span>
          </div>
        </div>
      </div>
      {/* Header Right Part */}
      <div className="header_Right">
        {windowWidth > 900 ? (
          <>
            {" "}
            <BiSearchAlt2 />
            <input
              type="text"
              placeholder="Search User"
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
          {user ? (
            <img src={user.avatar_url} alt="" />
          ) : (
            <FaUserCircle size={"2rem"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
