import { CiShoppingCart } from "react-icons/ci";
import "./cartwidget.css"

function Cartwidget() {
    return (
        <div className="cardCart">
            <CiShoppingCart className="carrito" />
            <h3 className="cantidad">1</h3>
        </div>
    )
}

export default Cartwidget
