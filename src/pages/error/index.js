import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./error.scss";

function ErrorPage() {
  const [color, setColor] = useState("");
  const [isGoBackHovering, setIsGoBackHovering] = useState(false);
  const buttonStyle = {
    backgroundColor: "white",
    border: "4px solid #1c1c1c",
  };
  const hoverButtonStyle = {
    color: "white",
    backgroundColor: `${color}`,
    border: "4px solid #1c1c1c",
  };
  const colors = useMemo(
    () => [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ],
    [],
  );

  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors]);

  const handleGoBackMouseEnter = () => {
    setIsGoBackHovering(true);
  };
  const handleGoBackMouseLeave = () => {
    setIsGoBackHovering(false);
  };
  document.body.style.backgroundColor = `${color}`;
  return (
    <div className="main-error">
      <h1 className="errorMessage">Error 404 page</h1>
      <Link
        to="/random-quote-machine/"
        style={isGoBackHovering ? hoverButtonStyle : buttonStyle}
        className="goBack-button"
        onMouseEnter={handleGoBackMouseEnter}
        onMouseLeave={handleGoBackMouseLeave}
      >
        Go Back
      </Link>
    </div>
  );
}

export default ErrorPage;
