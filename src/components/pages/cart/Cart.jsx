import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Toaster, toast } from 'sonner'
import "./Cart.css";

const Cart = () => {

  const {cart, resetCart, removeById, getTotalAmount} = useContext(CartContext);

  let total= getTotalAmount();
  let removeByID = (id)=>{
    removeById(id);
    toast.error('Producto eliminado')
  }
  let reset = ()=>{
    resetCart();
    toast.error('Carrito vaciado')
  }
  return (
    <div className="cart-container">
      <h1 className="cart-title">Carro de compra</h1>
      <div className="cart-items">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-item">
              <img src={product.imageUrl} alt={product.title} className="item-image" />
              <h2 className="item-price">{product.brand} {product.model}</h2>
              <h2 className="item-title">{product.title}</h2>
              <h3 className="item-price">${product.price}</h3>
              <h3 className="item-quantity">x{product.quantity}</h3>
              <button className="item-remove" onClick={() => removeByID(product.id)}>
                Eliminar
              </button>
            </div>
          );
        })}
      </div>
      <h2 className="cart-total">El total a pagar es ${total}</h2>
      <button className="cart-reset" onClick={reset}>
        Vaciar carrito
      </button>
      <Link to="/checkout" className="cart-checkout">
        Finalizar compra
      </Link>
      <Toaster richColors />
    </div>
  );
};

export default Cart;