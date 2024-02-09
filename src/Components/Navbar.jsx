import { Button, Menu, Text, ThemeIcon } from "@mantine/core";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { IconShoppingCart } from "@tabler/icons-react";
import rEbay from "../assets/images/Rebay Logo.png";
import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

function Navbar() {
  const { width } = useViewportSize();
  const [opened, { toggle }] = useDisclosure();

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
          <ThemeIcon radius="md" size="lg" color="orange" mt="2.1rem" ml="7rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  ) : (
    <>
      <SimpleGrid ml="5vw" cols={2}>
        <div className="logoBurger">
          <Menu shadow="md" width={150}>
            <Menu.Target>
              <Burger
                opened={opened}
                onClick={toggle}
                aria-label="Toggle navigation"
              />
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
          <Link to="/">
            <img className="logoSm" src={rEbay} alt="ReBay" />
          </Link>
        </div>
        <Link to="/Cart">
          <ThemeIcon radius="md" size="lg" color="orange" ml="30vw" mt="1.3rem">
            <IconShoppingCart size="2rem" stroke={1.5} />
          </ThemeIcon>
        </Link>
      </SimpleGrid>
    </>
  );
}
export default Navbar;
