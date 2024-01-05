import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005";

function HomePage() {
    const [items, setItems] = useState([]);
    const getAllItems = () => {
        axios
          .get(`${API_URL}/items`)
          .then((response) => setItems(response.data))
          .catch((error) => console.error(error));
      };

    useEffect(() => {
        getAllItems();
    }, [] );  

    return (
        <div className="ItemsList">
             {items.map((item) => {
          return (
            <div className="Item card" key={item.id} >
              <Link to={"/items/" + item.id}>
                <h3>{item.name}</h3>
                <img src={item.picture} alt="item picture"/> 
                <p>{item.description}</p>
                <p>{item.price}€</p>
              </Link>
            </div>
            );
            })} 
        </div>
    )
}

export default HomePage;