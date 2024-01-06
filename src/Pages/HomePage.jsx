import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Components/Search";

function HomePage() {

  let API_URL = "http://localhost:5005/items";
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeoutId, setTimeoutId] = useState();

  const getAllItems = (query) => {
    if (query) {
      API_URL += `?q=${query}`;
    }
    axios
      .get(`${API_URL}`)
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  };

  const addToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  useEffect(() => {
    getAllItems();
  }, []);
  useEffect(() => {
    clearTimeout(timeoutId);
    if (searchTerm) {
      setTimeoutId(
        setTimeout(() => {
          getAllItems(searchTerm);
        }, 300)
      );
    } else {
      getAllItems();
    }
  }, [searchTerm]);
  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="ItemsList">
        {items.map((item) => {
          return (
            <div className="Item card" key={item.id}>
              <Link to={"/item/" + item.id}>
                <h3>{item.name}</h3>
                <img src={item.picture} alt="item picture" />
                <p>{item.description}</p>
                <p>{item.price}€</p>
              </Link>
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default HomePage;
