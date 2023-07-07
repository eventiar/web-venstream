import { Button, Col, Container, Row } from "react-bootstrap";

const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-item-center text-center">
        <Row>
          <Col>
            <div className="title">STREAMING FILM</div>
            <div className="title">SUPERHERO FAVORIT</div>
            <div className="introButton mt-4">
              <Button variant="danger">Temukan Superhero</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
