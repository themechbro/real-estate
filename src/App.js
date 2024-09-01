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
import Checkout from "./components/checkout";
import OrderSuccess from "./components/orderSuccess";

function App() {
  return (
    <Router>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/property/:id" element={<ViewProperty />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order_success" element={<OrderSuccess />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
