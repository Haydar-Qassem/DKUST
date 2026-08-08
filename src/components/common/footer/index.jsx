import { FooterStyles } from "./styles";

function Footer() {
  return (
    <FooterStyles>
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
    </FooterStyles>
  );
}

export default Footer;