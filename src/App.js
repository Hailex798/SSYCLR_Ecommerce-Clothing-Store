import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./files/GlobalStyle"
import Home from "./files/Home";
import About from "./files/About";
import Products from "./files/Products";
import Contact from "./files/Contact";
import Cart from "./files/Cart";
import SingleProduct from "./files/SingleProduct";
import Error from "./files/Error";
import Header from "./components/Header"
import Footer from "./components/Footer";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24,24,29)",
      text: "rgba(29,29,29,.8)",
      white: "#fff",
      black: "#212529",
      pureBlack: "#000000",
      lightBlack: "#1d1d1d",
      yellow: "rgb(242 255 0)",
      contrastBlack: "#0f0f0f",
      helper: "#ffff00",
      pink: "#ff0099",
      footer_bg: "#ff0099",

      bg: "#F6F8FA",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243,0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/products" element={<Products />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/singleproduct/:id" element={<SingleProduct />} />
            <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
