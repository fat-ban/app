import React, { useEffect,useContext } from "react";
//import axios from 'axios'
//import Recipe from '../Recipe'
import "./style.css";
import "../Recipe/style.css";
import '../../App.css'

import { myContext } from "../context/Context";

import { Oval } from "react-loader-spinner";
//import { useLocation } from "react-router-dom";
//import

//loader spinner
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const FilterNameMeal = () =>
  //{loading,listeMealByName,setListeMealByName}
  {
    const { listeMealByName, loading, randomMeal } = useContext(myContext);
    //const location = useLocation();

    //console.log(location);
    console.log(listeMealByName)

    useEffect(() => {
      randomMeal();
    }, [randomMeal]);

    console.log(listeMealByName);

    return (
      <div className="recipeListeRandom">
        {loading ? (
          <div className="recipe-loading">
          <Oval
            color="yellow"
            height={150}
            width={150}
            ariaLabel="Loading"
            //
          />
          </div>
        ) : (
          <>
            
            {/*listeMealByName[0].strMeal*/}
              {listeMealByName.map((mealByName)=>(
        <div key={mealByName.idMeals} className="content-random-meal">
           <div className="recipe-card-random" >
           <img
             src={mealByName.strMealThumb}
             alt={mealByName.strMeal}
           />
           </div>
           <div className="title-recipe">
           
             {mealByName.strMeal}
           
           </div>
        
        </div>
         )
         )}
        </>
          
        )
        }
      </div>
           );
   
  };
  
    

export default FilterNameMeal;
