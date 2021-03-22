import React, {useState} from "react";

function Search({searchCallback}) {
  const [searchTerm, setSearchTerm] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    searchCallback(searchTerm);
  }

  const handleSearch = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
