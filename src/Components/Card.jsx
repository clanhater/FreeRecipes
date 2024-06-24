function Card({ title, description }) {
  const srcImage = `https://www.themealdb.com/images/ingredients/${title}.png`;
  const truncatedDescription =
    description.length > 100
      ? description.substring(0, 150) + "..."
      : description;

  return (
    <div className="card align-items-center bg-dark" style={{ width: "18rem", margin:"0 auto", color:"white", borderRadius:"25px" }}>
      <img src={srcImage} className="card-img-top" alt={title} style={{maxWidth:"200px"}} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{truncatedDescription}</p>
      </div>
    </div>
  );
}

export default Card;
