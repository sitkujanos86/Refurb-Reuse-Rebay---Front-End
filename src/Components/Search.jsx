import { TextInput } from '@mantine/core';

function Search({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ width: '500px' }}>
        <TextInput
          variant="filled"
          size="md"
          radius="xl"
          label="Search"
          placeholder="by name or category"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}  
        />

</div>
  );
}

export default Search;
