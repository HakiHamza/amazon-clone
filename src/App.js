import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Error from "./Error";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/checkout"
          element={
            <>
              <Homepage />
              <Checkout />
            </>
          }
        />
        <Route path="/login" element={<Homepage />} />
        <Route
          path="/"
          element={
            <>
              <Homepage />
              <Home />
            </>
          }
        />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
