import { useState } from "react";
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

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  function getQuote() {
    const newQuote = getRandomQuote();
    return newQuote;
  }

  return (
    <div>
      <span className="borderOne" />
      <div id="quote-box" className="quoteBox">
        <div className="cadreBox">
          <img alt="quotes design" className="quoteDesign1" src={quoteDesign} />
          <h1 id="text" className="quoteText">
            {quote.quote}
          </h1>
          <div className="others-quote">
            <button
              type="button"
              className="nextQuote"
              onClick={() => setQuote(getQuote)}
            >
              Next quote
            </button>
            <button type="button" className="tweetQuote">
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
