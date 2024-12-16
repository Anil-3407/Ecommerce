import Nav from "./components/Nav/Nav"
import Home from "./components/home/Home"
import Product from "./components/product/Product"
import Counter from "./components/counter/Counter"
import Jewellery from "./components/product/category/jewellery/Jewellery"
import Men from "./components/product/category/men/Men"
import {Routes,Route} from "react-router-dom"
Nav
function App() {


  return (
    <div>
      <Nav />
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/product" element={<Product />}> 
         <Route path="men's" element={<Men/>}/>
         <Route path="jewellery" element={<Jewellery/>}/>

         </Route>
         <Route path="/counter" element={<Counter />}/>
        

        </Routes>
      

    </div>

  )
}

export default App
