
import '../RoadMap/RoadMap.css';


const Hito = (props) => {
    return (
      <div className="main">
        <h4 className="heading">Road to Fluency!</h4>
        <h3 className="heading">{props.road[0].title}</h3> {/* Access the title from props.road[0] */}
        <div className="container">
          <ul>
            {props.road.map((elemento, index) => (
              <li key={index}>
                <h3 className="title">{elemento.title}</h3>
                <p>{elemento.description}</p>
                <div>
                  {elemento.enlaces.map((enlace, i) => (
                    <a href={enlace.url} target="_blank" rel="noopener noreferrer" key={i}> {/* Add rel="noopener noreferrer" for security */}
                      <p>{enlace.titulo}</p>
                    </a>
                  ))}
                </div>
                <span className="circle"></span>
                <span className="date">{elemento.dateAdded}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Hito;