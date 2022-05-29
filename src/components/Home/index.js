import React,{useContext,useEffect} from 'react'
//import Recipes from "../Recipes";
import Recipe from "../Recipe";
import "../Recipes/style.css"
import "../../App.css"
import './style.css'

//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import {Oval } from  'react-loader-spinner'

//import context
import { myContext } from '../context/Context';


const Home = () => {
    const {fetchRecipesCategorie,recipesListe,loadingCategorie} = useContext(myContext)

    useEffect(() => {
     fetchRecipesCategorie()
    }, [fetchRecipesCategorie])
    
  console.log(recipesListe);
  console.log(loadingCategorie)
  return (
    <div className="recipe-loading">
    {
      loadingCategorie ?(
        <div  className="ovalSpinner">
        <Oval 
        color="yellow" height={150} 
        width={150}
        ariaLabel="Loading"
        //
        />
        </div>
      ):(
        <div className="recipe-liste">
        {recipesListe.map((recipeItem,key) => (
          <Recipe
            recipeItem={recipeItem}
            key={recipeItem.idCategory}
            recipesListe={recipesListe}
            //displayFromRecipesComp={displayFromRecipesComp}
          />
        ))}
      </div>

      )
    }
    </div>
  )
}

export default Home