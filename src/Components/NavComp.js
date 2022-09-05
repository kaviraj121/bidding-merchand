import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavComp.css";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

function NavComp() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/"
      )
      .then((res) => {
        setCoins(res.data.nav_bar);
        console.log(res.data.nav_bar);
      });
  }, []);

  return (
    <Navbar className="Blue" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="navbar-bar ">
          <FaBars size={28} className="Fabar fa-5x" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="toggle" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex offset-md-4 ">
            <Form.Control
              type="search"
              placeholder="Enter here"
              className="me-2"
              aria-label="Search"
            />
            <Button className="button">Search</Button>
          </Form>
          <Nav
            className="me-auto my-2 my-lg-0 offset-md-2"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="first">
              Live Bid
            </Nav.Link>
            <Nav.Link href="#action2">
              <img alt="person icon" src={coins.person_icon} />
            </Nav.Link>

            <Nav.Link href="#" className="Brand second">
              Help &amp; Support
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComp;
