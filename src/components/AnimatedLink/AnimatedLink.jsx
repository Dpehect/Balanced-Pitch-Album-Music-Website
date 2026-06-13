import { Link } from "react-router-dom";
import "./AnimatedLink.css";

const AnimatedLink = ({ to, children, className = "" }) => {
  return (
    <Link to={to} className={`animated-link ${className}`}>
      {children}
    </Link>
  );
};

export default AnimatedLink;
