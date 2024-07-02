import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";
import Offcanvas from "./Offcanvas";

function Navigation(categories) {
  

  return (
    <>
      <nav
        className="navbar bg-dark border-bottom border-body position-sticky top-0 z-2"
        data-bs-theme="dark"
      >
        <div className="container ">
          <Link className="navbar-brand" to={"/"}>
            <img
              src={logoImage}
              alt="Logo"
              width="32"
              height="32"
              className="d-inline-block align-text-top "
            />
            Free Recipes
          </Link>
          <Offcanvas recipe={categories} />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
