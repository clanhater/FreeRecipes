import Navigation from "./Navigation";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import Title from "./Title";
import Ingredients from "./Ingredients";
import Flags from "./Flags";
import Footer from "./Footer";

function Start() {
  const [categoriesData, setCategoriesData] = useState(null);
  const [ingredients, setIngredients] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => {
        setCategoriesData(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });

    axios
      .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => {
        const imagenesTemporales = response.data.meals.slice(0, 12);
        setIngredients(imagenesTemporales);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, []);

  // /images/icons/flags/big/64/gb.png

  if (!categoriesData || !ingredients) {
    return <Spinner />;
  }

  return (
    <>
      <Navigation categories={categoriesData} />
      <div className="container text-center p-3">
        <Title title="Explore Our Recipes" />
        <Carousel />
      </div>
      <div className="text-center container p-3">
        <Title title="Something our Ingredients" />
        <Ingredients ingredients={ingredients} />
      </div>
      <div className="text-center container p-3">
        <Title title="All Country Recipes" />
        <Flags />
      </div>
      <Footer />
    </>
  );
}

export default Start;
