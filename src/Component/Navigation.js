import { Navbar, Container, Nav, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container className="mt-4">
          <Navbar.Brand href="/">VENSTREAM</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link>
              <Button variant="danger">Masuk</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
