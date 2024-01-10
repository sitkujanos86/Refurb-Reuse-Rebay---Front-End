import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Image, Text, Button, Group, Center } from "@mantine/core";

function DetailsPage({ VITE_API_URL }) {
  const [item, setItem] = useState({});
  const { itemId } = useParams();

  const navigate = useNavigate();

  const getSingleItem = () => {
    axios
      .get(`${VITE_API_URL}/${itemId}`)
      .then((response) => setItem(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSingleItem();
  }, [itemId]);

  return (
    <Center style={{ flexDirection: "column" }}>
      <h3>Product Details</h3>
      <Center style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
        {item && (
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src={item.picture}
                style={{ height: "500px", width: "400px" }}
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
              style={{ width: "400px" }}
              mt="md"
              radius="md"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </Card>
        )}
      </Center>
    </Center>
  );
}

export default DetailsPage;
