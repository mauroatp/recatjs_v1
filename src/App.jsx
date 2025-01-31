import Navbar from "./components/layout/navbar/Navbar"
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer"

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="saludos!!!!" />
    </div>
  )
}

export default App
