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
import { AppShell } from "@mantine/core";

function App() {
  const [cartItems, setCartItems] = useState([]);
  let VITE_API_URL = import.meta.env.VITE_API_URL;
  
  return (
    <div className="App">
      
      <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
    >
      <AppShell.Header>
        <Navbar />        
      </AppShell.Header>

      <AppShell.Main>      
        <Routes>
          <Route
            path="/"
            element={
              <HomePage cartItems={cartItems} setCartItems={setCartItems} VITE_API_URL={VITE_API_URL} />
            }
          />
          <Route path="/About" element={<AboutPage />} />
          <Route
            path="/Cart"
            element={
              <CartPage cartItems={cartItems} setCartItems={setCartItems} VITE_API_URL={VITE_API_URL} />
            }
          />
          <Route path="/AddItem" element={<AddItemPage VITE_API_URL={VITE_API_URL} />} />
          <Route path="/Quote" element={<QuotePage />} />
          <Route path="/item/:itemId" element={<DetailsPage />} />
          <Route path="/edit/:itemId" element={<EditItemPage VITE_API_URL={VITE_API_URL} />} />
          <Route path="*" element={<h1>404 Page</h1>} />
        </Routes>

        <AppShell.Footer > 
          <Footer />
        </AppShell.Footer>

      </AppShell.Main>
    </AppShell>

    </div>
  );
}
export default App;
