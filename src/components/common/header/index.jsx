import { Link, NavLink } from "react-router-dom";
import { HeaderButton, HeaderStyles, Logo } from "./styles";

export default function Header() {
  return (
    <HeaderStyles>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "calc(var(--spacing) * 16)",
          paddingInline: "24px",
        }}
      >
        <Logo>DKUST</Logo>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">PORTFOLIO</NavLink>
            </li>
            <li>
              <NavLink to="/products">PRODUCTS</NavLink>
            </li>
            <li>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            <li>
              <NavLink to="/blog">BLOG</NavLink>
            </li>
            <li>
              <NavLink to="/resources">RESOURCES</NavLink>
            </li>
            <li>
              <NavLink to="/quiz">QUIZ</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <Link to="/login" className="header-btn">
                <HeaderButton>LOGIN</HeaderButton>
              </Link>
            </li>
            <li>
              <Link to="/register" className="header-btn">
                <HeaderButton>REGISTER</HeaderButton>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
}
