import { Link } from "react-router-dom";

function Offcanvas(categories) {
  return (
    <>
      <button
        className="btn btn-outline-success"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Categories
      </button>
      <div
        className="offcanvas text-bg-dark offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        style={{ width:"50vw"}}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            List of Categories
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="nav flex-column">
            {categories.recipe.categories.map(({ strCategory, idCategory }) => (
              <div key={idCategory} className="nav-item">
                <Link
                  style={{ color: "white" }}
                  className="nav-link btn btn-outline-success"
                  to={`/categories/${strCategory}`}
                >
                  {strCategory}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
