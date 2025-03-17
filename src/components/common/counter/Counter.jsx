import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Toaster, toast } from "sonner";
import "./Counter.css"
const Counter = ({ item }) => {
  const [contador, setContador] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (item.stock > contador) {
      setContador(contador + 1);
    } else {
      //alert("stock maximo");
      toast.error("stock maximo")
    }
  };
  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    let obj = { ...item, quantity: contador };
    addToCart(obj);
    toast.success('Producto agregado')

// ...


  };

  return (
    <div className="counter-container">
      <button className="counter-button counter-decrement" onClick={restar}>
        -
      </button>
      <h2 className="counter-value">{contador}</h2>
      <button className="counter-button counter-increment" onClick={sumar}>
        +
      </button>
      <button className="counter-button counter-add" onClick={onAdd}>
        Agregar al carrito
      </button>
      <Toaster richColors  />
    </div>
  );
};

export default Counter;
