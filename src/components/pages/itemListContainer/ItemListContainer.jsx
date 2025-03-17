import { CiShoppingCart } from "react-icons/ci";
import { useEffect, useState } from "react";
import { products } from "../../../products";
import { useParams } from "react-router";
import { ProductCard } from "../../common/productCard/ProductCard";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        let refCollection = collection(db, "products");
        let consulta = refCollection;
        if (name) {
          consulta = query(refCollection, where("category", "==", name));
        }
        const getProducts = getDocs(consulta);
    
        getProducts
          .then((res) => {
            const nuevoArray = res.docs.map((elemento) => {
              return { id: elemento.id, ...elemento.data() };
            });
            setItems(nuevoArray);
          })
          .catch((error) => console.log(error));
      }, [name]);

const cargar = ()=> {
    let refCollection = collection(db, 'products');
    products.forEach((product)=>{
        addDoc(refCollection,product)
    });
}
    return (
        <div className="product-list-container">
        
             {/* <button onClick={cargar}>cargar productos</button>  */}
     <h2>Listado de autos</h2>
      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    

        </div>
    );
}

export default ItemListContainer
