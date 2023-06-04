import "./Banner.css";

const Banner = (props) => {
  // Usa props en la implementación del componente
  const { title, thumbnail, description } = props;

  return (
    <div className="hero-main vh-100 flex items-center justify-center" style={{ backgroundImage: `url(${thumbnail})` }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h1 className="text-white text-4xl font-bold">{title}</h1>
            <p className="text-white my-3">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
