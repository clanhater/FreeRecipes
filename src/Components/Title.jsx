function Title(props) {
  const { title } = props;
  return (
    <div className="section-title p-2">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <div style={{width:"100%", height:"3px", backgroundColor:"black"}}></div>
            <h2 style={{fontSize:"32px"}}>{title}</h2>
            <div style={{width:"100%", height:"3px", backgroundColor:"black"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Title;
