import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from "./Layout/Menu";
import Header from "./Layout/Header";
import Layout from "./Layout/Layout";
import Footer from "./Layout/Footer";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Layout />
      <Footer />
    </div>
  );
}

export default App;
