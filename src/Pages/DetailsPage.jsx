import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {
    const [item, setItem] = useState({});
    const {itemId} = useParams();

    const navigate = useNavigate();
    const API_URL = "http://localhost:5005";
          
    const getSingleItem = () => {
        axios
            .get(`${API_URL}/items/${itemId}`)
            .then((response) => setItem(response.data))
            .catch((error) => console.error(error));
    };
    
    useEffect(() => {
            getSingleItem();
    }, [itemId] );  

    return (
        <div className="itemCtn">
            {item && (
            <>
                <img
                    src={item.picture}
                    alt="Item Image"
                    height="30px"
                    width="auto"
                />
                <h3>{item.name}</h3>
                <p>Price: {item.price}</p>
                <p>Description: {item.description}</p>
                <p>Category: {item.category}</p>
        
                <button
                    className="itemBnt"
                    onClick={() => {
                    navigate("/");
                    }}
                >
                    Back
                </button>
            </>
            )}
        </div>
        );
    }
        
export default DetailsPage;