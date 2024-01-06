import "./App.css";
import "./Components/Footer"
import Navbar from "./Components/Navbar"
import HomePage from "./Pages/HomePage"
import Footer from "./Components/Footer"
import AboutPage from "./Pages/AboutPage";
import CartPage from "./Pages/CartPage";
import AddItemPage from "./Pages/AddItemPage";
import DetailsPage from "./Pages/DetailsPage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";



function App() {
  const [cartItems, setCartItems] = useState([]);
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage cartItems={cartItems} setCartItems={setCartItems}/> } />
        <Route path="/About" element={ <AboutPage/> } />
        <Route path="/Cart" element={ <CartPage cartItems={cartItems}/> } />
        <Route path="/AddItem" element={ <AddItemPage/> } />
        <Route path="/item/:itemId" element={<DetailsPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
