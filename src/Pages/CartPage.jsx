import React from "react";
import { notifications } from "@mantine/notifications";
import axios from "axios";
import { Button, Card, Group, Image, SimpleGrid, Text } from "@mantine/core";

function CartPage({ cartItems, setCartItems, VITE_API_URL }) {
  const removeItem = (itemId) => {
    const filteredItems = cartItems.filter((item) => {
      return item.id !== itemId;
    });

    setCartItems(filteredItems);
  };

  const deleteItemFromDatabase = (itemId) => {
    return axios.delete(`${VITE_API_URL}/${itemId}`);
  };

  const deleteAll = async () => {
    if (cartItems.length !== 0) {
      try {
        // Use Promise.all to handle multiple asynchronous delete operations
        await Promise.all(
          cartItems.map((item) => deleteItemFromDatabase(item.id))
        );
        setCartItems([]); // Clear all items from the cart
        notifications.show({
          title: "Purchase completed! You own us money!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Error deleting items:", error);
        notifications.show({
          title: "Error completing the purchase!",
        });
      }
    } else {
      notifications.show({
        title: "Cart is empty!",
      });
    }
  };

  const sumCart = cartItems.reduce((sum, currentItem) => {
    return sum + parseInt(currentItem.price);
  }, 0);

  return (
    <div>
      <h1>Your cart</h1>
      <SimpleGrid cols={3}>
        {cartItems.map((item) => (
          <div key={item.id}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image
                  src={item.picture}
                  height="400vw"
                  width="33vw"
                  alt="Item picture"
                />
              </Card.Section>
              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{item.name}</Text>
              </Group>
              <Text size="sm" c="dimmed">
                {item.description}
              </Text>
              <Text size="sm" c="dimmed">
                {item.price}€
              </Text>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => removeItem(item.id)}
              >
                Remove item
              </Button>
            </Card>
          </div>
        ))}
      </SimpleGrid>
      <h2>Total €{sumCart}</h2>

      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="md"
        onClick={() => deleteAll()}
      >
        Buy!
      </Button>
    </div>
  );
}

export default CartPage;
