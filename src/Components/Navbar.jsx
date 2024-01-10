import { Button, Center, ThemeIcon } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";

function Navbar() {
  return (
    <Center
      style={{
        justifyContent: "space-around",
        alignContent: "center",
      }}
    >
      <Link to="/">
        <Button color="blue" mt="md" radius="md">
          Home
        </Button>
      </Link>

      <Link to="/About">
        <Button color="blue" mt="md" radius="md">
          About US
        </Button>
      </Link>

      <Link to="/AddItem">
        <Button color="blue" mt="md" radius="md">
          Add Item
        </Button>
      </Link>

      <Link to="/Quote">
        <Button color="blue" mt="md" radius="md">
          Ask for quote
        </Button>
      </Link>

      <Link to="/Cart">
        <ThemeIcon radius="md" size="lg" color="orange">
          <IconShoppingCart size="1rem" stroke={1.5} />
        </ThemeIcon>
      </Link>
    </Center>
  );
}
export default Navbar;
