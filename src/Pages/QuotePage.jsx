import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuotePage() {
  const navigate = useNavigate();
  // State variables to store the values of the form inputs.
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [category, setCategory] = useState("");

  // Handler functions for the form inputs. You can leave these as they are.
  const handleName = (event) => setName(event.target.value);
  const handleDescription = (event) => setDescription(event.target.value);
  const handlePicture = (event) => setPicture(event.target.value);
  const handleCategory = (event) => setCategory(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const randomAmount = Math.floor(Math.random() * 150);
    window.alert(
      `The refurbishment of your item will cost ${randomAmount} euros`
    );

    navigate("/");
  };

  return (
    <>
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

          <button className="askForQuote">Ask for quote!</button>
        </form>
      </div>
    </>
  );
}

export default QuotePage;
