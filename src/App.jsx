import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
import BannerCarousel from "./pages/BannerCarousel";
import Footer from "./Footer";
import "./App.css";
function App() {
  return (
    <Router>
      <Header></Header>

      <nav>
        <Link to="/">
          {/* Home */}
        </Link>
        <Link to="/Cart">
          {/* Cart */}
        </Link>
        <Link to="/Login">
          {/* Login */}
        </Link>
        {""}
        <Link to="/Shop">
          {/* Shop */}
        </Link>
        {""}
        <Link link to="/Contact">
          {/* Contact */}
        </Link>
      <Link to="/About">
        {/* About */}
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<Route path="/cart" element={<Cart />} />
<Route path="/shop" element={<Shop />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
   
  );
}
export default App;

