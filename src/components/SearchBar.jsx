import React, { useState } from 'react'

const SearchBar = () => {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(e.target.value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        className="search-bar"
        value={search}
        onChange={handleSearch}
      />
    </div>
  )
}

export default SearchBar
