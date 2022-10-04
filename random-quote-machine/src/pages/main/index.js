import "./main.scss";
import twitterLogo from "../../assets/twitterLogo.png";
import quoteDesign from "../../assets/quotes.png";

function Main() {
  return (
    <div>
      <span className="borderOne" />
      <div id="quote-box" className="quoteBox">
        <div className="cadreBox">
          <img alt="quotes design" className="quoteDesign1" src={quoteDesign} />
          <h1 id="text" className="quoteText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <div className="others-quote">
            <button type="button" className="nextQuote">
              Next quote
            </button>
            <button type="button" className="tweetQuote">
              <a href="#link">
                <img alt="twitter logo" src={twitterLogo} />
              </a>
            </button>
            <p className="quote-author">Quote author</p>
          </div>
          <img alt="quotes design" className="quoteDesign2" src={quoteDesign} />
        </div>
      </div>
    </div>
  );
}

export default Main;
