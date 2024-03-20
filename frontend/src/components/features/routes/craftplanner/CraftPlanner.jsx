import { useState } from "react";
import RecipeSearch from "./components/RecipeSearch";
import RecipeTable from "./components/RecipeTable";

export default function CraftPlanner() {
  const url = "http://localhost:3000"

  const [recipes, setRecipes] = useState([])

  const handleSearch = async (e, params) => {
    const { searchString, searchProfession } = params

    e.preventDefault()
    const res = await fetch(`${url}/craftables/search/${searchString}.${searchProfession}`)
    const data = await res.json()
    console.log(data)
    setRecipes(data)
  }

  return (
    <main>
      <RecipeSearch handleSearch={handleSearch} recipes={recipes} />
      {/* CraftList */}
      <RecipeTable recipes={recipes} />
    </main>
  )
}