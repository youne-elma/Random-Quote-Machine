import { useState, useEffect, useMemo } from "react";
import "./main.scss";
import useGlobalContext from "../../context";
import twitterLogo from "../../assets/twitterLogo.png";
import quoteDesign from "../../assets/quotes.png";

function Main() {
  const quotes = useGlobalContext();
  const [quote, setQuote] = useState({
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  });
  const [color, setColor] = useState("");
  const [isNextQuoteHovering, setIsNextQuoteHovering] = useState(false);
  const [isTweetHovering, setIsTweetHovering] = useState(false);
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

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  function getQuote() {
    const newQuote = getRandomQuote();
    return newQuote;
  }
  useEffect(() => {
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }, [colors, quote]);

  const buttonStyle = {
    backgroundColor: `${color}`,
    border: `2px solid ${color}`,
  };
  const hoverButtonStyle = {
    backgroundColor: "white",
    border: `2px solid ${color}`,
  };

  const handleNextQuoteMouseEnter = () => {
    setIsNextQuoteHovering(true);
  };
  const handleNextQuoteMouseLeave = () => {
    setIsNextQuoteHovering(false);
  };

  const handleTweetMouseEnter = () => {
    setIsTweetHovering(true);
  };
  const handleTweetMouseLeave = () => {
    setIsTweetHovering(false);
  };
  document.body.style.backgroundColor = `${color}`;
  return (
    <div>
      <span className="borderOne" />
      <div id="quote-box" className="quoteBox">
        <div className="cadreBox" style={{ border: `5px solid ${color}` }}>
          <img alt="quotes design" className="quoteDesign1" src={quoteDesign} />
          <h1 id="text" className="quoteText" style={{ color: `${color}` }}>
            {quote.quote}
          </h1>
          <div className="others-quote">
            <button
              type="button"
              className="nextQuote"
              style={isNextQuoteHovering ? hoverButtonStyle : buttonStyle}
              onMouseEnter={handleNextQuoteMouseEnter}
              onMouseLeave={handleNextQuoteMouseLeave}
              onClick={() => setQuote(getQuote)}
            >
              Next quote
            </button>
            <button
              type="button"
              className="tweetQuote"
              style={isTweetHovering ? hoverButtonStyle : buttonStyle}
              onMouseEnter={handleTweetMouseEnter}
              onMouseLeave={handleTweetMouseLeave}
            >
              <a href="#link">
                <img alt="twitter logo" src={twitterLogo} />
              </a>
            </button>
            <p className="quote-author">{quote.author}</p>
          </div>
          <img alt="quotes design" className="quoteDesign2" src={quoteDesign} />
        </div>
      </div>
    </div>
  );
}

export default Main;
