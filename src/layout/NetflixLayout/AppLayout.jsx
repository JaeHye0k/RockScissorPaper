import React from "react";
import { Outlet } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./AppLayout.style.css";

const AppLayout = () => {
  return (
    <div id="netflix">
      <header>
        <Navbar variant="dark" expand="lg" className="bg-dark">
          <Container fluid>
            <Navbar.Brand as={Link} to="">
              <img
                src="/assets/images/netflix/Netflix_Logo.png"
                alt="netflix logo"
                width={100}
              />
            </Navbar.Brand>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Nav.Link as={Link} to="">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="movies">
                Movies
              </Nav.Link>
            </Nav>
            <Form>
              <InputGroup>
                <Form.Control
                  data-bs-theme="dark"
                  type="search"
                  placeholder="Search"
                  className="me-2 search-box"
                  aria-label="Search"
                />
                <Button variant="outline-danger">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </InputGroup>
            </Form>
          </Container>
        </Navbar>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
