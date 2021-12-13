import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/Product List";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Categories from "./Components/Categories";
import Users from "./Components/Users";
import Products from "./Components/Products";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" exact element={<Products />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/users" element={<Users />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
