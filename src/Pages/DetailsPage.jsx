import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function DetailsPage() {
    const [item, setItem] = useState({});
    const {itemId} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchSingleItem = async () => {
            try {
              const response = await axios.get(
                `http://localhost:5005/items/${itemId}`
              );
      
              setItem(response.data);
            } catch (error) {
              console.log(error);
            }
          };
          fetchSingleItem();
        }, [itemId]);
    

        return (
            <div className="itemCtn">
              {item && (
                <>
                  <img
                    src={item.picture}
                    alt="Item Image"
                    height="300px"
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