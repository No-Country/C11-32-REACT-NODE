import Articulo from './Articulo';
import { data } from "../../constants/data.ts";

const ContainerBlog = () => {
  return (
    <>
      <div className="card-container flex flex-wrap justify-center">
        {data.map((item) => (
          <Articulo
            key={item.id}
            thumbnail={item.thumbnail}
            title={item.title}
            subtitle={item.subtitle}
            enlaceblog={item.enlaceblog}
            description={item.description}
            channel={item.channel}
          />
        ))}
      </div>
    </>
  );
};

export default ContainerBlog;
