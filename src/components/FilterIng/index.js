import React from "react";
import { useLocation } from "react-router-dom";
import Recipe from "../Recipe";
import {Oval } from  'react-loader-spinner'
//import {myContext} from "../context/Context"
import '../../App.css'
import "../Recipe/style.css";
import "antd/dist/antd.css";




const FilterIng = () => {
  const { state } = useLocation();
  console.log(state.listeMeal.listeFilterByMainIng);
  const arrayMeal = state.listeMeal.listeFilterByMainIng;
  //console.log(state.listeMeal.listeFilterByMainIng)
  console.log(arrayMeal)

  return (
    <div className="recipe-loading">
      {state.loadingMainIng ? (
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
        
      {//state.listeMeal.listeFilterByMainIng &&
        //state.listeMeal.listeFilterByMainIng.map((recipeItemIng) => (
          arrayMeal.map((recipeItemIng) => (
        <Recipe
            recipeItemIng={recipeItemIng}
            key={recipeItemIng.idMeal}
            listeFilterByMainIng={state.listeMeal.listeFilterByMainIng}
            filterByIng={state.filterByIng}
          />
        ))}
    </div>
    
      )}
    </div>
  );
};

export default FilterIng;
