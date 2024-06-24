import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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
      style={{ height: "350px" }}
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner ">
        {imagenes.map(({ strMealThumb, idMeal, strMeal }, index) => (
          <div
            style={{
              height: "350px",
              borderRadius: "25px",
            }}
            key={idMeal}
            className={index == 0 ? "carousel-item active " : "carousel-item"}
          >
            <Link to={`/meals/${strMeal}`}>
              <img
                style={{
                  height: "350px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  marginLeft: "12.5%",
                  backgroundSize: "cover"
                }}
                src={strMealThumb}
                alt={`Imagen ${index + 1}`}
                className="d-block w-75"
              />
            </Link>
          </div>
        ))}
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
