import { Link } from "react-router-dom";
import { HeaderStyles } from "./styles";

export default function Header() {
  return (
    <HeaderStyles>
      <div className="container header-inner d-flex align-items-center justify-content-between">
        <div className="logo d-inline-block fw-bold fs-4">DKUST</div>
        <nav className="main-nav">
          <ul className="d-flex align-items-center justify-content-between gap-4 mb-0">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/portfolio">PORTFOLIO</Link>
            </li>
            <li>
              <Link to="/services">SERVICES</Link>
            </li>
            <li>
              <Link to="/blog">BLOG</Link>
            </li>
            <li>
              <Link to="/resources">RESOURCES</Link>
            </li>
            <li>
              <Link to="/quiz">QUIZ</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
            <li>
              <Link to="/login" className="btn btn-outline-success btn-login">
                LOGIN
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="btn btn-outline-success btn-login"
              >
                REGISTER
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
}
