import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";

const Carousel = () => {
  const [imagenes, setImagenes] = useState([]);
  const numberOfImages = 15;

  useEffect(() => {
    const fetchImages = async () => {
      const mealTemporales = [];
      for (let i = 0; i < numberOfImages; i++) {
        const response = await axios.get(
          "https://themealdb.com/api/json/v1/1/random.php"
        );
        const meal = response.data.meals[0];
        verifyId(meal.idMeal, mealTemporales);
        mealTemporales.push(meal);
      }
      setImagenes(mealTemporales);
    };

    fetchImages();
  }, []);

  const verifyId = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].idMeal === id) {
        return true;
      }
    }
    return false;
  };

  if (!imagenes[14]) {
    return <Spinner />;
  }

  return (
    <div
      style={{ height: "350px", paddingRight: "10px" }}
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        {imagenes.map(
          ({ strMealThumb, idMeal, strMeal, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6 }, index) => (
            <div
              style={{
                padding: "0 12.5%",
                height: "350px",
                width: "100%",
                borderRadius: "25px",
              }}
              key={index}
              className={index == 0 ? "carousel-item active " : "carousel-item"}
            >
              <div className="d-flex">
                <img
                  style={{
                    width: "55%",
                    maxHeight: "350px",
                    borderTopLeftRadius: "25px",
                    borderEndStartRadius: "25px",
                  }}
                  src={strMealThumb}
                  alt={`Imagen ${index + 1}`}
                  className="d-block"
                />
                <div
                  className=""
                  style={{
                    width: "45%",
                    borderTopRightRadius: "25px",
                    borderEndEndRadius: "25px",
                    background: "linear-gradient(to right, #198754, #212529)",
                    padding: "5px",
                  }}
                >
                  <h4 className="text-white font-monospace">{strMeal}</h4>
                  
                  <div
                    style={{
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#000",
                    }}
                  ></div>
                  <div className="container">
                    <ul className="text-white font-monospace list-group" style={{fontSize: "22px"}}>Ingredients
                      <li className="list-group-item" style={{fontSize: "15px"}}>{strIngredient1}</li>
                      <li className="list-group-item" style={{fontSize: "15px"}}>{strIngredient2}</li>
                      <li className="list-group-item" style={{fontSize: "15px"}}>{strIngredient3}</li>
                      <li className="list-group-item" style={{fontSize: "15px"}}>{strIngredient4}</li>
                      <li className="list-group-item" style={{fontSize: "15px"}}>{strIngredient5}</li>
                      <li className="list-group-item" style={{fontSize: "15px"}}>{strIngredient6}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <button
        className="carousel-control-prev z-1"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next z-1"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
