import React,{useState} from 'react'
import "./style.css"

const Recipe
 = ({recipeItem,recipesListe}) => {

  //const [recipeModal, setRecipeModal] = useState("")
  console.log(recipesListe)

  const handleClickReciprItem=(id)=>{
    console.log(id)
    const result = recipesListe.filter(item => item.idCategory === id)
   console.log(result)
   
      }
     
  //const [first, setfirst] = useState(second)
  //create Modal item
 

//console.log(recipeItem)
  return (
    <div className='recipe' onClick={()=>handleClickReciprItem(recipeItem.idCategory)}>
      <div className="recipe-card">
        <img src={recipeItem.strCategoryThumb} alt={recipeItem.strCategory}/>
      </div>
      <h3>{recipeItem.strCategory}</h3>
      {/*<p >{recipeItem.strCategoryDescription}</p>*/}
        
    </div>
  )
}

export default Recipe
