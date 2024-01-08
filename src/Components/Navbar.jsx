import { Button } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav>
      <Link to="/">
        <Button color="blue" mt="md" radius="md" >
            Home
        </Button>
      </Link>

      <Link to="/About">
        <Button color="blue" mt="md" radius="md" >
          About US
        </Button>
      </Link>

      <Link to="/AddItem">
        <Button color="blue" mt="md" radius="md" >
          Add Item
        </Button>
      </Link>

      <Link to="/Quote">
        <Button color="blue" mt="md" radius="md" >
          Ask for quote
        </Button>
      </Link>

      <Link to="/Cart">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB8zHL36gU-i3jQlw8gN1pv3sIoFAVoEERtA&usqp=CAU"
          alt="Cart"
        />
      </Link>

    </nav>
  );
}
export default Navbar;
