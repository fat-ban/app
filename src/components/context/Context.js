import React,{createContext,useCallback,useState} from 'react'
import axios from 'axios'
//import { useNavigate } from 'react-router-dom';
export const myContext = createContext();


const Context = ({children}) => {
//state
//const navigate = useNavigate()
  const [recipesListe, setRecipesListe] = useState([])
  const [loadingCategorie, setLoadingCategorie] = useState(true)
  const [listeFilterByMainIng, setListeFilterByMainIng] = useState("");
  
const [loadingMainIng, setLoadingMainIng] = useState(true)
const [listeMealByName, setListeMealByName] = useState([])
  const [loading, setLoading] = useState(true) 
//get all data from mealdb
  const fetchRecipesCategorie = useCallback (async ()=>
  {
    
        await axios
         .get("https://www.themealdb.com/api/json/v1/1/categories.php")
         
         .then ((res)=>{
           console.log(res)
           setRecipesListe(res.data.categories)
           setLoadingCategorie(false)
          
         })
         
     . catch( (error) =>{
       console.log(error.message)
     })
    
  }, [])

//get recipes by main ingredient
const filterIngredient = useCallback((filterByMainIng) => {
  axios
    .get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${filterByMainIng}`
    )
    //update state
    .then((res) => {
      //console.log(res.data.meals);
      setListeFilterByMainIng(res.data.meals);
      //setShowModalIng(false);
      setLoadingMainIng(false)

      //setDisplayFromFilterComp(true)

      //navigate('/filterIng',{listeMeal:{listeFilterByMainIng}})
    })
    .catch((err) => {
      console.log(err.message);
    });
}, []);

  //random Meal
  const randomMeal = useCallback( () => 
  {
     axios
      .get("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => {
        console.log(res);
        setListeMealByName(res.data.meals);
        setLoading(false);

        /*navigate("/filterNameMeal", {
          state: { 
        listeMealByName:{listeMealByName},
        loading:{loading}
        },
      })*/
    })
      .catch((err) => {
        console.log(err.massage);
      });
  }, 
  []);

  return (
    <myContext.Provider value={
      {fetchRecipesCategorie,
      recipesListe,
      loadingCategorie,
      filterIngredient,
      listeFilterByMainIng,
      setListeFilterByMainIng,
      //showModalIng,
      loadingMainIng,
      listeMealByName,
      loading,
      randomMeal

    }
      } >
        {children}
    </myContext.Provider>
  )
}

export default Context;