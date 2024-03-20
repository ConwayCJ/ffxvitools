import { useEffect, useState } from "react";
import { Mask, Table } from "react-daisyui";

export default function RecipeTable({ recipes }) {

  const [currentRecipes, setCurrentRecipes] = useState([])

  useEffect(() => {
    setCurrentRecipes(recipes)
    console.log(currentRecipes)
  }, [currentRecipes, recipes])

  return (
    <div className="overflow-x-auto max-h-[50vh] my-4 table-xs">

      <Table className="w-full" zebra border="primary">
        <Table.Head>
          <span>#</span>
          <span>Details</span>
          <span>Class</span>
          <span>Req Level</span>
          <span>Add to List</span>
        </Table.Head>
        <Table.Body>
          {recipes.map((recipe, index) => (
            <Table.Row key={index}>
              <span>{index}</span>
              <div className="flex items-center space-x-3 truncate">
                <Mask variant="squircle" src="http://daisyui.com/tailwind-css-component-profile-2@56w.png" />
                <div className="w-max">
                  <div className="font-bold text-sm">{recipe.craftable_name.trim()}</div>
                  <div className="text-xs opacity-50">{recipe.craftable_type}</div>
                </div>
              </div>
              <span>{recipe.craftable_profession}</span>
              <span>{recipe.craftable_recipe_req_level}</span>
              <span>+</span>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}