import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import React from 'react';
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import {Routes,Route} from "react-router-dom";

class App extends Component{
  render() {
  return(
      <React.Fragment>
        <Navbar/>
          <Routes>
              <Route exact path="/" element={<ProductList />}></Route>
              <Route path="/details" element={<Details />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="*" element={<Default />}></Route>
          </Routes>
      </React.Fragment>
  );
}
}

export default App;
