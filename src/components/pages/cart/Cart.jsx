import { Link } from "react-router";

const Cart = () => {
  return (
    <div>
      <h1>Carrito</h1>
      <Link to="/checkout">Finalizar la compra</Link>
    </div>
  );
};

export default Cart;