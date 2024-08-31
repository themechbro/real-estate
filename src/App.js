import "./App.css";
import Error from "./components/error";
import ViewProperty from "./components/viewProperty";
import Home from "./home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Appbar from "./components/appbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/property/:id" element={<ViewProperty />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
