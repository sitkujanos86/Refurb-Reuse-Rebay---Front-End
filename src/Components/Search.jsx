function Search({ searchTerm, setSearchTerm }) {
  return (
    <div className="searchCtn">
      <div className="outerDiv">
        <div className="innerDiv">
          <span className="spanSearch">Search</span>
        </div>
        <input
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          type="text"
          className="searchBar"
        />
      </div>
    </div>
  );
}

export default Search;
