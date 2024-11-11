import PropTypes from "prop-types";
import "./Button.css";

function Button(props) {
  if (props.type === "primary") {
    return <button className="button primary-btn">{props.children}</button>;
  } else if (props.type === "secondary") {
    return <button className="button secondary-btn">{props.children}</button>;
  }
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
}

export default Button;
