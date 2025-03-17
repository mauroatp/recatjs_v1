import { useContext, useState } from "react";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import "./Checkout.css"
import { Toaster, toast } from "sonner";

const Checkout = () => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const { cart, getTotalAmount, resetCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const funcionFormulario = (evento) => {
    evento.preventDefault();
    let total = getTotalAmount();
    let ordersCollection = collection(db, "orders");
    let order = {
      buyer: userInfo,
      items: cart,
      total,
    };

    let promesaCompra = addDoc(ordersCollection, order);
    promesaCompra.then((res) => {
      setOrderId(res.id);
      resetCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((elemento) => {
      let refDoc = doc(productsCollection, elemento.id);
      updateDoc(refDoc, { stock: elemento.stock - elemento.quantity });
    });

    toast.success('Compra finalizada')
  };

  const funcionInputs = (evento) => {
    const { value, name } = evento.target; // {}
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="checkout-container">
      {orderId ? (
          <div className="order-id-container">
          <h1 className="checkout-title">Compra finalizada!!</h1>
          <h3 className="order-id">Tu número de compra es: </h3><br/>
          <h2 className="order-id">{orderId}</h2>
        </div>
        ) : (
            <form onSubmit={funcionFormulario} className="checkout-form">
            <h1 className="checkout-title">Complete el formulario</h1>
          <input
            type="text"
            placeholder="nombre"
            name="nombre"
            onChange={funcionInputs}
            className="form-input"
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={funcionInputs}
            className="form-input"
          />
          <input
            type="text"
            placeholder="telefono"
            name="telefono"
            onChange={funcionInputs}
            className="form-input"
          />
          <div className="form-buttons">
            <button className="submit-button">Enviar</button>
            <button type="button" className="cancel-button">cancelar</button>
          </div>
        </form>
      )}
      <Toaster richColors  />
    </div>
  );
};

export default Checkout;
