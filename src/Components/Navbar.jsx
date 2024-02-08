import { Button, Menu, Text, ThemeIcon } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import rEbay from "../assets/images/Rebay Logo.png";
import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

function Navbar() {
  const { width } = useViewportSize();

  return width > 1200 ? (
    <>
      <SimpleGrid ml="5vw" cols={5}>
        <Link to="/">
          <img className="logo" src={rEbay} alt="ReBay" />
        </Link>

        <Link to="/About">
          <Text mt="2.2rem" fw={500} ta="center">
            About Us
          </Text>
        </Link>

        <Link to="/AddItem">
          <Text mt="2.2rem" fw={500} ta="center">
            Add item
          </Text>
        </Link>

        <Link to="/Quote">
          <Text mt="2.2rem" fw={500} ta="center">
            Ask for quote
          </Text>
        </Link>

        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" mt="2.1rem" ml="6rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  ) : (
    <>
      <SimpleGrid ml="5vw" cols={3}>
        <Link to="/">
          <img className="logoSm" src={rEbay} alt="ReBay" />
        </Link>
        <Menu
          trigger="click-hover"
          openDelay={100}
          closeDelay={400}
          shadow="md"
          width={150}
        >
          <Menu.Target>
            <Text mt="1.5rem" fw={500} ta="center">
              Menu
            </Text>
          </Menu.Target>
          <Menu.Dropdown>
            <Link to="/About">
              <Text mt="1rem" fw={500} ta="center">
                About Us
              </Text>
            </Link>
            <Menu.Divider />
            <Link to="/AddItem">
              <Text mt="1rem" fw={500} ta="center">
                Add item
              </Text>
            </Link>
            <Menu.Divider />
            <Link to="/Quote">
              <Text my="1rem" fw={500} ta="center">
                Ask for quote
              </Text>
            </Link>
          </Menu.Dropdown>
        </Menu>
        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" ml="15vw" mt="1.3rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  );
}
export default Navbar;
