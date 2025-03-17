import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import "./ItemDetail.css"
import Counter from "../../common/counter/Counter";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const [item, setItem] = useState({});

  const { id } = useParams(); 

  useEffect(() => {
    let refCollection = collection(db, "products");
    let refDoc = doc(refCollection, id);

    const getProduct = getDoc(refDoc);
    getProduct
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="item-details-container">
      <h1 className="item-details-title">{item.brand} {item.model}</h1>
      <h1 className="item-details-title2">${item.price}</h1>
      <h1 className="item-details-title2">{item.year}</h1>
      <img className="item-details-image" src={item.imageUrl} alt={item.brand} />
      <Counter item={item} />
    </div>
  );
};

export default ItemDetail;