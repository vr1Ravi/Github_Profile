// import Skeleton from "react-loading-skeleton";
import "./Hero.scss";
import { useSelector } from "react-redux";
const Hero = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="hero">
      <div className="leftHero">
        <img src={user?.avatar_url} alt="img" />
        <div className="name">
          <h1>Ravishankar</h1>
          <p>vr1Ravi.</p>
        </div>
        <div className="about"></div>
      </div>
      <div className="rightHero"></div>
    </div>
  );
};

export default Hero;
