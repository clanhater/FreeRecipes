import logoImage from "../assets/logo.png";
import Offcanvas from "./Offcanvas";

function Navigation(categories) {
  return (
    <>
      <nav className="navbar bg-dark border-bottom border-body position-sticky top-0 z-2" data-bs-theme="dark">
        <div className="container ">
          <a className="navbar-brand" href="#">
            <img
              src={logoImage}
              alt="Logo"
              width="32"
              height="32"
              className="d-inline-block align-text-top "
            />
            Free Recipes
          </a>
          <Offcanvas recipe={categories} />
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for a recipe . . ."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
