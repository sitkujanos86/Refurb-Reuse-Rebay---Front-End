import { TextInput, Center } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

function Search({ searchTerm, setSearchTerm }) {
  return (
    <Center style={{ padding: "2rem" }}>
      <TextInput
        leftSection={<IconSearch size="1rem" stroke={1.5} />}
        style={{ width: "500px" }}
        variant="filled"
        size="md"
        radius="xl"
        placeholder="Search by name or category"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
    </Center>
  );
}

export default Search;
