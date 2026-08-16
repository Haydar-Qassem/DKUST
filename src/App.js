import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Login from "./pages/login-page";
import Register from "./pages/register-page";
import Products from "./pages/products-page";

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route
              path="/"
              element={
                <div className="container mt-5 text-center">
                  <h2>Home Page</h2>
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="container mt-5 text-center">
                  <h2>About Page</h2>
                </div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <div className="container mt-5 text-center">
                  <h2>Portfolio</h2>
                </div>
              }
            />
            <Route path="/products" element={
              <Products />
            }
            />
            <Route
              path="/services"
              element={
                <div className="container mt-5 text-center">
                  <h2>Services</h2>
                </div>
              }
            />
            <Route
              path="/blog"
              element={
                <div className="container mt-5 text-center">
                  <h2>Blog</h2>
                </div>
              }
            />
            <Route
              path="/resources"
              element={
                <div className="container mt-5 text-center">
                  <h2>Resources</h2>
                </div>
              }
            />
            <Route
              path="/quiz"
              element={
                <div className="container mt-5 text-center">
                  <h2>Quiz</h2>
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="container mt-5 text-center">
                  <h2>Contact Us</h2>
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="*"
              element={
                <div className="container mt-5 text-center">
                  <h2>404 - Page Not Found</h2>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
