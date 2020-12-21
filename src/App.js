import React from "react";
import HomePage from "./components/HomePage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/:id">
          <ProductPage/>
        </Route>
        <Route exact path="/checkout">
          {/* <BucketPage /> */}
        </Route>
      </Switch>
    </Router>
  )
  
}
export default App;
