import { useState } from 'react'
import './App.css'
import NamesList from './components/NamesList'
// import SearchBar from './components/SearchBar'
import NameData from './data/babyNamesData.json'
NameData.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

function App() {
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }

  let names = NameData.filter((name) =>
      name.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="App">
      {/* <SearchBar /> */}
      <input type="search" value={search} onChange={handleChange} />
      <NamesList babyNames={names} />
    </div>
  )
}

export default App
