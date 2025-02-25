import Navbar from "./components/layout/navbar/Navbar"
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from "react-router";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="*" element={<h2>404 Not found</h2>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
