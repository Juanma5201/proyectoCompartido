import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./app.css";
import Contacto from "./components/pages/Contacto/Contacto";

ReactDOM.render(
  <React.StrictMode>
  <Header />
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contacto />} />
    </Routes>
  </BrowserRouter>
  <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);