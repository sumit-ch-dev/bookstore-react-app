import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Products from "./components/ProductContainer.";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
