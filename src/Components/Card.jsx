function Card({ title, description, isMeals, url }) {
  const src = `https://www.themealdb.com/images/ingredients/${title}.png`;
  const srcImage = isMeals ? url : src;
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 150) + "..."
      : description;

  return (
    <div
      className="card align-items-center "
      style={{
        width: "18rem",
        margin: "0 auto",
        color: "white",
        borderRadius: "25px",
        background: "linear-gradient(to bottom, #198754, #212529)",
      }}
    >
      <img
        src={srcImage}
        className="card-img-top"
        alt={title}
        style={{ maxWidth: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncatedDescription}</p>
      </div>
    </div>
  );
}

export default Card;
