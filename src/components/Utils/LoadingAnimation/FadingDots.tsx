import GoToTop from "../GoToTop";
import "./FadingDots.css";
import LogoIcon from "./LogoIcon.svg";

const FadingDots = () => {
  return (
    <>
      <div className="fading-dot-container">
        <img src={LogoIcon} alt="Loading" className="fading-logo" />
        <h3 className="fading-title">MidstreamAI</h3>
        <div className="fading-dots">
          <div className="fading-dot"></div>
          <div className="fading-dot"></div>
          <div className="fading-dot"></div>
          <div className="fading-dot"></div>
          <div className="fading-dot"></div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default FadingDots;
