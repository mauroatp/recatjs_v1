import Navbar from "./components/layout/navbar/Navbar"
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router";
import { CartContextProvider } from "./context/CartContext";
import { Toaster } from 'sonner'
import Checkout from "./components/pages/checkout/checkout";

function App() {

  return (
    <BrowserRouter>
    <Toaster/>
      <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
      </CartContextProvider>
    </BrowserRouter>
    
  )
}

export default App
