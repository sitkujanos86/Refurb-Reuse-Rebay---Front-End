import "./App.css";
import "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import AboutPage from "./Pages/AboutPage";
import CartPage from "./Pages/CartPage";
import AddItemPage from "./Pages/AddItemPage";
import DetailsPage from "./Pages/DetailsPage";
import QuotePage from "./Pages/QuotePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import EditItemPage from "./Pages/EditItemPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/About" element={<AboutPage />} />
        <Route
          path="/Cart"
          element={
            <CartPage cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route path="/AddItem" element={<AddItemPage />} />
        <Route path="/Quote" element={<QuotePage />} />
        <Route path="/item/:itemId" element={<DetailsPage />} />
        <Route path="/edit/:itemId" element={<EditItemPage />} />
        <Route path="*" element={<h1>404 Page</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
