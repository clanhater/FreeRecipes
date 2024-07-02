import Card from "./Card";

function Meals(props) {
  const { meals } = props;

  return (
    <div className="container text-center">
      <div className="row align-items-center">
        {meals.map(({ strMeal, idMeal, strMealThumb }) => (
          <div key={idMeal} className="col p-2" style={{ margin: "0 auto" }}>
            <Card title={strMeal} description="" isMeals={true} url={strMealThumb} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meals;
