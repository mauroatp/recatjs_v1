import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import { ProductCard } from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { name } = useParams();

    useEffect(() => {

        const getProducts = new Promise((resolve, reject)=>{
            resolve( name ? products.filter((elemento) => elemento.category === name):products);
        
        });
        
    getProducts
    .then((res) => setItems(res))
    .catch((error) => console.log(error));
}, [name]);


    return (
        <section>
      <h2>Listado de autos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </section>
    )
}

export default ItemListContainer
