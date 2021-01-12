import React from "react";
import HomePage from "./components/HomePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from "./pages/product";
import BucketPage from "./pages/bucket";
import BucketContext from "./pages/bucket/context/bucket-context";

function App() {

  const [products, setProducts] = React.useState([])

  const add = (product) => { setProducts([...products, product]) }

  const remove = (index) => { 
    const tempProd = [...products]
    tempProd.splice(index - 1, 1)
    setProducts([...tempProd])
  }
  // const remove = (index) => { setProducts( [...products].reduce(acc,curValue))}



  return (
    <BucketContext.Provider value={{products, add, remove}} >
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact path="/checkout">
            <BucketPage />
          </Route>
        </Switch>
      </Router>
    </BucketContext.Provider>
  )
}

export default App;
