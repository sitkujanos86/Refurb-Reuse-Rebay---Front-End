import { Button, Menu, ThemeIcon } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import rEbay from "../assets/images/Rebay Logo.png";
import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useState } from "react";

function Navbar() {
  const { width } = useViewportSize();
  const [opened, setOpened] = useState(false);

  return width > 1200 ? (
    <>
      <SimpleGrid ml="13vw" cols={5}>
        <Link to="/">
          <img className="logo" src={rEbay} alt="ReBay" />
        </Link>

        <Link to="/About">
          <Button color="blue" mt="2.1rem" radius="md">
            About US
          </Button>
        </Link>

        <Link to="/AddItem">
          <Button color="blue" mt="2.1rem" radius="md">
            Add Item
          </Button>
        </Link>

        <Link to="/Quote">
          <Button color="blue" mt="2.1rem" radius="md">
            Ask for quote
          </Button>
        </Link>

        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" mt="2.1rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  ) : width > 800 ? (
    <>
      <SimpleGrid ml="5vw" cols={4}>
        <Link to="/">
          <img className="logo" src={rEbay} alt="ReBay" />
        </Link>

        <Link to="/AddItem">
          <Button color="blue" ml="3rem" mt="2.1rem" radius="md">
            Add Item
          </Button>
        </Link>

        <Link to="/Quote">
          <Button color="blue" ml="2rem" mt="2.1rem" radius="md">
            Ask for quote
          </Button>
        </Link>

        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" ml="4rem" mt="2.1rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  ) : (
    <>
      <SimpleGrid ml="5vw" cols={2}>
        <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
          <Menu.Target>
            <Link to="/">
              <img className="logo" src={rEbay} alt="ReBay" />
            </Link>
          </Menu.Target>
          <Menu.Dropdown>
            <Link to="/AddItem">
              <Button color="blue" ml="3rem" mt="2.1rem" radius="md">
                Add Item
              </Button>
            </Link>

            <Link to="/Quote">
              <Button color="blue" ml="2rem" mt="2.1rem" radius="md">
                Ask for quote
              </Button>
            </Link>
          </Menu.Dropdown>
        </Menu>
        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" ml="30vw" mt="2.1rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  );
}
export default Navbar;
