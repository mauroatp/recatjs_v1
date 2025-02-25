import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import "./ItemDetail.css"

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams(); 

  useEffect(() => {
    let product = products.find((elemento) => elemento.id === id);
    setItem(product);
  }, [id]);

  return (
    <div className="item-details-container">
      <h1 className="item-details-title">{item.brand} {item.model}</h1>
      <h1 className="item-details-title2">${item.price}</h1>
      <h1 className="item-details-title2">{item.year}</h1>
      <img className="item-details-image" src={item.imageUrl} alt={item.brand} />
    </div>
  );
};

export default ItemDetail;