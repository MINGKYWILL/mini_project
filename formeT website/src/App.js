import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import styles from "./App.css";

function App({ mediaType }) {
  return (
    <Router>
      <Routes>
        <Route
          path="/:mediaType/:mediaId"
          element={<Detail mediaType={mediaType} />}
        ></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
