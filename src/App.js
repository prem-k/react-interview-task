import React from 'react';

import {Router, Route, browserHistory} from 'react-router'; 
//import logo from './logo.svg';
import './App.css';
import Menu from "./Layout/Menu";
import Header from "./Layout/Header";
import Layout from "./Layout/Layout";
import Footer from "./Layout/Footer";
import Home from "./Components/Home";
import Product from "./Components/Products";

function App() {
  return (
    <div className="App">
      <Menu ></Menu>
      <Header></Header>
      <Router history={browserHistory}>
        <Route path={"/"} component={Home}>
          <Route path={"home"} component={Home}></Route>
        </Route>
        <Route path={"/products"} component={Product}></Route>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
