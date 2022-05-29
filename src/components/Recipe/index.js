import React, { useState } from "react";
import { Modal, Button } from "antd";
import "antd/dist/antd.css";
import "./style.css";

const Recipe = ({
  filterByIng,
  recipeItemIng,
  recipeItem,
  listeFilterByMainIng,
  recipesListe,
  //listeMealByName,
  //mealByName,
}) => {
  const [recipeModal, setRecipeModal] = useState("");
  //console.log(listeFilterByMainIng);
  //console.log(listeMealByName)
  //console.log(mealByName)
  //console.log(recipeItemIng)

  const [isModalVisible, setIsModalVisible] = useState(false);
  ///////////////////
  const handleClickRecipeItem = (id) => {
    //console.log();
    //console.log(listeFilterByMainIng.filter((item) => item.idMeal === id));

    const result = filterByIng
      ? listeFilterByMainIng.filter((item) => item.idMeal === id)
      : recipesListe.filter((item) => item.idCategory === id);
    console.log(result);
    setRecipeModal(result);
    //setIsModalVisible(true);
    //console.log(recipeModal)
  };
  //console.log(recipeModal);
  //////////////
  const showModal = () => {
    setIsModalVisible(true);
    //console.log(object);
  };
  ////////////////
  const handleOk = () => {
    setIsModalVisible(false);
  };
  //////////////////
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  //const [first, setfirst] = useState(second)
  //create Modal item

  console.log(recipeItem)

  return (
    <>
      <div
        className={filterByIng ? "recipeByIng" : "recipe"}
        onClick={() =>
          handleClickRecipeItem(
            filterByIng ? recipeItemIng.idMeal : recipeItem.idCategory
          )
        }
        //onFocus
      >
        <div className="recipe-card">
          <img
            src={
              filterByIng
                ? recipeItemIng.strMealThumb
                : recipeItem.strCategoryThumb
            }
            alt={filterByIng ? recipeItemIng.strMeal : recipeItem.strCategory}
          />
        </div>
        <div className="title-recipe">
          <h3>
            {filterByIng ? recipeItemIng.strMeal : recipeItem.strCategory}
          </h3>
        </div>

        {/*<p >{recipeItem.strCategoryDescription}</p>*/}
        <Button
          className=//{filterByIng ? "btn" : 
          "btn "
          //button-filter"
        //}
          type="default"
          onClick={showModal}
        >
          show more
        </Button>
      </div>
      {/*Modal */}
      {isModalVisible && (
        <Modal
          title={
            filterByIng ? recipeModal[0].strMeal : recipeModal[0].strCategory
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div className="card-modal">
            <div className="card-recipe">
              <img
                src={
                  filterByIng
                    ? recipeModal[0].strMealThumb
                    : recipeModal[0].strCategoryThumb
                }
                alt={
                  filterByIng
                    ? recipeItemIng.strCategory
                    : recipeItem.strCategory
                }
                className={filterByIng ? "modalImg" : "img"}
              />
            </div>
          </div>
          <div className= {filterByIng ? "title-recipe":"description-recipe"}>
            {filterByIng
              ? recipeModal[0].strMeal
              : recipeModal[0].strCategoryDescription}
          </div>
        </Modal>
      )}
    </>
  );
};

export default Recipe;
