import { BottomFooter, FooterStyles } from "./styles";

function Footer() {
  return (
    <FooterStyles>
      <div className="container footer-columns row">
        <div className="footer-col col">
          <h3>CONTACT DETAIL</h3>
          <ul>
            <li>
              <span style={{ maxWidth: "160px" }}>
                123 Business Street, Suite 100, New York, NY 10001
              </span>
            </li>
            <li>Phone: +1 234 567 8900</li>
            <li>Email: info@dkust.com</li>
          </ul>
        </div>

        <div className="footer-col col">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="footer-col col">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>Robotics</li>
            <li>Industrial Consulting</li>
            <li>Data Analysis</li>
          </ul>
        </div>

        <div className="footer-col col">
          <h3>SUBSCRIBE NEWSLETTER</h3>
          <p>Get the latest updates and news.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email Address" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>

      <div className="container">
        <hr style={{ marginBottom: "20px" }} />
        <BottomFooter>
          <span
            style={{
              color: "var(--color-gray-400)",
              fontSize: "var(--text-xs)",
              lineHeight: "var(--text-xs--line-height)",
            }}
          >
            Copyright &copy; DKUST | All Rights Reserved
          </span>
          <div className="social-icon fs-5">
            <a href="/" className="text-muted">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="/" className="text-muted">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="/" className="text-muted">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="/" className="text-muted">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </BottomFooter>
      </div>
    </FooterStyles>
  );
}

export default Footer;
