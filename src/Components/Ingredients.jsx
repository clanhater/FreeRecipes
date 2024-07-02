import Card from "./Card";

function Ingredients(ingredients) {

  return (
    <div className="container text-center">
      <div className="row align-items-center" >
        {ingredients.ingredients.map(({ strIngredient, strDescription }) => (
          <div key={strIngredient} className="col p-2" style={{"margin":"0 auto"}}>
            <Card title={strIngredient} description={strDescription} isMeals={false} url=" " />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ingredients;
