import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Card, Image, Text, Button, Group } from "@mantine/core";

function DetailsPage({VITE_API_URL}) {
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
    <div className="itemCtn">
      {item && (
        <>
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
        </>
      )}
    </div>
  );
}

export default DetailsPage;
