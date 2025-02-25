import { Link } from "react-router";
import "./productCard.css";
export const ProductCard = ({ item }) => {
  return (
    <div className="card-container">
      <img className="card-image" src={item.imageUrl} alt={item.brand + " " + item.model} />
      <div className="card-content"> 
        <h3 className="card-brand">{item.brand} {item.model}</h3>
        <h4 className="card-category">{item.year}</h4>
        <h4 className="card-category">{item.category}</h4>
        <Link className="card-link" to={`/itemDetail/${item.id}`}>Ver detalle</Link>
      </div>
    </div>
  );
};