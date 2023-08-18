// import Skeleton from "react-loading-skeleton";
import "./Hero.scss";
import { useSelector } from "react-redux";
import { HiOutlineLocationMarker } from "react-icons/hi";
const Hero = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="hero">
      <div className="leftHero">
        <img
          src={
            user
              ? user.avatar_url
              : "https://avatars.githubusercontent.com/u/103517405?v=4"
          }
          alt="img"
        />
        <div className="details">
          <h1>{user ? user.name : "userName.."}</h1>
          <p>{user ? user.login : "login.."}</p>
          <p>{user ? user.bio : "search user to get thier bio"}</p>
        </div>
        <div className="social">
          {" "}
          <p>
            <span>1</span> follower . <span>0</span> following
          </p>
        </div>
        <div className="address">
          <address>
            <HiOutlineLocationMarker /> A-2202, Gardenia Square, Crossing
            Republik, Ghaziabad
          </address>
        </div>
      </div>
      <div className="rightHero"></div>
    </div>
  );
};

export default Hero;
