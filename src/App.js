import React, { useState } from "react";
import "./styles.css";

// 1. HEADER COMPONENT
function Header() {
  return (
    <header className="site-header p-3">
      <div className="container header-inner d-flex align-items-center justify-content-between">
        <div className="logo d-inline-block fw-bold fs-4">DKUST</div>
        <nav className="main-nav">
          <ul className="d-flex align-items-center justify-content-between gap-4 mb-0">
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT</a></li>
            <li><a href="/">PORTFOLIO</a></li>
            <li><a href="/">SERVICES</a></li>
            <li><a href="/">BLOG</a></li>
            <li><a href="/">RESOURCES</a></li>
            <li><a href="/">QUIZ</a></li>
            <li><a href="/">CONTACT</a></li>
            <li>
              <a href="/" className="btn btn-outline-success btn-login">LOGIN</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// 2. LOGIN COMPONENT
function Login() {
  // We use React state to replace your document.getElementById calls
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  // This replaces your login() function
  const handleLogin = (e) => {
    e.preventDefault(); // Prevents the default HTML form submission reload
    const userData = {
      email: email,
      password: password,
      rememberMe: rememberMe,
    };
    console.log(userData);
  };

  // These replace your social and forgot password functions
  const signInWithGoogle = () => console.log("Sign in with Google");
  const signInWithFB = () => console.log("Sign in with Facebook");
  const forgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password");
  };

  return (
    <main className="login-wrapper d-flex flex-column align-items-center justify-content-center py-5">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to your DKUST account</p>
        </div>

        <form id="loginForm" className="login-form" onSubmit={handleLogin}>
          {/* Email */}
          <div className="login-form-group">
            <label htmlFor="emailInput" className="login-label">Email Address</label>
            <div className="login-input-group">
              <span className="login-input-icon">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                type="email"
                className="login-input"
                id="emailInput"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-form-group">
            <div className="login-label-row">
              <label htmlFor="passwordInput" className="login-label">Password</label>
              <a href="/" id="forgotPasswordLink" className="login-forgot-link" onClick={forgotPassword}>
                Forgot password?
              </a>
            </div>
            <div className="login-input-group">
              <span className="login-input-icon">
                <i className="fa-solid fa-lock"></i>
              </span>
              <input
                type="password"
                className="login-input"
                id="passwordInput"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="login-input-icon pointer">
                <i className="fa-regular fa-eye"></i>
              </span>
            </div>
          </div>

          {/* Remember Me */}
          <div className="login-checkbox-group">
            <input
              type="checkbox"
              className="login-checkbox"
              id="rememberMeCheck"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label className="login-checkbox-label" htmlFor="rememberMeCheck">
              Remember me
            </label>
          </div>

          {/* Submit */}
          <div className="center-in-login-card">
            <button type="submit" id="signInBtn" className="login-submit-btn">
              SIGN IN
            </button>
          </div>

          <div className="center-in-login-card">
            <div className="or-continue-with">or continue with</div>
          </div>
          
          <div className="login-social-group">
            <button type="button" id="googleBtn" className="login-social-btn" onClick={signInWithGoogle}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                width="16"
              />
              Google
            </button>
            <button type="button" id="facebookBtn" className="login-social-btn" onClick={signInWithFB}>
              <i className="fa-brands fa-facebook facebook-icon"></i>
              Facebook
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="login-signup-text">
            Don't have an account? <a href="/" className="login-signup-link">Sign up</a>
          </div>
        </form>
      </div>

      {/* Back to Home */}
      <a href="/" className="text-white mt-4 text-decoration-underline opacity-75">
        Back to Home
      </a>
    </main>
  );
}

// 3. FOOTER COMPONENT
function Footer() {
  return (
    <footer className="site-footer d-flex flex-column align-items-center justify-content-center gap-4 pt-5">
      <div className="container footer-columns row p-3">
        <div className="footer-col col d-flex flex-column align-items-start justify-content-start gap-4">
          <h3 className="fw-bold">Contact Detail</h3>
          <ul>
            <li>123 Business Street,</li>
            <li>Suite 100, New York,</li>
            <li>NY 10001</li>
            <li>Phone: +1 234 567 8900</li>
            <li>Email: info@dkust.com</li>
          </ul>
        </div>

        <div className="footer-col col d-flex flex-column align-items-start justify-content-start gap-4">
          <h3 className="fw-bold">Quick Links</h3>
          <ul>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Portfolio</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col col d-flex flex-column align-items-start justify-content-start gap-4">
          <h3 className="fw-bold">Our Services</h3>
          <ul>
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>Robotics</li>
            <li>Industrial Consulting</li>
            <li>Data Analysis</li>
          </ul>
        </div>

        <div className="footer-col col d-flex flex-column align-items-start justify-content-start gap-4">
          <h3 className="fw-bold">Subscribe Newsletter</h3>
          <p>Subscribe to our newsletter to get the latest updates and news.</p>
          <form className="d-flex gap-0" onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="form-control" placeholder="Enter Address" />
            <button type="submit" className="btn btn-success">submit</button>
          </form>
        </div>
      </div>

      <div className="container footer-bottom d-flex align-items-center justify-content-between p-3">
        <p>Copyright &copy; All Rights Reserved</p>
        <div className="social-icons d-flex gap-3 fs-5">
          <a href="/" className="text-muted"><i className="fa-brands fa-facebook"></i></a>
          <a href="/" className="text-muted"><i className="fa-brands fa-twitter"></i></a>
          <a href="/" className="text-muted"><i className="fa-brands fa-linkedin"></i></a>
          <a href="/" className="text-muted"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

// 4. MAIN APP COMPONENT (Bringing it all together)
export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Login />
      <Footer />
    </div>
  );
}