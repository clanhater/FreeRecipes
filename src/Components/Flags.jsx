import { Link } from "react-router-dom";

function Flags() {
  const flags = [
    {strArea: "gb"},
    {strArea: "us"},
    {strArea: "fr"},
    {strArea: "ca"},
    {strArea: "jm"},
    {strArea: "cn"},
    {strArea: "nl"},
    {strArea: "eg"},
    {strArea: "gr"},
    {strArea: "in"},
    {strArea: "ie"},
    {strArea: "it"},
    {strArea: "jp"},
    {strArea: "kn"},
    {strArea: "my"},
    {strArea: "mx"},
    {strArea: "ma"},
    {strArea: "hr"},
    {strArea: "no"},
    {strArea: "pt"},
    {strArea: "ru"},
    {strArea: "ar"},
    {strArea: "es"},
    {strArea: "sk"},
    {strArea: "th"},
    {strArea: "sa"},
    {strArea: "vn"},
    {strArea: "tr"},
    {strArea: "sy"},
    {strArea: "dz"},
    {strArea: "tn"},
    {strArea: "pl"},
    {strArea: "ph"},
    {strArea: "UA"},
  ];

  console.log(flags)

  return (
    <div className="row">
      <div className="col">
        {flags.map(({ strArea }) => (
          <div className="d-inline">
            <Link to={`/flags/${strArea}`}>
              <img
                src={`https://www.themealdb.com//images/icons/flags/big/64/${strArea}.png`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flags;
