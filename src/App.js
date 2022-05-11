import {useEffect,useState} from "react"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Recipes from "./components/Recipes";
import axios from "axios"
import "./App.css"




function App() {

  const [recipesListe, setRecipesListe] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  
    
    const fetchRecipes = async ()=>{
     //const  url = "https://www.themealdb.com/api/json/v1/1/categories.php"
    
         await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
         
         .then ((res)=>{
           console.log(res)
           setRecipesListe(res.data.categories)
           setLoading(false)
          
         })
         /*if (!res){
              console.log("res don't exist...")
             
         }else {
             console.log(res)
             setRecipesListe(res.data.categories)
             console.log(loading)
             //console.log(recipes)
         }*/
     . catch( (error) =>{
       console.log(error.message)
     })
    
    }
    fetchRecipes()
  }, [])
  
  
  

  return (
    <div className="App">
     <Navbar/>
     <hr className="line-navbar"/>
     {loading || !recipesListe ? (
       <div>Loading....</div>
     ):(
      <Recipes recipesListe={recipesListe}/>
     )}
      
    
     <Footer/>
    </div>
  );
}

export default App;
