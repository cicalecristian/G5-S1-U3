import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import NetflixLogo from "../assets/img/netflix_logo.png"
import Avatar from "../assets/img/avatar.png"

const Account = function () {
  return (
    <div className="bg-black min-vh-100">
      <Nav className="m-3">
        <Nav.Item>
          <Nav.Link href="#" className="p-0">
            <img
              src={NetflixLogo}
              alt="netflix_logo"
              style={{ height: "60px" }}
            />
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Container className="pt-4 text-white" style={{ maxWidth: "800px" }}>
        <Row className="border-bottom border-secondary mb-4">
          <Col>
            <h1 className="display-4 fw-normal">Edit Profile</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={3} className="mb-4 p-0 ps-2">
            <div className="position-relative" style={{ width: "150px" }}>
              <img src={Avatar} className="img-fluid" alt="Avatar" />
              <div className="position-absolute bottom-0 start-0 m-2 bg-dark rounded-circle p-1 border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  fill="white"
                  className="bi bi-pencil"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                </svg>
              </div>
            </div>
          </Col>

          <Col xs={12} md={9} className="p-0 px-2">
            <Row className="mb-4">
              <Col>
                <p className="bg-secondary text-white py-2 px-2">
                  Strive Student
                </p>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col>
                <p className="text-secondary d-block mb-2 fs-5">Language:</p>
                <Form.Select className="bg-black text-white border-secondary rounded-0 w-auto">
                  <option>English</option>
                  <option>Italiano</option>
                </Form.Select>
              </Col>
            </Row>

            <hr className="border-secondary" />

            <Row className="mb-4">
              <Col>
                <p className="text-secondary d-block mb-2 fs-5">
                  Maturity Settings:
                </p>
                <span className="badge bg-dark px-3 py-2 mb-2 rounded-0">
                  ALL MATURITY RATINGS
                </span>
                <p className="small">
                  Show titles of <strong>all maturity ratings</strong> for this
                  profile.
                </p>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="px-4 border-2 rounded-0 fw-bold"
                >
                  EDIT
                </Button>
              </Col>
            </Row>

            <hr className="border-secondary" />

            <Row className="mb-4">
              <Col>
                <p className="text-secondary d-block mb-2 text-light">
                  Autoplay controls
                </p>

                <Row className="mb-2 align-items-center">
                  <Col xs={1} className="d-flex justify-content-end p-0">
                    <Form.Check
                      type="checkbox"
                      defaultChecked
                      className="bg-transparent border-secondary rounded-0 p-2 me-3"
                    />
                  </Col>
                  <Col xs={11} className="p-0">
                    <span className="small">
                      Autoplay next episode in a series on all devices.
                    </span>
                  </Col>
                </Row>

                <Row className="align-items-center">
                  <Col xs={1} className="d-flex justify-content-end p-0">
                    <Form.Check
                      type="checkbox"
                      defaultChecked
                      className="bg-transparent border-secondary rounded-0 p-2 me-3"
                    />
                  </Col>
                  <Col xs={11} className="p-0">
                    <span className="small">
                      Autoplay previews while browsing on all devices.
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <hr className="border-secondary w-100" />

          <Row className="py-3">
            <Col className="d-flex gap-4 flex-wrap justify-content-center">
              <Button className="btn-light fw-bold px-5 rounded-0 fs-5">
                SAVE
              </Button>
              <Button
                variant="outline-secondary"
                className="px-5 rounded-0 fs-5"
              >
                CANCEL
              </Button>
              <Button
                variant="outline-secondary"
                className="px-5 rounded-0 fs-5"
              >
                DELETE PROFILE
              </Button>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default Account
