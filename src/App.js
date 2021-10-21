import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import ShopPage from "./components/ShopPage";
import ShoppingCart from "./components/ShoppingCart";
import PageNotFound from "./components/PageNotFound";

import './styles/App.css';

export default function App() {

  const [cart, setCart] = useState([])

  return (
    <BrowserRouter>

        <NavBar cart={cart} />
        
        <Switch>

            <Route exact path="/" component={HomePage} />

            <Route path="/shop">
              <ShopPage cart={cart} setCart={setCart} />
            </Route>

            <Route path="/cart">
              <ShoppingCart cart={cart} setCart={setCart} />
            </Route>

            <Route component={PageNotFound} />

        </Switch>
    </BrowserRouter>
  );
};