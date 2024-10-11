import "./Hero.css";
import "./cyberpunk.css";
import heroimg from "../images/hero.png";
const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="blue-circle"></div>
        <p className="hero-text cyber-glitch-4">CEASONAL</p>
        <img src={heroimg} alt="hero-image" className="hero-image cyber-glitch-0" />
      </div>
    </>
  );
};

export default Hero;
