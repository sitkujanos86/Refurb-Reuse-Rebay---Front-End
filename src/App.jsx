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



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/AboutPage" element={ <AboutPage/> } />
        <Route path="/CartPage" element={ <CartPage/> } />
        <Route path="/AddItemPage" element={ <AddItemPage/> } />
        <Route path="/item/:itemId" element={<DetailsPage />} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
