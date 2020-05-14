import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import Contact from "./pages/ContactPage";
import SingleProduct from "./pages/SingleProductPage";
import Cart from "./pages/CartPage";
import NotFound from "./pages/NotFoundPage";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/products/:id'>
          <SingleProduct />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
