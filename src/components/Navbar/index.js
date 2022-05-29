import React, { useState,useContext } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";
//import FilterIng from "../FilterIng";
import { Modal, Button, Input } from "antd";
import "antd/dist/antd.css";
//context
import {myContext} from '../context/Context'

const Navbar = () => {
  //console.log(myContext);

  const { listeFilterByMainIng,filterIngredient,loadingMainIng} = useContext(myContext)

  //const [filterByIng, setFilterByIng] = useState(false)
  const [showModalIng, setShowModalIng] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  

  const [filterByMainIng, setFilterByMainIng] = useState("");
  
  const navigate = useNavigate();

  const handleOk = () => {
    setIsModalVisible(false);
    console.log(filterByMainIng);
    filterIngredient(filterByMainIng);
    setFilterByMainIng('')
    navigate("/filterIng", {
      state: { listeMeal: { listeFilterByMainIng }, filterByIng:true,loadingMainIng},
    });
  };

  //console.log(listeFilterByMainIng)

  const handleCancel = () => {
    setIsModalVisible(false);
    setFilterByMainIng('')
  };
  //////////click filter by main ing
  const handleClick = () => {
    setShowModalIng(true);
    setIsModalVisible(true);
    //setFilterByMainIng('')
  };

  //click filter by name
  const handleClickByname = () => {
   
  navigate('/filterNameMeal')
  };

  /*const handleOnChangeModal =(e)=>{
      showModalIng ? 
         setFilterByMainIng(e.target.value)
         :
         setFilterMealByName(e.target.value)
    }*/

  return (
    <div className="navbar">
      <div className="logo">Meals React App</div>

      <div className="menu">
        <button className="btn">
          <Link to="/">Home</Link>
        </button>

        <Button className="btn" type="default" onClick={handleClick}>
          {/*<Link to="/filterIng" listeFilterByMainIng={listeFilterByMainIng}>*/}
          Filter by main ingredient
          {/*</Link>*/}
        </Button>

        <Button
          className="btn"
          type="default"
          onClick={handleClickByname}
          //onClick={""}
         // {/*randomMeal*/}
        >
          {/*<Link to="/filterNameMeal">*/}
          Rendam Meal
          {/*</Link>*/}
        </Button>
      </div>

      {/*showModalIng && <FilterIng showModalIng={showModalIng}/>*/}
      {showModalIng && (
        <>
          <Modal
            title="Filter Recipe By main Ingredient"
            //{showModalIng ? "Search by the main Ingredient" :"Search by name Meal"}
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            width="400px"
            color="red"
            //centered={true}
            //style={{border:"1px solid #red"}}
          >
            <Input
              placeholder="Enter the main Ingredient"
              //{showModalIng ? "Enter the main Ingredient" : "Enter the name"}
              value={filterByMainIng}
              //{showModalIng ? {filterByMainIng} :{filterMealByName,}}
              onChange={(e) => setFilterByMainIng(e.target.value)}
            />
          </Modal>
        </>
      )}
    </div>
  );
};

export default Navbar
