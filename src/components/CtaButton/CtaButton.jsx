import { Link } from "react-router-dom";
import "./CtaButton.css";

const CtaButton = ({ to, children, variant = "primary" }) => {
  return (
    <button className={`cta-button cta-button--${variant}`}>
      <Link to={to}>{children}</Link>
    </button>
  );
};

export default CtaButton;
