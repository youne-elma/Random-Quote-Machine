import React, { useState, useContext, useEffect } from "react";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const AppContext = React.createContext(null);

function AppProvider({ children }) {
  const [quotes, setQuotes] = useState([]);

  const fetchJson = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.quotes) {
        const newData = data.quotes;
        setQuotes(newData);
      } else {
        setQuotes([]);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJson();
  }, []);

  return <AppContext.Provider value={quotes}>{children}</AppContext.Provider>;
}

export default function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
