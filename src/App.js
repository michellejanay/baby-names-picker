import { useState, useEffect } from 'react'
import './App.css'
import NamesList from './components/NamesList'
// import SearchBar from './components/SearchBar'
import NameData from './data/babyNamesData.json'
NameData.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0))

function App() {
  const [babyNames, setBabyNames] = useState(NameData)
  const [search, setSearch] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
    console.log(e.target.value)

    let names = babyNames.filter((name) =>
      search === '' ? babyNames : name.name.toLowerCase().includes(search.toLowerCase())
    )
    

    setBabyNames(() => names)
    console.log(names)
  }

  useEffect(() => {}, [])

  return (
    <div className="App">
      {/* <SearchBar /> */}
      <input type="search" value={search} onChange={handleChange} />
      <NamesList babyNames={babyNames} />
    </div>
  )
}

export default App
