import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./Components/Category";
import Start from "./Components/Start";
import Meal from "./Components/Meal";
import Flag from "./Components/Flag"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/categories/:categoryId" element={<Category />}></Route>
        <Route path="/" element={<Start />}></Route>
        <Route path="/meals/:mealId" element={<Meal />}></Route>
        <Route path="/flags/:strArea" element={<Flag />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
