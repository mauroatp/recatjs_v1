import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./cartwidget.css"
import { CartContext } from "../../../context/CartContext";

function Cartwidget() {

    const{ getTotalQuantity } = useContext(CartContext);
    let totalCart = getTotalQuantity();

    return (
        <div className="cardCart">
            <CiShoppingCart className="carrito" />
            <h3 className="cantidad">{totalCart}</h3>
        </div>
    )
}

export default Cartwidget
