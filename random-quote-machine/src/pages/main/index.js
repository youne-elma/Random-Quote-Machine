import "./main.scss";

function Main() {
  return (
    <div>
      <span className="borderOne" />
      <div id="quote-box" className="quoteBox">
        <div className="cadreBox">
          <h1 id="text" className="quoteText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <div className="others-quote">
            <button type="button">new quote</button>
            <button type="button">
              <a href="#link">tweetquote</a>
            </button>
            <p className="quote-author">quote author</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
