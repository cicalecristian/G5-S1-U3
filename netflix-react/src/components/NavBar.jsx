import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Container from "react-bootstrap/Container"
import NetflixLogo from "../assets/img/netflix_logo.png"
import Avatar from "../assets/img/avatar.png"

const NavBar = function () {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
        <Container fluid className="p-0">
          <Navbar.Brand href="#">
            <img
              src={NetflixLogo}
              alt="netflix_logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link active href="#">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>

            <Nav className="align-items-center gap-3 text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>

              <Nav.Link active>KIDS</Nav.Link>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>

              <Nav.Link href="./profile.html">
                <img src={Avatar} alt="avatar" style={{ height: "30px" }} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container
        fluid
        className="px-5 d-flex justify-content-between align-items-center text-light bg-dark"
      >
        <div className="d-flex align-items-center gap-4">
          <h1>TV Shows</h1>

          <NavDropdown title="Genres" className="border px-2 py-1 small">
            <NavDropdown.Item>Action</NavDropdown.Item>
            <NavDropdown.Item>Comedy</NavDropdown.Item>
            <NavDropdown.Item>Drama</NavDropdown.Item>
          </NavDropdown>
        </div>

        <div className="d-flex align-items-center gap-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="border px-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="border px-1"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </div>
      </Container>
    </>
  )
}

export default NavBar
