import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from "./Components/Category";
import Start from "./Components/Start";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/categories/:categoryId" element={<Category />}></Route>
        <Route path="/" element={<Start />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
