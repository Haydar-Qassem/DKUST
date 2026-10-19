import React from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Login from "./pages/login-page";
import Register from "./pages/register-page";
import Products from "./pages/products-page";
import { ProductDetailsPage } from "./pages/ProductDetails-page";
import QuizPage from "./pages/quiz-page";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./store/auth/authSelectors";
import { logout } from "./store/auth/authSlice";
import Logout from "./pages/logout-page";

export default function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
            <Route path="/products" element={<Products />} />
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
            <Route path="/quiz" element={<QuizPage />} />
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
            <Route path="/logout" element={<Logout />} />
            <Route
              path="/profile"
              element={
                <div className="container mt-5 text-center">
                  <h2>Profile</h2>
                  <p>Welcome, {user?.name}!</p>
                </div>
              }
            />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
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
