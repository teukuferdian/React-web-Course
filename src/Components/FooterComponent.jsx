import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const FooterComponent = () => {
  return (
    <div className="footer py-5">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col lg="5">
            <h3 className="fw-bold">Ngoding.</h3>
            <p className="desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              aliquid repudiandae deleniti iste, modi cum amet iusto numquam
              quibusdam dolor.
            </p>
            <div className="no mb-1 mt-4">
              <Link className="text-decoration-none">
                <i className="fa-brands fa-whatsapp"></i>
                <p className="m-0">+62 823-6114-0757</p>
              </Link>
            </div>
            <div className="mail">
              <Link className="text-decoration-none">
                <i className="fa-reguler fa-envelope"></i>
                <p className="m-0">person-email@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col nt-lg-0 mt-5">
          <h5 className="fw-bold">Menu</h5>
          <Link to="Home">Home</Link>
          <Link to="kelas">Kelas</Link>
          <Link to="Testimonial">Testimonial</Link>
          <Link to="FAQ">FAQ</Link>
          <Link to="syaratketen">Syarat & Ketentuan</Link>
          </Col>
          <Col lg="4" className="mt-lg-0 mt-5">
          <h5 className="fw-bold mb-3">Subcribe untuk info menarik</h5>
          <div className="subcribe">
            <input type="text" placeholder="Subcribe.." />
            <button className="btn btn-danger rounded-end rounded-0">Subcribe</button>
          </div>
          <div className="social nt-3">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className="text-center px-md-0 px-3">&copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">Teuku Ferdian</span>,
          All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
