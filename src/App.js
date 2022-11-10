import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./pages/main/index";
import ErrorPage from "./pages/error/index";
import { AppProvider } from "./context";
import "./App.scss";

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route
            path="Random-Quote-Machine/"
            exact
            element={
              <div id="wrapper" className="main">
                <Main />
              </div>
            }
          />
          <Route path="Random-Quote-Machine/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
