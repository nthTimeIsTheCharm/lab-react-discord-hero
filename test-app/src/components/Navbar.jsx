import discordLogo from "../assets/discord-logo-white.png";
import hamburgerMenu from "../assets/menu-icon.png";
import "./Nav-bar.css";


function Navbar() {
  
  return (
      <nav className="nav-bar">
        <img src={discordLogo} className="logo" alt="Home" />
        <img src={hamburgerMenu} className="logo" alt="Menu icon" />
      </nav>
  );
}

export default Navbar;
