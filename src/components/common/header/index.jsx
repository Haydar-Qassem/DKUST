import { Link, NavLink } from "react-router-dom";
import {
  HeaderActions,
  HeaderButton,
  HeaderStyles,
  Logo,
  ThemeToggle,
  UserLabel,
} from "./styles";
import { useTheme } from "../../../Context/Theme/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../store/auth/authSelectors";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const user = useSelector(selectUser);

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
              <button onClick={toggleTheme}>{theme}</button>
            </li>
            <li>
              <HeaderActions>
                <ThemeToggle type="button" onClick={toggleTheme}>
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </ThemeToggle>
              </HeaderActions>
            </li>
            {user ? (
              <div style={{ display: "flex" }}>
                <li>
                  <Link to="/logout" className="header-btn">
                    <HeaderButton>LOGOUT</HeaderButton>
                  </Link>
                </li>
                <li>
                  <Link to="/profile" className="header-btn">
                    <HeaderButton>PROFILE</HeaderButton>
                  </Link>
                </li>
                <li>
                  <UserLabel>Welcome, {user.name}!</UserLabel>
                </li>
              </div>
            ) : (
              <div style={{ display: "flex" }}>
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
              </div>
            )}
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
}
