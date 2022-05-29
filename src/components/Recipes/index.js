import React
//,{useState}
 from "react";
import Recipe from "../Recipe";
import "./style.css";

const Recipes = ({ recipesListe }) => {

  //const [displayFromRecipesComp, setDisplayFromRecipesComp] = useState(false)
  //const [recipeModal, setRecipeModal] = useState("")
  console.log(recipesListe)

  /* const handleClickReciprItem=(id)=>{
    setRecipeModal(recipesListe.filter((item)=>
      item.idCategory === id
    ))
    
      }*/
  //console.log(recipeModal)

  return (
    <div className="recipe-liste">
      {recipesListe.map((recipeItem) => (
        <Recipe
          recipeItem={recipeItem}
          key={recipeItem.idCategory}
          recipesListe={recipesListe}
          //displayFromRecipesComp={displayFromRecipesComp}
        />
      ))}
    </div>
  );
};

export default Recipes;
