import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Title from "./Title";
import Navigation from "./Navigation";
import axios from "axios";
import Spinner from "./Spinner";
import Meals from "./Meals";
import Footer from "./Footer"

function Category() {
  const { categoryId } = useParams();
  const [categoriesData, setCategoriesData] = useState(null);
  const [meals, setMeals] = useState(null);

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
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`)
      .then((response) => {
        setMeals(response.data.meals);
      })
      .catch((error) => {
        console.error("Error fetching recipe data:", error);
      });
  }, []);

  if (!categoriesData || !meals) {
    return <Spinner />;
  }

  return (
    <>
      <Navigation categories={categoriesData} />
      <Title title={categoryId} />
      <Meals meals={meals} />
      <Footer />
    </>
  );
}

export default Category;
