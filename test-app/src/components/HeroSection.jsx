import "./HeroSection.css";
import Button from "./Button";
import heroImage from "../assets/discord-background.png";

function HeroSection() {
  return (
    <section className="hero-section">
      <h1>Imagine a place...</h1>
      <div className="flex-container">
        <div className="hero-content">
          <p>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day and
            hang out more often.
          </p>
          <Button type="primary">Download for Mac</Button>
          <Button type="secondary">Open Discord on your browser</Button>
        </div>
      <img src={heroImage} className="hero-image" alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
