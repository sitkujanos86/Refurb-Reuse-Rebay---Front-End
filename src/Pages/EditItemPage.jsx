import { useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


function EditItemPage() {

    let API_URL = "http://localhost:5005/items";
    const navigate = useNavigate();
    const { itemId } = useParams(); 

// State variables to store the values of the form inputs.
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [picture, setPicture] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    
// Handler functions for the form inputs. You can leave these as they are.
    const handleName = (event) => setName(event.target.value);
    const handleDescription = (event) => setDescription(event.target.value);
    const handlePicture = (event) => setPicture(event.target.value);
    const handleCategory = (event) => setCategory(event.target.value);
    const handlePrice = (event) => setPrice(event.target.value);

    useEffect(() => {                                 
        axios
          .get(`${API_URL}/${itemId}`)
          .then((response) => {
            const oneItem = response.data;
            setName(oneItem.name);
            setDescription(oneItem.description);
            setPicture(oneItem.picture);
            setCategory(oneItem.category);
            setPrice(oneItem.price);
          })
          .catch((error) => console.log(error));
        
      }, [itemId]);

      const handleSubmit = (event) => {                     
        event.preventDefault();
        const requestBody = {name, description, picture, category, price};
     
        axios
          .put(`${API_URL}/${itemId}`, requestBody)
          .then((response) => {

            navigate(`/`)
          });
      };
    

    return (
        <>
          <h3>Edit Item</h3>
          <div className="formCtn">
            <form onSubmit={handleSubmit}>
              <label>Name</label>
              <input
                className="nameCtn"
                type="text"
                name="name"
                placeholder="Item Name"
                value={name}
                onChange={handleName}
              />
              <label>Description</label>
              <textarea
                className="descriptionCtn"
                type="text"
                name="description"
                placeholder="Description"
                rows="3"
                value={description}
                onChange={handleDescription}
              ></textarea>
              <label>Image</label>
              <input
                className="imgCtn"
                type="text"
                name="picture"
                placeholder="Picture URL"
                value={picture}
                onChange={handlePicture}
              />
              <label>Category</label>
              <input
                className="categoryCtn"
                type="text"
                name="Category"
                placeholder="Category"
                value={category}
                onChange={handleCategory}
              />
              <label>Price</label>
              <div className="priceCtn">
                <div>
                  <span className="euroCtn">
                    €
                  </span>
                </div>
                <input
                  className="numberCtn"
                  type="number"
                  name="Price"
                  value={price}
                  onChange={handlePrice}
                  min={1}
                  max={1000}
                />
              </div>
              <button className="UpdBtn">Update Item</button>
            </form>
          </div>
        </>
      );
    }
    
export default EditItemPage;